/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useUnityPlayerContext } from '../UnityPlayerProvider';
import logging from '../../../lib/logging';
import { UNITY_GAME_OBJECT } from '../../../constraints';
import {
  PlannerQuery,
  useCreateProjectModuleMutation,
  useDeleteProjectModuleMutation
} from '../../../apollo/generated/graphql';
import { nanoid } from 'nanoid';

type PieceBuilderState = 'None' | 'Created' | 'Selected' | 'Editing' | 'Placed' | 'AddingSubModule' | 'Deleted';

export type ProjectModule = {
  id: string;
  moduleId: number;
  partNumber: string;
  bundleUrl?: string;

  posX: number;
  posY: number;
  posZ: number;
  rotY: number;

  parentId?: string; // The parent if this is a submodule
  children?: ProjectModule[]; // The list of submodules if this is a parent
};

/*
 * React Context
 * */

type PlannerContextType = {
  hasProvider: boolean;
  // State variables
  state: PieceBuilderState;
  isPending: boolean;
  projectModule?: ProjectModule;
  error?: string;
  cartAmount: number;
  idMap: { [key: string]: Record<string, number> } | null;
  // Methods
  // State Methods
  setIsPending: (isPending: boolean) => void;

  // Interaction Methods
  trayDone: () => void;
  trayDelete: () => void;
  trayEdit: () => void;
  trayRotateLeft: () => void;
  trayRotateRight: () => void;
  createModule: (
    partNumber: string,
    moduleId: number,
    projectModuleId: string,
    rules: string,
    bundleUrl: string
  ) => void;
  createChildrenModule: (
    partNumber: string,
    moduleId: number,
    projectModuleId: string,
    rules: string,
    bundleUrl: string
  ) => void;
  setupDrawer: (
    width: number,
    depth: number,
    gable: number,
    finishSlug: string,
    isPegboard: boolean,
    drawerTypeSlug: string,
    initialModules?: ProjectModule[]
  ) => void;
};

const initialState: PlannerContextType = {
  hasProvider: false,
  state: 'None',
  isPending: false,
  cartAmount: 0,
  idMap: null,
  setIsPending: () => {
    throw new Error('setIsPending is not implemented');
  },
  trayDone: () => {
    throw new Error('trayDone is not implemented');
  },
  trayDelete: () => {
    throw new Error('trayDelete is not implemented');
  },
  trayEdit: () => {
    throw new Error('trayEdit is not implemented');
  },
  trayRotateLeft: () => {
    throw new Error('trayRotateLeft is not implemented');
  },
  trayRotateRight: () => {
    throw new Error('trayRotateRight is not implemented');
  },
  createModule: () => {
    throw new Error('createModule is not implemented');
  },
  createChildrenModule: () => {
    throw new Error('createChildrenModule is not implemented');
  },
  setupDrawer: () => {
    throw new Error('setupDrawer is not implemented');
  }
};

/*
 * Component
 * */
const PlannerContext = React.createContext<PlannerContextType>(initialState);

export type PlannerProviderProps = { project: NonNullable<PlannerQuery['project']> };

export const PlannerProvider: React.FC<PlannerProviderProps> = ({ children, project }) => {
  // ***********
  // ** Misc
  // ***********
  const { hasProvider, unityInstance, state: unityPlayerState } = useUnityPlayerContext();
  const { id: projectId } = project;

  if (!hasProvider) {
    throw 'Called PlannerProvider. But no PlannerProvider was found. Wrap your PlannerProvider with the UnityPlayerProvider component';
  }

  // ***********
  // ** Grapqhl declarations
  // ***********

  // ** Mutations
  const [doCreateProjectModule] = useCreateProjectModuleMutation();
  // const [doUpdateProjectModule] = useUpdateProjectModuleMutation();
  const [doDeleteProjectModule] = useDeleteProjectModuleMutation();

  // ***********
  // ** Business logic
  // ***********

  // ** States
  const [didSetup, setDidSetup] = useState(false);
  const [isPending, setIsPending] = useState(initialState.isPending);

  const [error, setError] = useState<string | undefined>(initialState.error);
  const [idMap, setIdMap] = useState<PlannerContextType['idMap']>(null);

  const cartAmount = useMemo(() => (idMap ? Object.keys(idMap).length : 0), [idMap]);

  const [state, setState] = useState(initialState.state);
  const [projectModule, setProjectModule] = useState<ProjectModule | undefined>(undefined);

  // ***********
  // ** Unity <-> React logic
  // ***********+

  const handleSetupFinished = useCallback((error: string) => {
    setIsPending(false);
    if (error) {
      setError(error);
      logging.error(new Error(error));
    }
  }, []);

  const handleCreateModule = useCallback((moduleJson: string) => {
    const projectModule = JSON.parse(moduleJson) as ProjectModule;
    console.log('createModule: ', projectModule);
    setProjectModule(projectModule);
    setIsPending(false);
    setState('Created');
  }, []);

  const handlePlaceModule = useCallback(
    async (moduleJson: string) => {
      const module = JSON.parse(moduleJson) as ProjectModule;
      console.log('placedModule: ', module);
      setIsPending(false);

      if (state === 'Editing' && idMap && !idMap[module.id]) {
        const { id, posX, posY, posZ, rotY, parentId, moduleId, children } = module;
        try {
          const form = {
            posX,
            posY,
            posZ,
            rotY,
            module: { connect: { id: moduleId } },
            project: { connect: { id: projectId } },
            parent: parentId ? { connect: { id: idMap[parentId].id } } : undefined,
            children:
              children && children.length > 0
                ? {
                    createMany: {
                      data: children.map(({ posX, posY, posZ, rotY, moduleId }) => ({
                        posX,
                        posY,
                        posZ,
                        rotY,
                        moduleId,
                        projectId
                      }))
                    }
                  }
                : undefined
          };
          const { data } = await doCreateProjectModule({
            variables: {
              data: form
            }
          });
          if (data) {
            setIdMap({
              ...idMap,
              [id]: { id: data.createOneProjectModule.id, moduleId: data.createOneProjectModule.moduleId }
            });
          } else {
            logging.warn(`Created project module but it did not return any data`, { state, module });
          }
        } catch (err) {
          logging.error(err as Error, `Failed creating project module`, { state, module });
        }
      }

      setProjectModule(undefined);
      setState('Placed');
    },
    [state, idMap, projectId, doCreateProjectModule]
  );

  const handleSelectModule = useCallback((moduleJson: string) => {
    const projectModule = JSON.parse(moduleJson) as ProjectModule;
    console.log('selectedModule: ', projectModule);
    setProjectModule(projectModule);
    setIsPending(false);
    setState('Selected');
  }, []);

  const handleEditModule = useCallback((moduleJson: string) => {
    const projectModule = JSON.parse(moduleJson) as ProjectModule;
    console.log('editedModule: ', projectModule);
    setProjectModule(projectModule);
    setIsPending(false);
    setState('Editing');
  }, []);

  const handleDeleteModule = useCallback(
    async (moduleId: string) => {
      console.log('deletedModule: ', moduleId);
      setIsPending(false);

      if (projectModule && idMap && idMap[projectModule.id] && (state === 'Editing' || state === 'Deleted')) {
        const { id, children } = projectModule;

        const idsToDelete = [id, ...(children?.map((x) => x.id) || [])].map((x) => idMap[x].id);

        try {
          const { data } = await doDeleteProjectModule({
            variables: {
              ids: idsToDelete
            }
          });

          if (data && data.deleteManyProjectModule.count > 0) {
            setIdMap(
              Object.entries(idMap)
                .filter((x) => !idsToDelete.includes(x[1].id))
                .reduce((obj, entry) => ({ ...obj, [entry[0]]: entry[1] }), {} as typeof idMap)
            );
          } else {
            logging.warn(`Deleted project modules but no data was returned`, { state, projectModule });
          }
        } catch (err) {
          logging.error(err as Error, `Failed deleting project modules`, { state, projectModule });
        }
      }

      setProjectModule(undefined);
      setState('Deleted');
    },
    [state, projectModule, idMap, doDeleteProjectModule]
  );

  useEffect(() => {
    /*
     * Unity -> React
     * */
    const planner = {
      setupFinished: handleSetupFinished,
      createdModule: handleCreateModule,
      selectedModule: handleSelectModule,
      editedModule: handleEditModule,
      placedModule: handlePlaceModule,
      deletedModule: handleDeleteModule
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).planner = planner;
  }, [
    handleSetupFinished,
    handleCreateModule,
    handleSelectModule,
    handleEditModule,
    handlePlaceModule,
    handleDeleteModule
  ]);

  /*
   * React -> Unity
   * */

  const trayDone = useCallback(() => {
    unityInstance.current?.SendMessage(UNITY_GAME_OBJECT, 'TrayDone');
  }, [unityInstance]);

  const trayDelete = useCallback(() => {
    unityInstance.current?.SendMessage(UNITY_GAME_OBJECT, 'TrayDelete');
  }, [unityInstance]);

  const trayEdit = useCallback(() => {
    unityInstance.current?.SendMessage(UNITY_GAME_OBJECT, 'TrayEdit');
  }, [unityInstance]);

  const trayRotateLeft = useCallback(() => {
    unityInstance.current?.SendMessage(UNITY_GAME_OBJECT, 'TrayRotateLeft');
  }, [unityInstance]);

  const trayRotateRight = useCallback(() => {
    unityInstance.current?.SendMessage(UNITY_GAME_OBJECT, 'TrayRotateRight');
  }, [unityInstance]);

  const createModule = useCallback(
    (partNumber: string, moduleId: number, projectModuleId: string, rules: string, bundleUrl: string) => {
      // console.log(
      //   JSON.stringify({
      //     partNumber,
      //     moduleId,
      //     projectModuleId,
      //     rules,
      //     bundleUrl
      //   })
      // );
      unityInstance.current?.SendMessage(
        UNITY_GAME_OBJECT,
        'CreateModule',
        JSON.stringify({
          partNumber,
          moduleId,
          projectModuleId,
          rules,
          bundleUrl
        })
      );
    },
    [unityInstance]
  );

  const createChildrenModule = useCallback(
    (partNumber: string, moduleId: number, projectModuleId: string, rules: string, bundleUrl: string) => {
      unityInstance.current?.SendMessage(
        UNITY_GAME_OBJECT,
        'CreateChildrenModule',
        JSON.stringify({
          partNumber,
          moduleId,
          projectModuleId,
          rules,
          bundleUrl
        })
      );
    },
    [unityInstance]
  );

  const setupDrawer = useCallback(
    (
      width: number,
      depth: number,
      gable: number,
      finishSlug: string,
      isPegboard: boolean,
      drawerTypeSlug: string,
      initialModules?: ProjectModule[]
    ) => {
      console.log(
        JSON.stringify({
          width,
          depth,
          gable,
          finishSlug,
          isPegboard,
          drawerType: drawerTypeSlug,
          initialModules
        })
      );
      unityInstance.current?.SendMessage(
        UNITY_GAME_OBJECT,
        'SetupDrawer',
        JSON.stringify({
          width,
          depth,
          gable,
          finishSlug,
          isPegboard,
          drawerType: drawerTypeSlug,
          initialModules
        })
      );
    },
    [unityInstance]
  );

  useEffect(() => {
    if (unityPlayerState === 'complete' && !didSetup) {
      let idMaps = {};
      const projectModules = project.projectModules?.map(
        ({ posX, posY, posZ, rotY, moduleId, module: { bundleUrl, partNumber }, children, id: originalId }) => {
          const id = nanoid();
          idMaps = { ...idMaps, [id]: { moduleId, id: originalId } };
          return {
            id,
            posX: posX || 0,
            posY: posY || 0,
            posZ: posZ || 0,
            rotY: rotY || 0,
            bundleUrl: bundleUrl || undefined,
            partNumber,
            moduleId,
            children: children?.map(
              ({ posX, posY, posZ, rotY, moduleId, module: { bundleUrl, partNumber }, id: originalId }) => {
                const childId = nanoid();
                idMaps = { ...idMaps, [childId]: { moduleId, id: originalId } };
                return {
                  id: childId,
                  parentId: id,
                  posX: posX || 0,
                  posY: posY || 0,
                  posZ: posZ || 0,
                  rotY: rotY || 0,
                  bundleUrl: bundleUrl || undefined,
                  partNumber,
                  moduleId
                };
              }
            )
          };
        }
      );

      setTimeout(() => {
        setupDrawer(
          project.calculatedWidth || 0,
          project.slideDepth.depth,
          project.gable,
          project.finish.slug,
          project.hasPegs,
          project.type.slug,
          projectModules
        );
      }, 30);
      setDidSetup(true);
      setIdMap(idMaps);
    }
  }, [didSetup, project, setupDrawer, unityPlayerState]);

  return (
    <PlannerContext.Provider
      value={{
        hasProvider: true,
        state,
        isPending,
        setIsPending,
        projectModule,
        idMap,
        error,
        cartAmount,
        trayDone,
        trayDelete,
        trayEdit,
        trayRotateLeft,
        trayRotateRight,
        createModule,
        createChildrenModule,
        setupDrawer
      }}
    >
      {children}
    </PlannerContext.Provider>
  );
};

/*
 * Hooks
 * */

export const usePlannerContext = () => useContext(PlannerContext);

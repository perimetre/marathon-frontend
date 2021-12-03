/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useUnityPlayerContext } from '../UnityPlayerProvider';
import logging from '../../../lib/logging';
import { UNITY_GAME_OBJECT } from '../../../constraints';
import {
  ModuleDataFragment,
  PlannerQuery,
  useCreateProjectModuleMutation,
  useDeleteProjectModuleMutation
} from '../../../apollo/generated/graphql';
import { nanoid } from 'nanoid';

type PieceBuilderState = 'None' | 'Created' | 'Selected' | 'Editing' | 'Placed' | 'AddingSubModule' | 'Deleted';

export type ModuleJson = {
  partNumber: string;
  moduleId: number;
  projectModuleId: string;
  bundleUrl: string;
  isSubmodule: boolean;
  isExtension: boolean;

  // Parsed rules json
  metadata: Record<string, unknown>;
};

export type ProjectModuleJson = {
  id: string;

  posX: number;
  posY: number;
  posZ: number;
  rotY: number;

  module: ModuleJson;

  parentId?: string; // The parent if this is a submodule
  children?: ProjectModuleJson[]; // The list of submodules if this is a parent
};

const makeModuleJson = (module: ModuleDataFragment, projectModuleId: string, isExtension?: boolean) => {
  return {
    partNumber: module.partNumber,
    moduleId: module.id,
    projectModuleId,
    bundleUrl: module.bundleUrl,
    isSubmodule: module.isSubmodule,
    isExtension: isExtension || false,
    metadata: module.rulesJson
  } as ModuleJson;
};

/*
 * React Context
 * */

type PlannerContextType = {
  hasProvider: boolean;
  // State variables
  state: PieceBuilderState;
  isPending: boolean;
  projectModule?: ProjectModuleJson;
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
  createModule: (module: ModuleDataFragment) => void;
  createChildrenModule: (module: ModuleDataFragment) => void;
  setupDrawer: (
    width: number,
    depth: number,
    gable: number,
    finishSlug: string,
    isPegboard: boolean,
    drawerTypeSlug: string,
    initialModules?: ProjectModuleJson[]
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
  const [projectModule, setProjectModule] = useState<ProjectModuleJson | undefined>(undefined);

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
    const projectModule = JSON.parse(moduleJson) as ProjectModuleJson;
    console.log('createModule: ', projectModule);
    setProjectModule(projectModule);
    setIsPending(false);
    setState('Created');
  }, []);

  const handlePlaceModule = useCallback(
    async (moduleJson: string) => {
      const module = JSON.parse(moduleJson) as ProjectModuleJson;
      console.log('placedModule: ', module);
      setIsPending(false);

      if (state === 'Editing' && idMap && !idMap[module.id]) {
        const {
          id,
          posX,
          posY,
          posZ,
          rotY,
          parentId,
          module: { moduleId },
          children
        } = module;
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
                      data: children.map(({ posX, posY, posZ, rotY, module: { moduleId } }) => ({
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
    const projectModule = JSON.parse(moduleJson) as ProjectModuleJson;
    console.log('selectedModule: ', projectModule);
    setProjectModule(projectModule);
    setIsPending(false);
    setState('Selected');
  }, []);

  const handleEditModule = useCallback((moduleJson: string) => {
    const projectModule = JSON.parse(moduleJson) as ProjectModuleJson;
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
    (module: ModuleDataFragment) => {
      const projectModuleId = nanoid();
      const moduleJson = makeModuleJson(module, projectModuleId);

      const json = JSON.stringify(moduleJson);

      console.log('createModule', json);

      unityInstance.current?.SendMessage(UNITY_GAME_OBJECT, 'CreateModule', json);
    },
    [unityInstance]
  );

  const createChildrenModule = useCallback(
    (module: ModuleDataFragment) => {
      const projectModuleId = nanoid();
      const isExtension = false;
      console.error('Refactor UI: TODO: Make sure to pass isExtension correctly');
      const moduleJson = makeModuleJson(module, projectModuleId, isExtension);

      const json = JSON.stringify(moduleJson);

      console.log('createChildrenModule', json);

      unityInstance.current?.SendMessage(UNITY_GAME_OBJECT, 'CreateChildrenModule', json);
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
      initialModules?: ProjectModuleJson[]
    ) => {
      const json = JSON.stringify({
        width,
        depth,
        gable,
        finishSlug,
        isPegboard,
        drawerType: drawerTypeSlug,
        initialModules
      });

      console.log('setupDrawer', json);

      unityInstance.current?.SendMessage(UNITY_GAME_OBJECT, 'SetupDrawer', json);
    },
    [unityInstance]
  );

  useEffect(() => {
    if (unityPlayerState === 'complete' && !didSetup) {
      let idMaps = {};
      const projectModules = project.projectModules?.map((projectModule) => {
        const id = nanoid();
        idMaps = { ...idMaps, [id]: { moduleId: projectModule.moduleId, id: projectModule.id } };

        return {
          id,
          posX: projectModule.posX || 0,
          posY: projectModule.posY || 0,
          posZ: projectModule.posZ || 0,
          rotY: projectModule.rotY || 0,
          module: makeModuleJson(projectModule.module, id),
          children: projectModule.children?.map((childProjectModule) => {
            const childId = nanoid();
            idMaps = { ...idMaps, [childId]: { moduleId: childProjectModule.moduleId, id: childProjectModule.id } };

            const isExtension = false;
            console.error('Refactor UI: TODO: Make sure to pass isExtension correctly');

            return {
              id: childId,
              parentId: id,
              posX: childProjectModule.posX || 0,
              posY: childProjectModule.posY || 0,
              posZ: childProjectModule.posZ || 0,
              rotY: childProjectModule.rotY || 0,
              module: makeModuleJson(childProjectModule.module, childId, isExtension)
            };
          })
        } as ProjectModuleJson;
      });

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

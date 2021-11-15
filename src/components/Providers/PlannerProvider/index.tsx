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

type PieceBuilderState = 'None' | 'Selected' | 'Editing' | 'Placed' | 'AddingSubModule' | 'Deleted';

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
  const [projectModule, setProjectModule] = useState<ProjectModule | undefined>(undefined);
  // TODO: Remove next line if we start using prevState
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [prevState, setPrevState] = useState(initialState.state);
  const [state, setState] = useState(initialState.state);
  const [isPending, setIsPending] = useState(initialState.isPending);
  const [error, setError] = useState<string | undefined>(initialState.error);
  const [idMap, setIdMap] = useState<Record<string, number>>({});
  const cartAmount = useMemo(() => Object.keys(idMap).length, [idMap]);

  // TODO: Check if error change on effect, and display tooltip for X seconds, then clear error when the tooltip closes

  // ** Effects

  // Create project
  useEffect(() => {
    const createProjectModuleEffect = async () => {
      // If there's a project module
      // If the project module hasn't already been created (if it's not on idMap)
      // And the state is placed or selected
      if (
        projectModule &&
        !idMap[projectModule.id] &&
        prevState === 'Editing' &&
        (state === 'Placed' || state === 'Selected')
      ) {
        const { id, posX, posY, posZ, rotY, parentId, moduleId, children } = projectModule;

        try {
          const { data } = await doCreateProjectModule({
            variables: {
              data: {
                posX,
                posY,
                posZ,
                rotY,
                module: { connect: { id: moduleId } },
                project: { connect: { id: projectId } },
                parent: parentId ? { connect: { id: idMap[parentId] } } : undefined,
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
              }
            }
          });

          if (data) {
            setIdMap({ ...idMap, [id]: data.createOneProjectModule.id });
          } else {
            logging.warn(`Created project module but it did not return any data`, { state, projectModule });
          }
        } catch (err) {
          logging.error(err as Error, `Failed creating project module`, { state, projectModule });
        }
      }
    };

    createProjectModuleEffect();
  }, [doCreateProjectModule, idMap, projectId, projectModule, state, prevState]);

  // Delete project
  useEffect(() => {
    const deleteProjectModuleEffect = async () => {
      // If there's a project module
      // If the project module has already been created (if it's on idMap)
      // And the state is deleted or editing
      if (projectModule && idMap[projectModule.id] && (state === 'Editing' || state === 'Deleted')) {
        const { id, children } = projectModule;

        const idsToDelete = [id, ...(children?.map((x) => x.id) || [])].map((x) => idMap[x]);

        try {
          const { data } = await doDeleteProjectModule({
            variables: {
              ids: idsToDelete
            }
          });

          if (data && data.deleteManyProjectModule.count > 0) {
            setIdMap(
              Object.entries(idMap)
                .filter((x) => !idsToDelete.includes(x[1]))
                .reduce((obj, entry) => ({ ...obj, [entry[0]]: entry[1] }), {} as typeof idMap)
            );
          } else {
            logging.warn(`Deleted project modules but no data was returned`, { state, projectModule });
          }
        } catch (err) {
          logging.error(err as Error, `Failed deleting project modules`, { state, projectModule });
        }
      }
    };

    deleteProjectModuleEffect();
  }, [doDeleteProjectModule, idMap, projectModule, state]);

  // ***********
  // ** Unity <-> React logic
  // ***********

  useEffect(() => {
    /*
     * Unity -> React
     * */
    const planner = {
      moduleStateChange: (builderState: PieceBuilderState, projectModuleJson: string) => {
        if (projectModuleJson) {
          try {
            const projectModule = JSON.parse(projectModuleJson) as ProjectModule;
            setProjectModule(projectModule);
          } catch (error) {
            logging.error(error as Error);
            setProjectModule(undefined);
          }
        } else {
          setProjectModule(undefined);
        }
        setState((state) => {
          setPrevState(state);
          return builderState;
        });
      },
      setupFinished: (error?: string) => {
        setIsPending(false);
        console.log('setupFinished');

        if (error) {
          setError(error);
          logging.error(new Error(error));
        }
      },
      deletedModule: (projectModuleId: string) => {
        setState('Deleted');

        console.log(projectModuleId);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).planner = planner;
  }, []);

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
      //   JSON.stringify(
      //     {
      //       partNumber,
      //       moduleId,
      //       projectModuleId,
      //       rules,
      //       bundleUrl
      //     },
      //     undefined,
      //     2
      //   )
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
      // console.log(
      //   JSON.stringify(
      //     {
      //       partNumber,
      //       moduleId,
      //       projectModuleId,
      //       rules,
      //       bundleUrl
      //     },
      //     undefined,
      //     2
      //   )
      // );
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
      // console.log(
      //   JSON.stringify(
      //     {
      //       width,
      //       depth,
      //       gable,
      //       finishSlug,
      //       isPegboard,
      //       drawerTypeSlug,
      //       initialModules
      //     },
      //     undefined,
      //     2
      //   )
      // );
      unityInstance.current?.SendMessage(
        UNITY_GAME_OBJECT,
        'SetupDrawer',
        JSON.stringify({
          width,
          depth,
          gable,
          finishSlug,
          isPegboard,
          drawerTypeSlug,
          initialModules
        })
      );
    },
    [unityInstance]
  );

  // console.log(project, idMap, cartAmount);

  useEffect(() => {
    if (unityPlayerState === 'complete' && !didSetup) {
      let idMaps = {};
      const projectModules = project.projectModules?.map(
        ({ posX, posY, posZ, rotY, moduleId, module: { bundleUrl, partNumber }, children, id: originalId }) => {
          const id = nanoid();
          idMaps = { ...idMaps, [id]: originalId };
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
                idMaps = { ...idMaps, [childId]: originalId };
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

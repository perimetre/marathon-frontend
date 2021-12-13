/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useUnityPlayerContext } from '../UnityPlayerProvider';
import logging from '../../../lib/logging';
import { UNITY_GAME_OBJECT } from '../../../constraints';
import {
  GetProjectModuleQuery,
  GetProjectModuleQueryVariables,
  ModuleDataFragment,
  PlannerQuery,
  useCreateProjectModuleMutation,
  useDeleteProjectModuleMutation,
  useProjectCartQuery,
  useUpdateProjectModuleMutation
} from '../../../apollo/generated/graphql';
import { nanoid } from 'nanoid';
import { useApolloClient } from '@apollo/client';
import { GET_PROJECT_MODULE } from '../../../apollo/projectModules';

type PieceBuilderState = 'None' | 'Created' | 'Selected' | 'Editing' | 'Placed' | 'AddingSubModule' | 'Deleted';

export type UnityModuleJson = {
  id: number;
  partNumber: string;
  bundleUrl?: string;
  isSubmodule: boolean;
  isExtension: boolean;
  isMat: boolean;

  // Parsed rules json
  rules?: Record<string, unknown>;
};

export type UnityProjectModuleJson = {
  id?: number;
  nanoId: string;

  posX?: number;
  posY?: number;
  posZ?: number;
  rotY?: number;

  module: UnityModuleJson;

  defaultRightExtension?: UnityProjectModuleJson;
  defaultLeftExtension?: UnityProjectModuleJson;

  attachmentAppend?: UnityProjectModuleJson;
  moduleAttachments?: UnityProjectModuleJson[];

  parentId?: number; // The parent if this is a submodule
  parentNanoId?: string; // The parent if this is a submodule
};

export type UnityProjectModuleJsonChildren = {
  children: UnityProjectModuleJson[];
};

const makeModuleJson = (
  module: Pick<
    ModuleDataFragment,
    'id' | 'partNumber' | 'bundleUrl' | 'isSubmodule' | 'isExtension' | 'isMat' | 'rules'
  > & {
    rulesJson?: Record<string, unknown>;
  },
  rulesJson?: Record<string, unknown>
): UnityModuleJson => {
  const rules = rulesJson || module.rulesJson;

  if (!rules) console.warn(`CAUTION: Module ${module.partNumber} missing rules`);

  return {
    id: module.id,
    partNumber: module.partNumber,
    bundleUrl: module.bundleUrl || undefined,
    isSubmodule: module.isSubmodule,
    isExtension: module.isExtension,
    isMat: module.isMat,
    rules
  };
};

/*
 * React Context
 * */

type PlannerContextType = {
  hasProvider: boolean;
  // State variables
  state: PieceBuilderState;
  isPending: boolean;
  projectModule?: UnityProjectModuleJson;
  error?: string;
  cartAmount: number;
  didFinishSetup: boolean;
  // Methods
  // State Methods
  setIsPending: (isPending: boolean) => void;

  // Interaction Methods
  trayDone: () => void;
  trayDelete: () => void;
  trayEdit: () => void;
  trayRotateLeft: () => void;
  trayRotateRight: () => void;
  createModule: (module: ModuleDataFragment, rulesJson: Record<string, unknown>) => void;
  createChildrenModule: (module: ModuleDataFragment, rulesJson: Record<string, unknown>) => void;
  setupDrawer: (
    width: number,
    depth: number,
    gable: number,
    finishSlug: string,
    isPegboard: boolean,
    drawerTypeSlug: string,
    initialModules?: UnityProjectModuleJson[]
  ) => void;
};

const initialState: PlannerContextType = {
  hasProvider: false,
  state: 'None',
  isPending: false,
  cartAmount: 0,
  didFinishSetup: false,
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
  const { hasProvider, unityInstance } = useUnityPlayerContext();
  const { id: projectId } = project;

  if (!hasProvider) {
    throw 'Called PlannerProvider. But no PlannerProvider was found. Wrap your PlannerProvider with the UnityPlayerProvider component';
  }

  // ***********
  // ** Grapqhl declarations
  // ***********
  const { data: projectCart } = useProjectCartQuery({
    notifyOnNetworkStatusChange: true,
    variables: { slug: project.slug }
  });

  const cartAmount = useMemo(() => {
    return projectCart?.project?.cartAmount || project.cartAmount;
  }, [project, projectCart]);

  // ** Queries

  // ** Mutations
  const [doCreateProjectModule] = useCreateProjectModuleMutation({ refetchQueries: ['ProjectCart'] });
  const [doUpdateProjectModule] = useUpdateProjectModuleMutation({ refetchQueries: ['ProjectCart'] });
  const [doDeleteProjectModule] = useDeleteProjectModuleMutation({ refetchQueries: ['ProjectCart'] });
  const apolloClient = useApolloClient();

  // ***********
  // ** Business logic
  // ***********

  // ** States
  const [didFinishSetup, setFinishSetup] = useState(initialState.didFinishSetup);
  const [isPending, setIsPending] = useState(initialState.isPending);

  const [error, setError] = useState<string | undefined>(initialState.error);
  const [, setShouldCreateOrUpdate] = useState(false);

  const [state, setState] = useState(initialState.state);
  const [projectModule, setProjectModule] = useState<UnityProjectModuleJson | undefined>(initialState.projectModule);

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
    (module: ModuleDataFragment, rulesJson: Record<string, unknown>) => {
      setIsPending(true);

      const parentNanoId = nanoid();
      const moduleJson = {
        nanoId: parentNanoId,
        module: makeModuleJson(module, rulesJson),
        defaultLeftExtension: module.defaultLeftExtension
          ? {
              nanoId: nanoid(),
              parentNanoId,
              module: makeModuleJson(module.defaultLeftExtension)
            }
          : undefined,
        defaultRightExtension: module.defaultRightExtension
          ? {
              nanoId: nanoid(),
              parentNanoId,
              module: makeModuleJson(module.defaultRightExtension)
            }
          : undefined,
        attachmentAppend: module.attachmentToAppend
          ? {
              nanoId: nanoid(),
              parentNanoId,
              module: makeModuleJson(module.attachmentToAppend)
            }
          : undefined,
        moduleAttachments:
          module.moduleAttachments && module.moduleAttachments.length > 0
            ? module.moduleAttachments.map((attachment) => ({
                nanoId: nanoid(),
                parentNanoId,
                module: makeModuleJson(attachment.attachment)
              }))
            : undefined
      } as UnityProjectModuleJson;

      const json = JSON.stringify(moduleJson);

      console.log('createModule', json);

      unityInstance.current?.SendMessage(UNITY_GAME_OBJECT, 'CreateModule', json);
    },
    [unityInstance]
  );

  const createChildrenModule = useCallback(
    (module: ModuleDataFragment, rulesJson: Record<string, unknown>) => {
      setIsPending(true);

      const moduleJson = {
        nanoId: nanoid(),
        parentId: projectModule?.id,
        parentNanoId: projectModule?.nanoId,
        module: makeModuleJson(module, rulesJson)
      } as UnityProjectModuleJson;

      const json = JSON.stringify(moduleJson);

      console.log('createChildrenModule', json);

      unityInstance.current?.SendMessage(UNITY_GAME_OBJECT, 'CreateChildrenModule', json);
    },
    [unityInstance, projectModule]
  );

  const setupDrawer = useCallback(
    (
      width: number,
      depth: number,
      gable: number,
      finishSlug: string,
      isPegboard: boolean,
      drawerTypeSlug: string,
      initialModules?: UnityProjectModuleJson[],
      children?: UnityProjectModuleJson[]
    ) => {
      const json = JSON.stringify({
        width,
        depth,
        gable,
        finishSlug,
        isPegboard,
        drawerType: drawerTypeSlug,
        initialModules,
        children
      });

      console.log('setupDrawer', json);

      unityInstance.current?.SendMessage(UNITY_GAME_OBJECT, 'SetupDrawer', json);
    },
    [unityInstance]
  );

  // ***********
  // ** Unity <-> React logic
  // ***********+

  const handleUpsertProjectModule = useCallback(
    async (projectModuleToCreate: UnityProjectModuleJson, children: UnityProjectModuleJson[]) => {
      if (projectModuleToCreate.module.isExtension) return;

      try {
        setIsPending(true);
        const { data: existingProjectModules } = await apolloClient.query<
          GetProjectModuleQuery,
          GetProjectModuleQueryVariables
        >({
          query: GET_PROJECT_MODULE,
          variables: {
            nanoIds: [projectModuleToCreate.nanoId, ...children.map((x) => x.nanoId)]
          },
          fetchPolicy: 'network-only'
        });

        let parentId = projectModuleToCreate.parentId || -1;

        if ((!parentId || parentId < 0) && projectModuleToCreate?.parentNanoId) {
          const { data: parentData } = await apolloClient.query<GetProjectModuleQuery, GetProjectModuleQueryVariables>({
            query: GET_PROJECT_MODULE,
            variables: {
              nanoIds: [projectModuleToCreate.parentNanoId]
            }
          });

          parentId = parentData?.projectModules[0]?.id || -1;
        }

        const currentProjectModule = existingProjectModules?.projectModules.find(
          (x) => x.nanoId === projectModuleToCreate.nanoId
        );

        if (!currentProjectModule) {
          const { data } = await doCreateProjectModule({
            variables: {
              data: {
                nanoId: projectModuleToCreate.nanoId,
                posX: projectModuleToCreate.posX,
                posY: projectModuleToCreate.posY,
                posZ: projectModuleToCreate.posZ,
                rotY: projectModuleToCreate.rotY,
                parentNanoId: projectModuleToCreate.parentNanoId || undefined,
                project: { connect: { id: projectId } },
                module: { connect: { id: projectModuleToCreate.module.id } },
                parent: parentId !== undefined && parentId > 0 ? { connect: { id: parentId } } : undefined,
                children:
                  children && children.length > 0
                    ? {
                        createMany: {
                          data: children.map((childToCreate) => ({
                            nanoId: childToCreate.nanoId,
                            posX: childToCreate.posX,
                            posY: childToCreate.posY,
                            posZ: childToCreate.posZ,
                            rotY: childToCreate.rotY,
                            parentNanoId: childToCreate.parentNanoId || undefined,
                            projectId,
                            moduleId: childToCreate.module.id
                          }))
                        }
                      }
                    : undefined
              }
            }
          });

          if (!data) {
            logging.warn(`Created project module but it did not return any data`, { projectModuleToCreate });
          }
        } else {
          // All children where it doesn't exist
          const childrenToCreate = children.filter(
            (x) => !existingProjectModules?.projectModules.some((y) => y.nanoId === x.nanoId)
          );

          // All children where does exist
          const childrenToUpdate = children.filter((x) =>
            existingProjectModules?.projectModules.some((y) => y.nanoId === x.nanoId)
          );

          const { data } = await doUpdateProjectModule({
            variables: {
              id: currentProjectModule.id,
              data: {
                posX: { set: projectModuleToCreate.posX },
                posY: { set: projectModuleToCreate.posY },
                posZ: { set: projectModuleToCreate.posZ },
                rotY: { set: projectModuleToCreate.rotY },
                parentNanoId: projectModuleToCreate.parentNanoId
                  ? { set: projectModuleToCreate.parentNanoId }
                  : undefined,
                parent: parentId !== undefined && parentId > 0 ? { connect: { id: parentId } } : undefined,
                children:
                  (childrenToCreate && childrenToCreate.length > 0) || (childrenToUpdate && childrenToUpdate.length > 0)
                    ? {
                        createMany:
                          childrenToCreate && childrenToCreate.length > 0
                            ? {
                                data: children.map((childToCreate) => ({
                                  nanoId: childToCreate.nanoId,
                                  posX: childToCreate.posX,
                                  posY: childToCreate.posY,
                                  posZ: childToCreate.posZ,
                                  rotY: childToCreate.rotY,
                                  parentNanoId: childToCreate.parentNanoId || undefined,
                                  projectId,
                                  moduleId: childToCreate.module.id
                                }))
                              }
                            : undefined
                      }
                    : undefined
              }
            }
          });

          for (const childToUpdate of childrenToUpdate) {
            const existingProjectModule = existingProjectModules?.projectModules?.find(
              (x) => x.nanoId === childToUpdate.nanoId
            );
            if (existingProjectModule) {
              // Don't await, fire and forget
              doUpdateProjectModule({
                variables: {
                  id: existingProjectModule.id,
                  data: {
                    posX: { set: childToUpdate.posX },
                    posY: { set: childToUpdate.posY },
                    posZ: { set: childToUpdate.posZ },
                    rotY: { set: childToUpdate.rotY }
                  }
                }
              });
            }
          }

          if (!data) {
            logging.warn(`Updated project module but it did not return any data`, {
              projectModuleToCreate,
              existingProjectModule: existingProjectModules
            });
          }
        }
        setIsPending(false);
      } catch (err) {
        logging.error(err as Error, `Failed upserting project module`, { projectModuleToCreate, children, projectId });
        setIsPending(false);
      }
    },
    // DO NOT add more dependencies to this method. Receive them as arguments
    [apolloClient, doCreateProjectModule, doUpdateProjectModule, projectId]
  );

  const handleDeleteProjectModule = useCallback(
    async (projectModuleToDelete: UnityProjectModuleJson, children?: UnityProjectModuleJson[]) => {
      try {
        setIsPending(true);
        await doDeleteProjectModule({
          variables: {
            nanoIds: [projectModuleToDelete.nanoId, ...(children || []).map((child) => child.nanoId)]
          }
        });
        setIsPending(false);
      } catch (err) {
        logging.error(err as Error, `Failed deleting project module`, { projectModuleToDelete, children });
        setIsPending(false);
      }
    },
    [doDeleteProjectModule]
  );

  const handleUnityReady = useCallback(() => {
    let children: UnityProjectModuleJson[] = [];
    const projectModules = project.projectModules?.map((projectModule) => {
      const childrenProjects = projectModule.children?.map((childProjectModule) => {
        return {
          id: childProjectModule.id,
          nanoId: childProjectModule.nanoId,
          parentId: projectModule.id,
          parentNanoId: childProjectModule.parentNanoId,
          posX: childProjectModule.posX || 0,
          posY: childProjectModule.posY || 0,
          posZ: childProjectModule.posZ || 0,
          rotY: childProjectModule.rotY || 0,
          module: makeModuleJson(childProjectModule.module)
        } as UnityProjectModuleJson;
      });

      if (childrenProjects) {
        children = [...children, ...childrenProjects];
      }

      return {
        id: projectModule.id,
        nanoId: projectModule.nanoId,
        posX: projectModule.posX || 0,
        posY: projectModule.posY || 0,
        posZ: projectModule.posZ || 0,
        rotY: projectModule.rotY || 0,
        module: makeModuleJson(projectModule.module),
        attachmentAppend: projectModule.module.attachmentToAppend
          ? {
              nanoId: nanoid(),
              parentNanoId: projectModule.nanoId,
              module: makeModuleJson(projectModule.module.attachmentToAppend)
            }
          : undefined,
        moduleAttachments:
          projectModule.module.moduleAttachments && projectModule.module.moduleAttachments.length > 0
            ? projectModule.module.moduleAttachments.map((attachment) => ({
                nanoId: nanoid(),
                parentNanoId: projectModule.nanoId,
                module: makeModuleJson(attachment.attachment)
              }))
            : undefined
      } as UnityProjectModuleJson;
    });

    setTimeout(() => {
      setupDrawer(
        project.calculatedWidth || 0,
        project.slideDepth.depth,
        project.gable,
        project.finish.slug,
        project.hasPegs,
        project.type.slug,
        projectModules,
        children
      );
    }, 20);
  }, [project, setupDrawer]);

  useEffect(() => {
    let finishedSetup = false;
    /*
     * Unity -> React
     * */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).planner = {
      setupFinished: (error: string) => {
        setIsPending(false);
        setFinishSetup(true);
        finishedSetup = true;

        console.log('FINISHED SETUP');

        if (error) {
          setError(error);
          logging.error(new Error(error));
        }
      },
      createdModule: async (projectModuleJson: string, childrenJson?: string) => {
        if (!finishedSetup) return;
        const projectModule = JSON.parse(projectModuleJson) as UnityProjectModuleJson;
        const childrenModules = childrenJson ? (JSON.parse(childrenJson) as UnityProjectModuleJsonChildren) : undefined;

        console.log('createModule: ', projectModule, childrenModules);

        setIsPending(false);
        setProjectModule(projectModule);
        setState('Created');

        if (projectModule.module.isMat) {
          await handleUpsertProjectModule(projectModule, []);
        }
      },
      selectedModule: (projectModuleJson: string, childrenJson?: string) => {
        if (!finishedSetup) return;
        const projectModule = JSON.parse(projectModuleJson) as UnityProjectModuleJson;
        const childrenModules = childrenJson ? (JSON.parse(childrenJson) as UnityProjectModuleJsonChildren) : undefined;

        console.log('selectedModule: ', projectModule, childrenModules);

        setIsPending(false);
        setProjectModule((prevProjectModule) => {
          // Only calls upsertModule if the selected module has been moved
          if (
            prevProjectModule &&
            prevProjectModule.nanoId === projectModule.nanoId &&
            (prevProjectModule?.posX !== projectModule.posX ||
              prevProjectModule?.posY !== projectModule.posY ||
              prevProjectModule?.posZ !== projectModule.posZ ||
              prevProjectModule?.rotY !== projectModule.rotY)
          ) {
            setShouldCreateOrUpdate(true);
          }
          return projectModule;
        });
        setState('Selected');
      },
      editedModule: (projectModuleJson: string, childrenJson: string) => {
        if (!finishedSetup) return;
        const projectModule = JSON.parse(projectModuleJson) as UnityProjectModuleJson;
        const childrenModules = JSON.parse(childrenJson) as UnityProjectModuleJsonChildren;

        console.log('editedModule: ', projectModule, childrenModules);

        setProjectModule(projectModule);
        setState('Editing');
      },
      placedModule: async (projectModuleJson: string, childrenJson: string) => {
        if (!finishedSetup) return;
        const projectModule = JSON.parse(projectModuleJson) as UnityProjectModuleJson;
        const childrenModules = childrenJson ? (JSON.parse(childrenJson) as UnityProjectModuleJsonChildren) : undefined;

        console.log('placedModule: ', projectModule, childrenModules);
        setState('Placed');

        // Using this because putting the variable on the dependencies make the entire code not run.
        let updateOrCreate = false;
        setShouldCreateOrUpdate((should) => {
          updateOrCreate = should;
          return false;
        });

        if (!projectModule.module.isMat && updateOrCreate) {
          await handleUpsertProjectModule(projectModule, childrenModules?.children || []);
          setProjectModule(undefined);
        }
      },
      deletedModule: async (projectModuleJson: string, childrenJson?: string) => {
        if (!finishedSetup) return;
        const projectModule = JSON.parse(projectModuleJson) as UnityProjectModuleJson;
        const childrenModules = childrenJson ? (JSON.parse(childrenJson) as UnityProjectModuleJsonChildren) : undefined;

        console.log('deletedModule: ', projectModule, childrenModules);

        setProjectModule(undefined);
        setState('Deleted');
        await handleDeleteProjectModule(projectModule, childrenModules?.children);
      },
      recalculatedExtensions: async (projectModuleJson: string, childrenJson: string) => {
        if (!finishedSetup) return;
        const projectModule = JSON.parse(projectModuleJson) as UnityProjectModuleJson;
        const childrenModules = JSON.parse(childrenJson) as UnityProjectModuleJsonChildren;

        console.log('recalculatedExtensions: ', projectModule, childrenModules);

        await handleUpsertProjectModule(projectModule, childrenModules.children);
      },
      unityReady: () => {
        if (!finishedSetup) {
          handleUnityReady();
        }
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        setupDrawer,
        didFinishSetup
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

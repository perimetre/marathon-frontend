/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
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
import { useQueueCallback } from '../../../utils/queueCallback';
import env from '../../../env';

export type PieceBuilderState = 'None' | 'Created' | 'Selected' | 'Editing' | 'Placed' | 'AddingSubModule' | 'Deleted';

export type UnityModuleJson = {
  id: number;
  partNumber: string;
  bundleUrl?: string;
  isSubmodule: boolean;
  isExtension: boolean;
  isMat: boolean;
  isEdge: boolean;

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
    'id' | 'partNumber' | 'bundleUrl' | 'isSubmodule' | 'isExtension' | 'isMat' | 'rules' | 'isEdge'
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
    isEdge: module.isEdge,
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
  isPending: number;
  projectModule?: UnityProjectModuleJson;
  childrenModules?: UnityProjectModuleJsonChildren['children'];
  error?: string;
  cartAmount: number;
  didFinishSetup: boolean;
  // Methods
  // State Methods
  setIsPending: (isPending: boolean) => void;

  // Interaction Methods
  trayDone: () => void;
  trayDelete: () => void;
  trayDeleteEdge: () => void;
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
  isPending: 0,
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
  trayDeleteEdge: () => {
    throw new Error('trayDeleteEdge is not implemented');
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
  const [isPending, setIsPendingOriginal] = useState(initialState.isPending);
  const setIsPending = useCallback(
    (isPending) =>
      setIsPendingOriginal((currPending) => {
        const nextPending = isPending ? currPending + 1 : currPending - 1;
        if (nextPending <= 0) {
          return 0;
        } else {
          return nextPending;
        }
      }),
    []
  );

  const [error, setError] = useState<string | undefined>(initialState.error);
  const shouldCreateOrUpdate = useRef(false);

  const [state, setState] = useState(initialState.state);
  const [projectModule, setProjectModule] = useState<UnityProjectModuleJson | undefined>(initialState.projectModule);
  const [childrenModules, setChildrenModules] = useState<UnityProjectModuleJsonChildren['children'] | undefined>(
    initialState.childrenModules
  );

  /*
   * React -> Unity
   * */

  const trayDone = useCallback(() => {
    unityInstance.current?.SendMessage(UNITY_GAME_OBJECT, 'TrayDone');
  }, [unityInstance]);

  const trayDelete = useCallback(() => {
    unityInstance.current?.SendMessage(UNITY_GAME_OBJECT, 'TrayDelete');
  }, [unityInstance]);

  const trayDeleteEdge = useCallback(() => {
    unityInstance.current?.SendMessage(UNITY_GAME_OBJECT, 'TrayDeleteEdge');
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
      // setIsPending(true);

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
      // setIsPending(true);

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
      setIsPending(true);
      const {
        NEXT_PUBLIC_UNITY_PUBLIC_MEDIA_URI,
        NEXT_PUBLIC_UNITY_ASSET_BUNDLE_FOLDER,
        NEXT_PUBLIC_UNITY_DEFAULT_PLATFORM,
        NEXT_PUBLIC_UNITY_MODULE_MATERIALS_FOLDER,
        NEXT_PUBLIC_UNITY_MANIFEST_ASSET_NAME
      } = env();

      const json = JSON.stringify({
        width,
        depth,
        gable,
        finishSlug,
        isPegboard,
        drawerType: drawerTypeSlug,
        initialModules,
        children,
        env: {
          PUBLIC_MEDIA_URI: NEXT_PUBLIC_UNITY_PUBLIC_MEDIA_URI,
          ASSET_BUNDLE_FOLDER: NEXT_PUBLIC_UNITY_ASSET_BUNDLE_FOLDER,
          DEFAULT_PLATFORM: NEXT_PUBLIC_UNITY_DEFAULT_PLATFORM,
          MODULE_MATERIALS_FOLDER: NEXT_PUBLIC_UNITY_MODULE_MATERIALS_FOLDER,
          MANIFEST_ASSET_NAME: NEXT_PUBLIC_UNITY_MANIFEST_ASSET_NAME
        }
      });

      console.log('setupDrawer', json);

      unityInstance.current?.SendMessage(UNITY_GAME_OBJECT, 'SetupDrawer', json);
    },
    [unityInstance, setIsPending]
  );

  // ***********
  // ** Unity <-> React logic
  // ***********+

  const handleUpsertProjectModuleCallback = useCallback(
    async (projectModuleToCreate: UnityProjectModuleJson, children: UnityProjectModuleJson[]) => {
      if (projectModuleToCreate.module.isExtension) return;

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

      const currentProjectModule = existingProjectModules?.projectModules.find(
        (x) => x.nanoId === projectModuleToCreate.nanoId
      );

      if (!currentProjectModule) {
        try {
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
                parent: projectModuleToCreate?.parentNanoId
                  ? {
                      connect: { nanoId: projectModuleToCreate.parentNanoId }
                    }
                  : undefined,
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
        } catch (err) {
          logging.error(err as Error, `Failed CREATING project module`, {
            projectModuleToCreate,
            children,
            projectId
          });
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

        try {
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
                children:
                  (childrenToCreate && childrenToCreate.length > 0) || (childrenToUpdate && childrenToUpdate.length > 0)
                    ? {
                        createMany:
                          childrenToCreate && childrenToCreate.length > 0
                            ? {
                                data: childrenToCreate.map((childToCreate) => ({
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

          if (!data) {
            logging.warn(`Updated project module but it did not return any data`, { projectModuleToCreate });
          }
        } catch (err) {
          logging.error(err as Error, `Failed UPDATING project module`, {
            projectModuleToCreate,
            currentProjectModule,
            children,
            childrenToCreate,
            childrenToUpdate,
            projectId
          });
        }

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
      }
      setIsPending(false);
    },
    // DO NOT add more dependencies to this method. Receive them as arguments
    [apolloClient, doCreateProjectModule, doUpdateProjectModule, projectId, setIsPending]
  );
  const [handleUpsertProjectModule, queueSize] = useQueueCallback(handleUpsertProjectModuleCallback);

  const handleDeleteProjectModule = useCallback(
    async (projectModuleToDelete: UnityProjectModuleJson, children?: UnityProjectModuleJson[]) => {
      setIsPending(true);
      try {
        await doDeleteProjectModule({
          variables: {
            nanoIds: [projectModuleToDelete.nanoId, ...(children || []).map((child) => child.nanoId)]
          }
        });
      } catch (err) {
        logging.error(err as Error, `Failed deleting project module`, { projectModuleToDelete, children });
      }
      setIsPending(false);
    },
    [doDeleteProjectModule, setIsPending]
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

    const updateProjectModuleState = (
      projectModule: UnityProjectModuleJson,
      prevProjectModule?: UnityProjectModuleJson,
      childrenModules?: UnityProjectModuleJsonChildren
    ) => {
      const hasModuleMoved =
        prevProjectModule?.posX !== projectModule.posX ||
        prevProjectModule?.posY !== projectModule.posY ||
        prevProjectModule?.posZ !== projectModule.posZ ||
        prevProjectModule?.rotY !== projectModule.rotY;

      const isSameModule = prevProjectModule?.nanoId === projectModule.nanoId;

      // Only calls upsertModule if the selected module has been moved
      if (!isSameModule || (isSameModule && hasModuleMoved) || childrenModules?.children.some((x) => x.module.isEdge)) {
        shouldCreateOrUpdate.current = true;
      }

      return projectModule;
    };

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

        // setIsPending(false);
        setProjectModule((prevProjectModule) => updateProjectModuleState(projectModule, prevProjectModule));
        setChildrenModules(childrenModules?.children);
        setState('Created');

        if (projectModule.module.isMat) {
          // Purposefully do not await as we don't need it as dependency of anything
          handleUpsertProjectModule(projectModule, []);
        }
      },
      selectedModule: (projectModuleJson: string, childrenJson?: string) => {
        if (!finishedSetup) return;
        const projectModule = JSON.parse(projectModuleJson) as UnityProjectModuleJson;
        const childrenModules = childrenJson ? (JSON.parse(childrenJson) as UnityProjectModuleJsonChildren) : undefined;

        console.log('selectedModule: ', projectModule, childrenModules);

        // setIsPending(false);
        setProjectModule((prevProjectModule) => updateProjectModuleState(projectModule, prevProjectModule));
        setChildrenModules(childrenModules?.children);
        setState('Selected');
      },
      editedModule: (projectModuleJson: string, childrenJson: string) => {
        if (!finishedSetup) return;
        const projectModule = JSON.parse(projectModuleJson) as UnityProjectModuleJson;
        const childrenModules = JSON.parse(childrenJson) as UnityProjectModuleJsonChildren;

        console.log('editedModule: ', projectModule, childrenModules);

        setProjectModule((prevProjectModule) => updateProjectModuleState(projectModule, prevProjectModule));
        setChildrenModules(childrenModules?.children);
        setState('Editing');
      },
      placedModule: async (projectModuleJson: string, childrenJson: string) => {
        if (!finishedSetup) return;
        const projectModule = JSON.parse(projectModuleJson) as UnityProjectModuleJson;
        const childrenModules = childrenJson ? (JSON.parse(childrenJson) as UnityProjectModuleJsonChildren) : undefined;

        console.log('placedModule: ', projectModule, childrenModules);
        setState('Placed');

        // Using this because putting the variable on the dependencies make the entire code not run.
        if (!projectModule.module.isMat && shouldCreateOrUpdate.current) {
          // Purposefully do not await as we don't need it as dependency of anything
          handleUpsertProjectModule(projectModule, childrenModules?.children || []);
          setProjectModule(undefined);
          setChildrenModules(undefined);
          shouldCreateOrUpdate.current = false;
        }
      },
      deletedModule: async (projectModuleJson: string, childrenJson?: string) => {
        if (!finishedSetup) return;
        const projectModule = JSON.parse(projectModuleJson) as UnityProjectModuleJson;
        const childrenModules = childrenJson ? (JSON.parse(childrenJson) as UnityProjectModuleJsonChildren) : undefined;

        console.log('deletedModule: ', projectModule, childrenModules);

        setProjectModule((currProjectModule) => {
          // Only deselect if current project module is the same that it's deleting
          if (projectModule.id === currProjectModule?.id) {
            setState('Deleted');
            return undefined;
          } else {
            return currProjectModule;
          }
        });
        setChildrenModules((currChildrenModules) =>
          currChildrenModules?.filter(
            (x) => x.id !== projectModule.id || (childrenModules?.children || []).some((y) => y.id === x.id)
          )
        );

        // Purposefully do not await as we don't need it as dependency of anything
        handleDeleteProjectModule(projectModule, childrenModules?.children);
      },
      recalculatedExtensions: async (projectModuleJson: string, childrenJson: string) => {
        if (!finishedSetup) return;
        const projectModule = JSON.parse(projectModuleJson) as UnityProjectModuleJson;
        const childrenModules = JSON.parse(childrenJson) as UnityProjectModuleJsonChildren;

        console.log('recalculatedExtensions: ', projectModule, childrenModules);

        // Purposefully do not await as we don't need it as dependency of anything
        handleUpsertProjectModule(projectModule, childrenModules.children);
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
        isPending: isPending + queueSize,
        setIsPending,
        projectModule,
        error,
        cartAmount,
        trayDone,
        trayDelete,
        trayDeleteEdge,
        trayEdit,
        trayRotateLeft,
        trayRotateRight,
        createModule,
        createChildrenModule,
        setupDrawer,
        didFinishSetup,
        childrenModules
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

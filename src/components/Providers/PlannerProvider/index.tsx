/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useUnityPlayerContext } from '../UnityPlayerProvider';
import logging from '../../../lib/logging';
import { UNITY_GAME_OBJECT } from '../../../constraints';

type PieceBuilderState = 'None' | 'Selected' | 'Editing' | 'Placed' | 'AddingSubModule';

export type ProjectModule = {
  id: number;
  partNumber: string;
  bundleUrl?: string;

  posX: number;
  posY: number;
  rotZ: number;

  parentId: number; // The parent if this is a submodule
  children: ProjectModule[]; // The list of submodules if this is a parent
};

/*
 * React Context
 * */

type PlannerContextType = {
  hasProvider: boolean;
  state: PieceBuilderState;
  isPending: boolean;
  setIsPending: (isPending: boolean) => void;
  error?: string;
  trayDone: () => void;
  trayDelete: () => void;
  trayEdit: () => void;
  trayRotateLeft: () => void;
  trayRotateRight: () => void;
  placeModule: (partNumber: string, projectModuleId: number) => void;
  placeChildrenModule: (partNumber: string, projectModuleId: number) => void;
  setupDrawer: (
    width: number,
    depth: number,
    gable: number,
    finishSlug: string,
    initialModules?: ProjectModule[]
  ) => void;
};

const initialState: PlannerContextType = {
  hasProvider: false,
  state: 'None',
  isPending: false,
  setIsPending: () => {},
  trayDone: () => {},
  trayDelete: () => {},
  trayEdit: () => {},
  trayRotateLeft: () => {},
  trayRotateRight: () => {},
  placeModule: () => {},
  placeChildrenModule: () => {},
  setupDrawer: () => {}
};

/*
 * Component
 * */

const PlannerContext = React.createContext<PlannerContextType>(initialState);

export const PlannerProvider: React.FC = ({ children }) => {
  // ***********
  // ** Misc
  // ***********
  const { hasProvider, unityInstance } = useUnityPlayerContext();

  if (!hasProvider) {
    throw 'Called PlannerProvider. But no PlannerProvider was found. Wrap your PlannerProvider with the UnityPlayerProvider component';
  }

  // ***********
  // ** Business logic
  // ***********

  const [state, setState] = useState(initialState.state);
  const [isPending, setIsPending] = useState(initialState.isPending);

  const [error, setError] = useState<string | undefined>(initialState.error);
  // TODO: Check if error change on effect, and display tooltip for X seconds, then clear error when the tooltip closes

  // ***********
  // ** Unity <-> React logic
  // ***********

  useEffect(() => {
    /*
     * Unity -> React
     * */
    const planner = {
      moduleStateChange: (state: PieceBuilderState, projectModule: ProjectModule) => {
        setState(state);

        // TODO: Update api accordingly
        console.log(state, projectModule);
      },
      setupFinished: (error?: string) => {
        setIsPending(false);

        if (error) {
          setError(error);
          logging.error(new Error(error));
        }
      },
      placeFinished: (error?: string) => {
        setIsPending(false);

        if (error) {
          setError(error);
          logging.error(new Error(error));
        }
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

  const placeModule = useCallback(
    (partNumber: string, projectModuleId: number) =>
      unityInstance.current?.SendMessage(UNITY_GAME_OBJECT, 'PlaceModule', partNumber, projectModuleId),
    [unityInstance]
  );

  const placeChildrenModule = useCallback(
    (partNumber: string, projectModuleId: number) =>
      unityInstance.current?.SendMessage(UNITY_GAME_OBJECT, 'PlaceChildrenModule', partNumber, projectModuleId),
    [unityInstance]
  );

  const setupDrawer = useCallback(
    (width: number, depth: number, gable: number, finishSlug: string, initialModules?: ProjectModule[]) =>
      unityInstance.current?.SendMessage(
        UNITY_GAME_OBJECT,
        'SetupDrawer',
        width,
        depth,
        gable,
        finishSlug,
        JSON.stringify(initialModules)
      ),
    [unityInstance]
  );

  return (
    <PlannerContext.Provider
      value={{
        hasProvider: true,
        state,
        isPending,
        setIsPending,
        error,
        trayDone,
        trayDelete,
        trayEdit,
        trayRotateLeft,
        trayRotateRight,
        placeModule,
        placeChildrenModule,
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

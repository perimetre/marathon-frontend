/* eslint-disable @typescript-eslint/no-empty-function */
import React, { forwardRef, useContext, useImperativeHandle, useRef, useState } from 'react';
import { ProjectModule, usePlannerContext } from '../PlannerProvider';
import { UNITY_GAME_OBJECT } from '../../../constraints';

export type UnityPlayerState = 'initializing' | 'loading' | 'complete' | 'error';

/*
 * React Context
 * */

type UnityPlayerContextType = {
  state: UnityPlayerState;
  setState: (state: UnityPlayerState) => void;
  loadingProgress: number;
  setLoadingProgress: (loadingProgress: number) => void;
  errorMessage?: string;
  setErrorMessage: (errorMessage: string) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  unityInstance?: any;
  hasProvider: boolean;
};

const initialState: UnityPlayerContextType = {
  state: 'initializing',
  setState: () => {},
  loadingProgress: 0,
  setLoadingProgress: () => {},
  setErrorMessage: () => {},
  hasProvider: false
};

const UnityPlayerContext = React.createContext<UnityPlayerContextType>(initialState);

/*
 * Component
 * */

export type UnityPlayerProviderRef = {
  trayDone: () => void;
  setupDrawer: (
    width: number,
    depth: number,
    gable: number,
    finishSlug: string,
    initialModules?: ProjectModule[]
  ) => void;
};

export type UnityPlayerProviderProps = Record<string, unknown>;

export const UnityPlayerProvider = forwardRef<UnityPlayerProviderRef, UnityPlayerProviderProps>(
  function UnityPlayerProvider({ children }, ref) {
    const { hasProvider } = usePlannerContext();

    if (!hasProvider) {
      throw 'Called UnityPlayerProvider. But no PlannerProvider was found. Wrap your UnityPlayerProvider with the PlannerProvider component';
    }

    const [state, setState] = useState<UnityPlayerContextType['state']>(initialState.state);
    const [loadingProgress, setLoadingProgress] = useState(initialState.loadingProgress);
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const unityInstance = useRef<any>();

    /*
     * External ref
     * */
    useImperativeHandle(
      ref,
      () => ({
        trayDone: () => unityInstance.current?.SendMessage(UNITY_GAME_OBJECT, 'TrayDone'),
        setupDrawer: (width, depth, gable, finishSlug, initialModules) =>
          unityInstance.current?.SendMessage(
            UNITY_GAME_OBJECT,
            'SetupDrawer',
            width,
            depth,
            gable,
            finishSlug,
            JSON.stringify(initialModules)
          )
      }),
      []
    );

    return (
      <UnityPlayerContext.Provider
        value={{
          hasProvider: true,
          state,
          setState,
          loadingProgress,
          setLoadingProgress,
          errorMessage,
          setErrorMessage,
          unityInstance
        }}
      >
        {children}
      </UnityPlayerContext.Provider>
    );
  }
);

/*
 * Hooks
 * */

export const useUnityPlayerContext = () => useContext(UnityPlayerContext);

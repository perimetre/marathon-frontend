/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext, useRef, useState } from 'react';
import { PlannerProvider, PlannerProviderProps } from '../PlannerProvider';

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

export type UnityPlayerProviderProps = Record<string, unknown> & PlannerProviderProps;

export const UnityPlayerProvider: React.FC<UnityPlayerProviderProps> = ({ children, ...plannerProviderProps }) => {
  const [state, setState] = useState<UnityPlayerContextType['state']>(initialState.state);
  const [loadingProgress, setLoadingProgress] = useState(initialState.loadingProgress);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(initialState.errorMessage);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const unityInstance = useRef<any>();

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
      <PlannerProvider {...plannerProviderProps}>{children}</PlannerProvider>
    </UnityPlayerContext.Provider>
  );
};

/*
 * Hooks
 * */

export const useUnityPlayerContext = () => useContext(UnityPlayerContext);

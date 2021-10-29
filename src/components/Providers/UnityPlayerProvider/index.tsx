import React, { useContext, useRef, useState } from 'react';

export type UnityPlayerState = 'initializing' | 'loading' | 'complete' | 'error';

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
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setState: () => {},
  loadingProgress: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLoadingProgress: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setErrorMessage: () => {},
  hasProvider: false
};

const UnityPlayerContext = React.createContext<UnityPlayerContextType>(initialState);

export const UnityPlayerProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<UnityPlayerContextType['state']>(initialState.state);
  const [loadingProgress, setLoadingProgress] = useState(initialState.loadingProgress);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const unityInstance = useRef<any>();

  return (
    <div id="unity-player-provider">
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
    </div>
  );
};

export const useUnityPlayerContext = () => useContext(UnityPlayerContext);

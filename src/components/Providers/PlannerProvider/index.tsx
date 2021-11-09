/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { UnityPlayerProvider, UnityPlayerProviderRef } from '../UnityPlayerProvider';

type ModuleState = 'placed' | 'selected';

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
  trayDone: () => void;
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
  trayDone: () => {},
  setupDrawer: () => {}
};

/*
 * Component
 * */

const PlannerContext = React.createContext<PlannerContextType>(initialState);

export const PlannerProvider: React.FC = ({ children }) => {
  const unityProvider = useRef<UnityPlayerProviderRef | null>(null);

  /*
   * Planner logic
   * */

  useEffect(() => {
    /*
     * Unity -> React
     * */
    const planner = {
      moduleStateChange: (state: ModuleState, projectModule: ProjectModule) => {
        console.log(state, projectModule);
      },
      setupFinished: (error?: string) => {
        console.log(error);
      },
      placeFinished: (error?: string) => {
        console.log(error);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).planner = planner;
  }, []);

  /*
   * React -> Unity
   * */

  const setupDrawer = useCallback(
    (width: number, depth: number, gable: number, finishSlug: string, initialModules?: ProjectModule[]) => {
      unityProvider.current?.setupDrawer(width, depth, gable, finishSlug, initialModules);
    },
    []
  );

  const trayDone = useCallback(() => {
    unityProvider.current?.trayDone();
  }, []);

  return (
    <PlannerContext.Provider
      value={{
        hasProvider: true,
        trayDone,
        setupDrawer
      }}
    >
      <UnityPlayerProvider ref={unityProvider}>{children}</UnityPlayerProvider>
    </PlannerContext.Provider>
  );
};

/*
 * Hooks
 * */

export const usePlannerContext = () => useContext(PlannerContext);

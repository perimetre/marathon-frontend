import { useRouter } from 'next/router';
import React, { useCallback, useContext, useState } from 'react';
import { Unit } from '../../../types/unit';

type AppContextType = {
  hasProvider: boolean;
  unit: Unit;
  setUnit: (unit: Unit) => void;
  restart: () => void;

  drawerType?: string;
  setDrawerType: (type: string) => void;

  drawerDescription?: string;
  setDrawerDescription: (description: string) => void;

  drawerCollection?: string;
  setDrawerCollection: (collection: string) => void;

  drawerFinish?: string;
  setDrawerFinish: (finish: string) => void;

  drawerSlide: { supplier?: string; model?: string; depth?: string } | null;
  setDrawerSlide: (slide: { supplier?: string; model?: string; depth?: string }) => void;

  drawerSize: { weight?: string; thickness?: string } | null;
  setDrawerSize: (size: { weight?: string; thickness?: string }) => void;
};

const initialState: AppContextType = {
  hasProvider: false,
  unit: 'mm',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUnit: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  restart: () => {},

  drawerType: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDrawerType: () => {},

  drawerDescription: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDrawerDescription: () => {},

  drawerCollection: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDrawerCollection: () => {},

  drawerFinish: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDrawerFinish: () => {},

  drawerSlide: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDrawerSlide: () => {},

  drawerSize: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDrawerSize: () => {}
};

const AppContext = React.createContext<AppContextType>(initialState);

/**
 * The OrganizationSlug provider for its react context
 */
export const AppProvider: React.FC = ({ children }) => {
  const [unit, setUnit] = useState<AppContextType['unit']>('mm');
  const [drawerType, setDrawerType] = useState<AppContextType['drawerType']>(undefined);
  const [drawerDescription, setDrawerDescription] = useState<AppContextType['drawerDescription']>(undefined);
  const [drawerCollection, setDrawerCollection] = useState<AppContextType['drawerCollection']>(undefined);
  const [drawerFinish, setDrawerFinish] = useState<AppContextType['drawerFinish']>(undefined);
  const [drawerSlide, setDrawerSlide] = useState<AppContextType['drawerSlide']>(null);
  const [drawerSize, setDrawerSize] = useState<AppContextType['drawerSize']>(null);

  const route = useRouter();

  const restart = useCallback(() => {
    setUnit('mm');
    setDrawerType(undefined);
    setDrawerCollection(undefined);
    setDrawerFinish(undefined);
    setDrawerSlide(null);
    setDrawerSize(null);

    route.push('/', '/');
  }, [route]);

  return (
    <AppContext.Provider
      value={{
        hasProvider: true,
        unit,
        setUnit,
        drawerType,
        setDrawerType,
        drawerDescription,
        setDrawerDescription,
        drawerCollection,
        setDrawerCollection,
        drawerFinish,
        setDrawerFinish,
        drawerSlide,
        setDrawerSlide,
        drawerSize,
        setDrawerSize,
        restart
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

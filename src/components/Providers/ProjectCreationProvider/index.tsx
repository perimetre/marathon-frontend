import { GetServerSidePropsContext, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React, { useCallback, useContext, useState } from 'react';
import { Unit } from '../../../types/unit';

type ProjectCreationType = {
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

const initialState: ProjectCreationType = {
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

const ProjectCreationContext = React.createContext<ProjectCreationType>(initialState);

export type ProjectCreationProviderProps = {
  unit?: ProjectCreationType['unit'];
  drawerType?: ProjectCreationType['drawerType'];
  drawerDescription?: ProjectCreationType['drawerDescription'];
  drawerCollection?: ProjectCreationType['drawerCollection'];
  drawerFinish?: ProjectCreationType['drawerFinish'];
  drawerSlide?: ProjectCreationType['drawerSlide'];
  drawerSize?: ProjectCreationType['drawerSize'];
};

export const ProjectCreationProvider: React.FC<ProjectCreationProviderProps> = ({
  children,
  unit: initUnit,
  drawerType: type,
  drawerDescription: description,
  drawerCollection: collection,
  drawerFinish: finish,
  drawerSlide: slide,
  drawerSize: size
}) => {
  const [unit, setUnit] = useState<ProjectCreationType['unit']>(initUnit || 'mm');
  const [drawerType, setDrawerType] = useState<ProjectCreationType['drawerType']>(type);
  const [drawerDescription, setDrawerDescription] = useState<ProjectCreationType['drawerDescription']>(description);
  const [drawerCollection, setDrawerCollection] = useState<ProjectCreationType['drawerCollection']>(collection);
  const [drawerFinish, setDrawerFinish] = useState<ProjectCreationType['drawerFinish']>(finish);
  const [drawerSlide, setDrawerSlide] = useState<ProjectCreationType['drawerSlide']>(slide || null);
  const [drawerSize, setDrawerSize] = useState<ProjectCreationType['drawerSize']>(size || null);

  const route = useRouter();

  const restart = useCallback(() => {
    setUnit('mm');
    setDrawerType(undefined);
    setDrawerDescription(undefined);
    setDrawerCollection(undefined);
    setDrawerFinish(undefined);
    setDrawerSlide(null);
    setDrawerSize(null);

    route.push('/', '/');
  }, [route]);

  return (
    <div id="project-provider">
      <ProjectCreationContext.Provider
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
      </ProjectCreationContext.Provider>
    </div>
  );
};

export const useProjectCreationProvider = () => useContext(ProjectCreationContext);

export const requiredData = <T extends ParsedUrlQuery>(ctx: NextPageContext | GetServerSidePropsContext<T>) => {
  console.log(ctx);
  return {};
};

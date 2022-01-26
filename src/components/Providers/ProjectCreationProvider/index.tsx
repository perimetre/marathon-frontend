import { GetServerSidePropsContext, NextPageContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React, { useCallback, useContext, useState } from 'react';
import {
  PROJECT_DRAWER_COLLECTION,
  PROJECT_DRAWER_FINISH,
  PROJECT_DRAWER_PEGS,
  PROJECT_DRAWER_SIZE,
  PROJECT_DRAWER_SLIDE,
  PROJECT_DRAWER_TITLE,
  PROJECT_DRAWER_TYPE,
  PROJECT_UNIT
} from '../../../constraints';
import { getCookie, setCookieOrRemoveIfUndefined } from '../../../lib/cookie';
import { Unit } from '../../../types/unit';
import { stripUndefined } from '../../../utils/object';

type ProjectCreationType = {
  hasProvider: boolean;
  unit?: Unit;
  setUnit: (unit?: Unit) => void;
  clear: () => void;

  drawerType?: number;
  setDrawerType: (type: number) => void;

  drawerTitle?: string;
  setDrawerTitle: (description: string) => void;

  drawerCollection?: number;
  setDrawerCollection: (collection: number) => void;

  drawerPegs?: boolean;
  setDrawerPegs: (hasPegs?: boolean) => void;

  drawerFinish?: number;
  setDrawerFinish: (finish: number) => void;

  drawerSlide?: { supplier?: number; slide?: string; depth?: string } | null;
  setDrawerSlide: (slide?: { supplier?: number; slide?: string; depth?: string }) => void;

  drawerSize?: { cabinetWidth?: string; gable?: string } | null;
  setDrawerSize: (size?: { cabinetWidth?: string; gable?: string }) => void;
};

const initialState: ProjectCreationType = {
  hasProvider: false,
  unit: 'mm',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUnit: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  clear: () => {},

  drawerType: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDrawerType: () => {},

  drawerTitle: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDrawerTitle: () => {},

  drawerCollection: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDrawerCollection: () => {},

  drawerPegs: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDrawerPegs: () => {},

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
  drawerTitle?: ProjectCreationType['drawerTitle'];
  drawerCollection?: ProjectCreationType['drawerCollection'];
  drawerPegs?: ProjectCreationType['drawerPegs'];
  drawerFinish?: ProjectCreationType['drawerFinish'];
  drawerSlide?: ProjectCreationType['drawerSlide'];
  drawerSize?: ProjectCreationType['drawerSize'];
};

const useCookieHook = <T,>(
  name: string,
  initialState: T | undefined,
  serialize: (value?: T) => string | undefined
): [T | undefined, (nextState?: T) => void] => {
  const [value, setValueOriginal] = useState<T | undefined>(initialState);

  const setValueFinal = useCallback((nextState?: T) => {
    setCookieOrRemoveIfUndefined(name, serialize(nextState));
    setValueOriginal(nextState);
    // Disable because we don't want to reconsider the serialize value
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [value, setValueFinal];
};

export const ProjectCreationProvider: React.FC<ProjectCreationProviderProps> = ({
  children,
  unit: initUnit,
  drawerType: type,
  drawerTitle: description,
  drawerCollection: collection,
  drawerPegs: pegs,
  drawerFinish: finish,
  drawerSlide: slide,
  drawerSize: size
}) => {
  const [unit, setUnit] = useCookieHook<ProjectCreationType['unit']>(PROJECT_UNIT, initUnit || 'in', (unit) => unit);
  const [drawerType, setDrawerType] = useCookieHook<ProjectCreationType['drawerType']>(
    PROJECT_DRAWER_TYPE,
    type,
    (drawerType) => drawerType?.toString()
  );
  const [drawerTitle, setDrawerTitle] = useCookieHook<ProjectCreationType['drawerTitle']>(
    PROJECT_DRAWER_TITLE,
    description,
    (drawerTitle) => drawerTitle
  );
  const [drawerCollection, setDrawerCollection] = useCookieHook<ProjectCreationType['drawerCollection']>(
    PROJECT_DRAWER_COLLECTION,
    collection,
    (drawerCollection) => drawerCollection?.toString()
  );
  const [drawerPegs, setDrawerPegs] = useCookieHook<ProjectCreationType['drawerPegs']>(
    PROJECT_DRAWER_PEGS,
    pegs,
    (drawerPegs) => (drawerPegs ? 'true' : undefined)
  );
  const [drawerFinish, setDrawerFinish] = useCookieHook<ProjectCreationType['drawerFinish']>(
    PROJECT_DRAWER_FINISH,
    finish,
    (drawerFinish) => drawerFinish?.toString()
  );
  const [drawerSlide, setDrawerSlide] = useCookieHook<ProjectCreationType['drawerSlide']>(
    PROJECT_DRAWER_SLIDE,
    slide || undefined,
    (drawerSlide) => JSON.stringify(drawerSlide)
  );
  const [drawerSize, setDrawerSize] = useCookieHook<ProjectCreationType['drawerSize']>(
    PROJECT_DRAWER_SIZE,
    size || undefined,
    (drawerSize) => JSON.stringify(drawerSize)
  );

  const clear = useCallback(() => {
    setDrawerType(undefined);
    setDrawerTitle(undefined);
    setDrawerCollection(undefined);
    setDrawerPegs(undefined);
    setDrawerFinish(undefined);
    setDrawerSlide(undefined);
    setDrawerSize(undefined);
  }, [
    setDrawerCollection,
    setDrawerFinish,
    setDrawerPegs,
    setDrawerSize,
    setDrawerSlide,
    setDrawerTitle,
    setDrawerType
  ]);

  return (
    <div id="project-provider">
      <ProjectCreationContext.Provider
        value={{
          hasProvider: true,
          unit,
          setUnit,
          drawerType,
          setDrawerType,
          drawerTitle,
          setDrawerTitle,
          drawerCollection,
          setDrawerCollection,
          drawerPegs,
          setDrawerPegs,
          drawerFinish,
          setDrawerFinish,
          drawerSlide,
          setDrawerSlide,
          drawerSize,
          setDrawerSize,
          clear
        }}
      >
        {children}
      </ProjectCreationContext.Provider>
    </div>
  );
};

export const useProjectCreationContext = () => useContext(ProjectCreationContext);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const projectCreationDataHoc = (Page: any) => {
  // Create a simple functional component
  const WithProjectCreation = (props: ProjectCreationProviderProps) => {
    // Pass down provided props returned from `requiredProjectData`
    return (
      <ProjectCreationProvider {...props}>
        <Page {...props} />
      </ProjectCreationProvider>
    );
  };

  // Set the name of this component to the name of the HOC
  WithProjectCreation.displayName = `WithProjectCreation(${Page.displayName || Page.name || 'Unknown'})`;

  return WithProjectCreation;
};

export const requiredProjectData = <T extends ParsedUrlQuery>(ctx: NextPageContext | GetServerSidePropsContext<T>) => {
  const unit = getCookie(PROJECT_UNIT, ctx) as ProjectCreationType['unit'];
  const drawerType = getCookie(PROJECT_DRAWER_TYPE, ctx) as ProjectCreationType['drawerType'];
  const drawerTitle = getCookie(PROJECT_DRAWER_TITLE, ctx) as ProjectCreationType['drawerTitle'];
  const drawerCollection = getCookie(PROJECT_DRAWER_COLLECTION, ctx) as ProjectCreationType['drawerCollection'];
  const drawerPegs = getCookie(PROJECT_DRAWER_PEGS, ctx);
  const drawerFinish = getCookie(PROJECT_DRAWER_FINISH, ctx) as ProjectCreationType['drawerFinish'];
  const slide = getCookie(PROJECT_DRAWER_SLIDE, ctx);
  const size = getCookie(PROJECT_DRAWER_SIZE, ctx);

  const drawerSlide = typeof slide === 'string' ? (JSON.parse(slide) as ProjectCreationType['drawerSlide']) : slide;
  const drawerSize = typeof size === 'string' ? (JSON.parse(size) as ProjectCreationType['drawerSize']) : size;

  return stripUndefined({
    unit,
    drawerType: Number(drawerType),
    drawerTitle,
    drawerCollection: Number(drawerCollection),
    drawerPegs: drawerPegs === 'true',
    drawerFinish: Number(drawerFinish),
    drawerSlide,
    drawerSize
  });
};

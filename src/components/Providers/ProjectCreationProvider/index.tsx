import { GetServerSidePropsContext, NextPageContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
  PROJECT_DRAWER_COLLECTION,
  PROJECT_DRAWER_TITLE,
  PROJECT_DRAWER_FINISH,
  PROJECT_DRAWER_SIZE,
  PROJECT_DRAWER_SLIDE,
  PROJECT_DRAWER_TYPE,
  PROJECT_UNIT,
  PROJECT_DRAWER_PEGS
} from '../../../constraints';
import { getCookie, setCookieOrRemoveIfUndefined } from '../../../lib/cookie';
import { Unit } from '../../../types/unit';

type ProjectCreationType = {
  hasProvider: boolean;
  unit: Unit;
  setUnit: (unit: Unit) => void;
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

  drawerSlide: { slide?: number; model?: string; depth?: string } | null;
  setDrawerSlide: (slide: { slide?: number; model?: string; depth?: string }) => void;

  drawerSize: { width?: string; gable?: string } | null;
  setDrawerSize: (size: { width?: string; gable?: string }) => void;
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
  const [unit, setUnit] = useState<ProjectCreationType['unit']>(initUnit || 'in');
  const [drawerType, setDrawerType] = useState<ProjectCreationType['drawerType']>(type);
  const [drawerTitle, setDrawerTitle] = useState<ProjectCreationType['drawerTitle']>(description);
  const [drawerCollection, setDrawerCollection] = useState<ProjectCreationType['drawerCollection']>(collection);
  const [drawerPegs, setDrawerPegs] = useState<ProjectCreationType['drawerPegs']>(pegs);
  const [drawerFinish, setDrawerFinish] = useState<ProjectCreationType['drawerFinish']>(finish);
  const [drawerSlide, setDrawerSlide] = useState<ProjectCreationType['drawerSlide']>(slide || null);
  const [drawerSize, setDrawerSize] = useState<ProjectCreationType['drawerSize']>(size || null);

  const clear = useCallback(() => {
    setUnit('in');
    setDrawerType(undefined);
    setDrawerTitle(undefined);
    setDrawerCollection(undefined);
    setDrawerPegs(undefined);
    setDrawerFinish(undefined);
    setDrawerSlide(null);
    setDrawerSize(null);
  }, []);

  useEffect(() => {
    setCookieOrRemoveIfUndefined(PROJECT_UNIT, unit);
    setCookieOrRemoveIfUndefined(PROJECT_DRAWER_TYPE, drawerType?.toString());
    setCookieOrRemoveIfUndefined(PROJECT_DRAWER_TITLE, drawerTitle);
    setCookieOrRemoveIfUndefined(PROJECT_DRAWER_COLLECTION, drawerCollection?.toString());
    setCookieOrRemoveIfUndefined(PROJECT_DRAWER_PEGS, drawerPegs ? 'true' : undefined);
    setCookieOrRemoveIfUndefined(PROJECT_DRAWER_FINISH, drawerFinish?.toString());
    setCookieOrRemoveIfUndefined(PROJECT_DRAWER_SLIDE, JSON.stringify(drawerSlide));
    setCookieOrRemoveIfUndefined(PROJECT_DRAWER_SIZE, JSON.stringify(drawerSize));
  }, [unit, drawerType, drawerTitle, drawerPegs, drawerCollection, drawerFinish, drawerSlide, drawerSize]);

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const stripUndefined = <T extends Record<string, any>>(obj: T) => JSON.parse(JSON.stringify(obj)) as T;

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

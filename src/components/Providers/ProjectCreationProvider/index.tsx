import { GetServerSidePropsContext, NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
  PROJECT_DRAWER_COLLECTION,
  PROJECT_DRAWER_DESCRIPTION,
  PROJECT_DRAWER_FINISH,
  PROJECT_DRAWER_SIZE,
  PROJECT_DRAWER_SLIDE,
  PROJECT_DRAWER_TYPE,
  PROJECT_UNIT
} from '../../../constraints';
import { getCookie, setCookieOrRemoveIfUndefined } from '../../../lib/cookie';
import { Unit } from '../../../types/unit';

type ProjectCreationType = {
  hasProvider: boolean;
  unit: Unit;
  setUnit: (unit: Unit) => void;
  restart: () => void;

  drawerType?: number;
  setDrawerType: (type: number) => void;

  drawerDescription?: string;
  setDrawerDescription: (description: string) => void;

  drawerCollection?: number;
  setDrawerCollection: (collection: number) => void;

  drawerFinish?: number;
  setDrawerFinish: (finish: number) => void;

  drawerSlide: { supplier?: number; model?: number; depth?: number } | null;
  setDrawerSlide: (slide: { supplier?: number; model?: number; depth?: number }) => void;

  drawerSize: { weight?: number; thickness?: number } | null;
  setDrawerSize: (size: { weight?: number; thickness?: number }) => void;
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
  const [drawerType, setDrawerType] = useState<ProjectCreationType['drawerType']>(Number(type || 0));
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

  useEffect(() => {
    setCookieOrRemoveIfUndefined(PROJECT_UNIT, unit);
    setCookieOrRemoveIfUndefined(PROJECT_DRAWER_TYPE, drawerType?.toString());
    setCookieOrRemoveIfUndefined(PROJECT_DRAWER_DESCRIPTION, drawerDescription);
    setCookieOrRemoveIfUndefined(PROJECT_DRAWER_COLLECTION, drawerCollection?.toString());
    setCookieOrRemoveIfUndefined(PROJECT_DRAWER_FINISH, drawerFinish?.toString());
    setCookieOrRemoveIfUndefined(PROJECT_DRAWER_SLIDE, JSON.stringify(drawerSlide));
    setCookieOrRemoveIfUndefined(PROJECT_DRAWER_SIZE, JSON.stringify(drawerSize));
  }, [unit, drawerType, drawerDescription, drawerCollection, drawerFinish, drawerSlide, drawerSize]);

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
  const drawerDescription = getCookie(PROJECT_DRAWER_DESCRIPTION, ctx) as ProjectCreationType['drawerDescription'];
  const drawerCollection = getCookie(PROJECT_DRAWER_COLLECTION, ctx) as ProjectCreationType['drawerCollection'];
  const drawerFinish = getCookie(PROJECT_DRAWER_FINISH, ctx) as ProjectCreationType['drawerFinish'];
  const slide = getCookie(PROJECT_DRAWER_SLIDE, ctx);
  const size = getCookie(PROJECT_DRAWER_SIZE, ctx);

  const drawerSlide = typeof slide === 'string' ? (JSON.parse(slide) as ProjectCreationType['drawerSlide']) : slide;
  const drawerSize = typeof size === 'string' ? (JSON.parse(size) as ProjectCreationType['drawerSize']) : size;

  return stripUndefined({
    unit,
    drawerType: Number(drawerType),
    drawerDescription,
    drawerCollection: Number(drawerCollection),
    drawerFinish: Number(drawerFinish),
    drawerSlide,
    drawerSize
  });
};
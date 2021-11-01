import React from 'react';
import { ModuleDataFragment } from '../../../apollo/generated/graphql';

type BuilderSidebarProps = {
  modules?: ModuleDataFragment[];
};

const BuilderSidebar: React.FC<BuilderSidebarProps> = ({ modules }) => {
  console.log(modules);
  return <div className="z-10 flex-none w-1/5 max-w-sm bg-white shadow-lg"></div>;
};

export default BuilderSidebar;

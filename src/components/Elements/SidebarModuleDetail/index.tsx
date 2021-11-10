import React from 'react';
import { ModuleDataFragment } from '../../../apollo/generated/graphql';
import ModuleButtonImage from '../ModuleButtonImage';
import SidebarModuleAddons from '../SidebarModuleAddons';

type SidebarModuleDetailProps = {
  module: ModuleDataFragment;
};

const SidebarModuleDetail: React.FC<SidebarModuleDetailProps> = ({ module }) => {
  return (
    <div className="flex flex-col h-full mr-4">
      <ModuleButtonImage module={module} />
      {module.rules?.extensions?.options && module.rules.extensions.options.length > 0 && (
        <SidebarModuleAddons options={module.rules.extensions.options} />
      )}
    </div>
  );
};

export default SidebarModuleDetail;

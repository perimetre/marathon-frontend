import React, { useMemo } from 'react';
import { ModuleDataFragment } from '../../../apollo/generated/graphql';
import ModuleButtonImage from '../ModuleButtonImage';
import SidebarModuleAddons from '../SidebarModuleAddons';

type SidebarModuleDetailProps = {
  module: ModuleDataFragment;
};

const SidebarModuleDetail: React.FC<SidebarModuleDetailProps> = ({ module }) => {
  const options = useMemo(() => {
    return [...(module.rules?.extensions?.options || []), ...(module.rules?.rules?.options || [])];
  }, [module.rules]);

  return (
    <div className="flex flex-col h-full mr-4">
      <ModuleButtonImage module={module} />
      {options && options.length > 0 && <SidebarModuleAddons options={options} />}
    </div>
  );
};

export default SidebarModuleDetail;

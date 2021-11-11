import React, { useMemo } from 'react';
import { ModuleDataFragment } from '../../../apollo/generated/graphql';
import ModuleButtonImage from '../ModuleButtonImage';
import SidebarModuleAddons from '../SidebarModuleAddons';
import { usePlannerContext } from '../../Providers/PlannerProvider';
import Button from '../../UI/Button';

type SidebarModuleDetailProps = {
  module: ModuleDataFragment;
};

const SidebarModuleDetail: React.FC<SidebarModuleDetailProps> = ({ module }) => {
  const options = useMemo(() => {
    return [...(module.rules?.extensions?.options || []), ...(module.rules?.rules?.options || [])];
  }, [module.rules]);

  const { trayDone, trayDelete, trayEdit, trayRotateRight, trayRotateLeft } = usePlannerContext();

  return (
    <div className="flex flex-col h-full mr-4">
      <Button onClick={trayDone}>done</Button>
      <Button onClick={trayDelete}>trayDelete</Button>
      <Button onClick={trayEdit}>trayEdit</Button>
      <Button onClick={trayRotateRight}>trayRotateRight</Button>
      <Button onClick={trayRotateLeft}>trayRotateLeft</Button>
      <ModuleButtonImage module={module} />
      {options && options.length > 0 && <SidebarModuleAddons options={options} />}
    </div>
  );
};

export default SidebarModuleDetail;

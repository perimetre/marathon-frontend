import React from 'react';
import { ModuleDataFragment } from '../../../../../apollo/generated/graphql';
import Image from 'next/image';

type SidebarModuleDetailProps = {
  module: ModuleDataFragment;
};

const SidebarModuleDetail: React.FC<SidebarModuleDetailProps> = ({ module }) => {
  return (
    <div className="mr-4">
      {module.thumbnailUrl ? (
        <div className="relative w-full h-48 mui-border-radius">
          <Image src={module.thumbnailUrl} alt={module.partNumber} layout="fill" objectFit="contain" />
        </div>
      ) : (
        <div className="w-full h-48 bg-white mui-border-radius" />
      )}
      <p className="mt-2 text-lg font-bold">{module.partNumber}</p>
      {module.description && <p className="mt-4 text-base">{module.description}</p>}
    </div>
  );
};

export default SidebarModuleDetail;

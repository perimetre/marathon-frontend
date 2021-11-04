import React, { useMemo } from 'react';
import { ModuleDataFragment, useModuleOptionsQuery } from '../../../apollo/generated/graphql';
import { Button } from '../../UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';
import { getLocaleIdFromGraphqlError } from '../../../lib/apollo/exceptions';
import ErrorMessage from '../../UI/ErrorMessage';
import Skeleton from '../../UI/Skeleton';
import SkeletonImage from '../../UI/SkeletonImage';

type ModuleButtonImageProps = { module: ModuleDataFragment };

const ModuleButtonImage: React.FC<ModuleButtonImageProps> = ({ module }) => (
  <div>
    <div className="relative w-full h-48 bg-white mui-border-radius">
      {module.thumbnailUrl && (
        <SkeletonImage
          key={module.partNumber}
          src={module.thumbnailUrl}
          alt={module.partNumber}
          layout="fill"
          objectFit="contain"
          sizes="25vw"
        />
      )}
      <div className="relative inset-0 flex items-end justify-end h-full p-2">
        <div className="flex items-center justify-end">
          <Button className="items-center justify-center group gap-2">
            <span>
              <FormattedMessage id="common.add" />
            </span>
            <FontAwesomeIcon icon={faCirclePlus} className="text-2xl mui-animate-group-hover" />
          </Button>
        </div>
      </div>
    </div>
    <p className="mt-2 text-lg font-bold">{module.partNumber}</p>
    {module.description && <p className="mt-4 text-base">{module.description}</p>}
  </div>
);

type SidebarModuleAddonsProps = {
  options: string[];
};

const SidebarModuleAddons: React.FC<SidebarModuleAddonsProps> = ({ options }) => {
  // ***********
  // ** Grapqhl declarations
  // ***********

  // ** Queries
  const {
    data,
    error: queryError,
    loading,
    refetch
  } = useModuleOptionsQuery({
    // This makes the "loading" state to be updated when we run "refetch"
    // if we don't do this, it'll run in background and state will only be updated if the query finishes
    notifyOnNetworkStatusChange: true,
    variables: {
      options
    }
  });

  // ***********
  // ** Business logic
  // ***********

  // Get the translated error if any
  const error = useMemo(
    () => (queryError ? getLocaleIdFromGraphqlError(queryError.graphQLErrors, queryError.networkError) : undefined),
    [queryError]
  );

  return (
    <div className="flex flex-col flex-grow h-0 mui-scrollbar">
      <div className="flex items-center justify-center mt-4">
        <p className="uppercase text-mui-primary">
          <FormattedMessage id="build.addOns" />
        </p>
        <div className="flex-grow ml-4 h-0.5 bg-mui-primary" />
      </div>
      <div className="flex-grow h-full my-4 overflow-auto">
        {!error ? (
          <div className="flex flex-col h-full ml-8 mr-4 gap-4">
            {!loading
              ? data?.modules.map((moduleOption, i) => (
                  <React.Fragment key={moduleOption.id}>
                    {i !== 0 && <div className="flex-shrink-0 w-full my-2 bg-mui-gray-300 h-0.5" />}
                    <div>
                      <ModuleButtonImage module={moduleOption} />
                    </div>
                  </React.Fragment>
                ))
              : Array(2)
                  .fill(null)
                  .map((_, i) => (
                    <div key={i}>
                      <Skeleton className="w-full h-48 mui-border-radius" />
                      <Skeleton className="w-1/3 h-8 mt-4 mui-border-radius" />
                    </div>
                  ))}
          </div>
        ) : (
          <ErrorMessage error={`serverErrors.${error}`} handleTryAgain={refetch} />
        )}
      </div>
    </div>
  );
};

type SidebarModuleDetailProps = {
  module: ModuleDataFragment;
};

const SidebarModuleDetail: React.FC<SidebarModuleDetailProps> = ({ module }) => {
  return (
    <div className="flex flex-col h-full mr-4">
      <ModuleButtonImage module={module} />
      {module.rules?.rules?.options && module.rules.rules.options.length > 0 && (
        <SidebarModuleAddons options={module.rules.rules.options} />
      )}
    </div>
  );
};

export default SidebarModuleDetail;

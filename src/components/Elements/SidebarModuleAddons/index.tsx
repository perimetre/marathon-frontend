import React, { useMemo } from 'react';
import { useModuleOptionsQuery } from '../../../apollo/generated/graphql';
import { getLocaleIdFromGraphqlError } from '../../../lib/apollo/exceptions';
import { FormattedMessage } from 'react-intl';
import ModuleButtonImage from '../ModuleButtonImage';
import Skeleton from '../../UI/Skeleton';
import ErrorMessage from '../../UI/ErrorMessage';
import { usePlannerContext } from '../../Providers/PlannerProvider';

type SidebarModuleAddonsProps = {
  options: string[];
  parentPartNumber: string;
};

const SidebarModuleAddons: React.FC<SidebarModuleAddonsProps> = ({ options, parentPartNumber }) => {
  // ***********
  // ** Misc
  // ***********
  const { state, projectModule } = usePlannerContext();

  const isBlockedToAddSubmodule = useMemo(
    () => projectModule?.module.partNumber !== parentPartNumber || state !== 'Selected',
    [parentPartNumber, projectModule, state]
  );

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
          <div className="flex flex-col h-full ml-0 mr-2 gap-4">
            {!loading
              ? data?.modules.map((moduleOption, i) => (
                  <React.Fragment key={moduleOption.id}>
                    {i !== 0 && <div className="flex-shrink-0 w-full my-2 bg-mui-gray-300 h-0.5" />}
                    <div className="relative">
                      <ModuleButtonImage
                        isChild
                        module={moduleOption}
                        isBlockedToAddSubmodule={isBlockedToAddSubmodule}
                      />
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

export default SidebarModuleAddons;

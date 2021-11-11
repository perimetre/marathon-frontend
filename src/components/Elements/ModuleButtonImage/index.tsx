import { ModuleDataFragment, useModuleRulesLazyQuery } from '../../../apollo/generated/graphql';
import React, { useCallback, useEffect } from 'react';
import { usePlannerContext } from '../../Providers/PlannerProvider';
import SkeletonImage from '../../UI/SkeletonImage';
import Button from '../../UI/Button';
import { FormattedMessage } from 'react-intl';
import { PlusCircle } from 'react-feather';
import { nanoid } from 'nanoid';
import Spinner from '../../UI/Spinner';
import logging from '../../../lib/logging';
import { useIntersection } from 'next/dist/client/use-intersection';

type ModuleButtonImageProps = { module: ModuleDataFragment; isChild?: boolean };

const ModuleButtonImage: React.FC<ModuleButtonImageProps> = ({ module, isChild }) => {
  // ***********
  // ** Misc
  // ***********
  const { createModule, createChildrenModule, setIsPending, state } = usePlannerContext();
  const { id, partNumber, bundleUrl } = module;

  // A hook that check is the element is visible, so we run logic only when it is
  // Ref: https://github.com/vercel/next.js/blob/0c04f96e9be0a78c1b3a77e8d2788afc0822ba1a/packages/next/client/image.tsx#L505
  const [ref, isVisible] = useIntersection<HTMLDivElement>({
    rootMargin: '10px'
  });

  // ***********
  // ** Grapqhl declarations
  // ***********

  // ** Queries
  const [doLoadModuleRules, { data, error: queryError, loading, refetch }] = useModuleRulesLazyQuery({
    // This makes the "loading" state to be updated when we run "refetch"
    // if we don't do this, it'll run in background and state will only be updated if the query finishes
    notifyOnNetworkStatusChange: true,
    variables: {
      partNumber
    }
  });

  // ***********
  // ** Business logic
  // ***********

  // ** Effects
  useEffect(() => {
    if (queryError) logging.error(queryError, undefined, { partNumber });
  }, [queryError, partNumber]);

  useEffect(() => {
    // Only load rules when this element gets visible
    if (isVisible) {
      doLoadModuleRules();
    }
  }, [isVisible, doLoadModuleRules]);

  // ** Handlers
  const onAddClick = useCallback(() => {
    setIsPending(true);

    const projectModuleId = nanoid();

    if (data?.module && bundleUrl) {
      if (!isChild) {
        createModule(partNumber, id, projectModuleId, data.module.rulesJson, bundleUrl);
      } else {
        createChildrenModule(partNumber, id, projectModuleId, data.module.rulesJson, bundleUrl);
      }
    }
  }, [bundleUrl, createChildrenModule, createModule, id, isChild, partNumber, setIsPending, data]);

  return (
    <div>
      <div className="relative w-full h-48 bg-white mui-border-radius" ref={ref}>
        {module.thumbnailUrl && (
          <SkeletonImage
            key={partNumber}
            src={module.thumbnailUrl}
            alt={partNumber}
            layout="fill"
            objectFit="contain"
            sizes="25vw"
          />
        )}
        <div className="relative inset-0 flex items-end justify-end h-full p-2">
          <div className="flex items-center justify-end">
            <Button
              className="items-center justify-center group gap-2"
              onClick={!!queryError ? (refetch ? () => refetch() : undefined) : onAddClick}
              disabled={!data?.module?.rulesJson || loading || (isChild && state !== 'Selected')}
            >
              {loading ? (
                <Spinner />
              ) : !!queryError ? (
                <>
                  <FormattedMessage id="common.tryAgain" />
                </>
              ) : (
                <>
                  <span>
                    <FormattedMessage id="common.add" />
                  </span>
                  <PlusCircle className="text-2xl" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
      <p className="mt-2 text-lg font-bold">{partNumber}</p>
      {module.description && <p className="mt-4 text-base">{module.description}</p>}
    </div>
  );
};

export default ModuleButtonImage;

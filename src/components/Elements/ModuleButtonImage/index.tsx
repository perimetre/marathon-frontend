import { ModuleDataFragment } from '../../../apollo/generated/graphql';
import React, { useCallback } from 'react';
import { usePlannerContext } from '../../Providers/PlannerProvider';
import SkeletonImage from '../../UI/SkeletonImage';
import Button from '../../UI/Button';
import { FormattedMessage } from 'react-intl';
import { PlusCircle } from 'react-feather';

type ModuleButtonImageProps = { module: ModuleDataFragment; isChild?: boolean };

const ModuleButtonImage: React.FC<ModuleButtonImageProps> = ({ module, isChild }) => {
  // ***********
  // ** Misc
  // ***********
  const { placeModule, placeChildrenModule, setIsPending } = usePlannerContext();
  const { partNumber } = module;

  // ***********
  // ** Grapqhl declarations
  // ***********

  // ** Mutations
  // TODO: Create add project module mutation

  // ***********
  // ** Business logic
  // ***********

  const onAddClick = useCallback(() => {
    setIsPending(true);

    if (!isChild) {
      placeModule(partNumber, 0);
    } else {
      placeChildrenModule(partNumber, 0);
    }
  }, [isChild, partNumber, placeChildrenModule, placeModule, setIsPending]);

  return (
    <div>
      <div className="relative w-full h-48 bg-white mui-border-radius">
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
            <Button className="items-center justify-center group gap-2" onClick={onAddClick}>
              <span>
                <FormattedMessage id="common.add" />
              </span>
              <PlusCircle className="text-2xl" />
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

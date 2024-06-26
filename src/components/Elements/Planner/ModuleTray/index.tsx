import React, { useEffect, useMemo } from 'react';
import { usePlannerContext } from '../../../Providers/PlannerProvider';
import { motion } from 'framer-motion';
import TrayButton from '../../../UI/TrayButton';
import { Check, CornerLeftDown, CornerRightDown, Move, Trash2 } from 'react-feather';
import { FormattedMessage } from 'react-intl';
import VerticalDivider from '../../../UI/VerticalDivider';
import Button from '../../../UI/Button';
import { useModuleRulesLazyQuery } from '../../../../apollo/generated/graphql';
import PlannerHelper from '../PlannerHelper';

const trayVariants = {
  open: { translateY: '0%', transition: { type: 'spring', stiffness: 350, damping: 40 } },
  closed: { translateY: '100%', transition: { type: 'spring', stiffness: 350, damping: 40 } }
};

const ModuleTray: React.FC = () => {
  // ***********
  // ** Misc
  // ***********
  const {
    state,
    trayDone,
    trayDelete,
    trayDeleteEdge,
    trayEdit,
    trayRotateRight,
    trayRotateLeft,
    projectModule,
    childrenModules
  } = usePlannerContext();

  // ***********
  // ** Grapqhl declarations
  // ***********

  // ** Queries
  const [doLoadModuleRules, { data }] = useModuleRulesLazyQuery({
    // This makes the "loading" state to be updated when we run "refetch"
    // if we don't do this, it'll run in background and state will only be updated if the query finishes
    notifyOnNetworkStatusChange: true
  });

  // ***********
  // ** Business logic
  // ***********

  const isOpen = useMemo(() => ['AddingSubModule', 'Editing', 'Selected'].includes(state), [state]);
  const hasEdge = useMemo(() => childrenModules?.some((x) => x.module.isEdge), [childrenModules]);

  // ** Effects
  useEffect(() => {
    if (projectModule && projectModule.module.partNumber) {
      doLoadModuleRules({
        variables: {
          partNumber: projectModule.module.partNumber
        }
      });
    }
  }, [doLoadModuleRules, projectModule]);

  return (
    <>
      <PlannerHelper state={state} canRotate={!!data?.module?.rulesJson?.rules?.rotation} />
      <motion.div
        variants={trayVariants}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        className="flex items-stretch justify-between bg-white shadow-md pointer-events-auto"
      >
        {/*Left*/}
        <div className="flex items-stretch justify-center gap-2">
          <TrayButton className="text-mui-error" iconPosition="left" icon={() => <Trash2 />} onClick={trayDelete}>
            <FormattedMessage id="build.tray.delete" />
          </TrayButton>

          {hasEdge && (
            <>
              <VerticalDivider />
              <TrayButton
                className="text-mui-error"
                iconPosition="left"
                icon={() => <Trash2 />}
                onClick={trayDeleteEdge}
              >
                <FormattedMessage id="build.tray.deleteEdge" />
              </TrayButton>
            </>
          )}

          <VerticalDivider />

          <TrayButton
            iconPosition="left"
            icon={() => <Move />}
            onClick={trayEdit}
            disabled={state === 'Editing' || data?.module?.isMat}
          >
            <FormattedMessage id="build.tray.move" />
          </TrayButton>

          <VerticalDivider />

          <TrayButton
            iconPosition="left"
            icon={() => <CornerLeftDown />}
            onClick={trayRotateLeft}
            disabled={!data?.module?.rulesJson?.rules?.rotation}
          >
            <FormattedMessage id="build.tray.rotateLeft" />
          </TrayButton>

          <VerticalDivider />

          <TrayButton
            iconPosition="left"
            icon={() => <CornerRightDown />}
            onClick={trayRotateRight}
            disabled={!data?.module?.rulesJson?.rules?.rotation}
          >
            <FormattedMessage id="build.tray.rotateRight" />
          </TrayButton>
        </div>
        {/*Right*/}
        <div className="flex items-center justify-center">
          <p>{projectModule?.module.partNumber}</p>
          <Button className="m-2 bg-mui-success" onClick={trayDone}>
            <FormattedMessage id="build.tray.done" />
            <Check />
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default ModuleTray;

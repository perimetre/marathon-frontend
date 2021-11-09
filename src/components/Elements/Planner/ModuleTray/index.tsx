import React, { useMemo } from 'react';
import { usePlannerContext } from '../../../Providers/PlannerProvider';
import { motion } from 'framer-motion';
import TrayButton from '../../../UI/TrayButton';
import { Check, CornerLeftDown, CornerRightDown, Move, Trash2 } from 'react-feather';
import { FormattedMessage } from 'react-intl';
import VerticalDivider from '../../../UI/VerticalDivider';
import Button from '../../../UI/Button';

const trayVariants = {
  open: { translateY: '0%', transition: { type: 'spring', stiffness: 350, damping: 40 } },
  closed: { translateY: '100%', transition: { type: 'spring', stiffness: 350, damping: 40 } }
};

const ModuleTray: React.FC = () => {
  const { state, trayDone, trayDelete, trayEdit, trayRotateRight, trayRotateLeft } = usePlannerContext();

  const isOpen = useMemo(() => ['AddingSubModule', 'Editing', 'Selected'].includes(state), [state]);

  return (
    <motion.div
      variants={trayVariants}
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      className="absolute bottom-0 left-0 right-0 flex items-stretch justify-between bg-white shadow-md pointer-events-auto"
    >
      {/*Left*/}
      <div className="flex items-stretch justify-center gap-2">
        <TrayButton className="text-mui-error" iconPosition="left" icon={() => <Trash2 />} onClick={trayDelete}>
          <FormattedMessage id="build.tray.delete" />
        </TrayButton>

        <VerticalDivider />

        <TrayButton iconPosition="left" icon={() => <Move />} onClick={trayEdit} disabled={state === 'Editing'}>
          <FormattedMessage id="build.tray.move" />
        </TrayButton>

        <VerticalDivider />

        <TrayButton iconPosition="left" icon={() => <CornerLeftDown />} onClick={trayRotateLeft}>
          <FormattedMessage id="build.tray.rotateLeft" />
        </TrayButton>

        <VerticalDivider />

        <TrayButton iconPosition="left" icon={() => <CornerRightDown />} onClick={trayRotateRight}>
          <FormattedMessage id="build.tray.rotateRight" />
        </TrayButton>
      </div>
      {/*Right*/}
      <div>
        <Button className="m-2 bg-mui-success" onClick={trayDone}>
          <FormattedMessage id="build.tray.done" />
          <Check />
        </Button>
      </div>
    </motion.div>
  );
};

export default ModuleTray;

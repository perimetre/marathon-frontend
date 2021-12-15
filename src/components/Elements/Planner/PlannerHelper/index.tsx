import React, { useMemo } from 'react';
import MouseLeftClick from '../../../UI/Icons/MouseLeftClick';
import MouseRightClick from '../../../UI/Icons/MouseRightClick';
import KeyboardM from '../../../UI/Icons/KeyboardM';
import KeyboardD from '../../../UI/Icons/KeyboardD';
import MouseScroll from '../../../UI/Icons/MouseScroll';
import { PieceBuilderState } from '../../../Providers/PlannerProvider';
import { motion } from 'framer-motion';
import { FormattedMessage } from 'react-intl';

const trayVariants = {
  open: { translateY: '0%', transition: { type: 'spring', stiffness: 350, damping: 40 } },
  closed: { translateY: '140%', transition: { type: 'spring', stiffness: 350, damping: 40 } }
};

type PlannerHelperProps = {
  state: PieceBuilderState;
  canRotate?: boolean;
};

const PlannerHelper: React.FC<PlannerHelperProps> = ({ state, canRotate }) => {
  // ***********
  // ** Business logic
  // ***********

  const isOpen = useMemo(() => ['AddingSubModule', 'Editing', 'Selected'].includes(state), [state]);

  return (
    <motion.div
      variants={trayVariants}
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      className="container flex w-full h-10 px-8 mx-auto bg-black select-none gap-2 opacity-80"
    >
      <div className="flex flex-row items-center text-sm text-white gap-1">
        <MouseLeftClick />
        {!isOpen ? (
          <FormattedMessage id="help.selectModule" />
        ) : state === 'Selected' ? (
          <FormattedMessage id="help.editModule" />
        ) : (
          <FormattedMessage id="help.placeModule" />
        )}
      </div>
      {state === 'Selected' && (
        <div className="flex flex-row items-center text-sm text-white gap-1">
          <KeyboardM />
          <FormattedMessage id="help.moveModule" />
        </div>
      )}
      {state === 'Selected' && (
        <div className="flex flex-row items-center text-sm text-white gap-1">
          <KeyboardD />
          <FormattedMessage id="help.deleteModule" />
        </div>
      )}
      {state === 'Editing' && (
        <div className="flex flex-row items-center text-sm text-white gap-1">
          <MouseRightClick />
          /
          <KeyboardD />
          <FormattedMessage id="help.deleteModule" />
        </div>
      )}
      {!!(state === 'Editing' && canRotate) && (
        <div className="flex flex-row items-center text-sm text-white gap-1">
          <MouseScroll />
          <FormattedMessage id="help.rotateModule" />
        </div>
      )}
    </motion.div>
  );
};

export default PlannerHelper;

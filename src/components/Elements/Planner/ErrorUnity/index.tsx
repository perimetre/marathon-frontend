import { motion } from 'framer-motion';
import React from 'react';
import { AlertTriangle } from 'react-feather';
import { FormattedMessage } from 'react-intl';
import Button from '../../../UI/Button';

type ErrorUnityProps = {
  error: string;
};

const ErrorUnity: React.FC<ErrorUnityProps> = ({ error }) => {
  return (
    <div className="absolute top-0 left-0 right-0 flex items-center justify-center w-full h-full select-auto">
      <motion.div
        variants={{
          hidden: { opacity: 0, translateY: 50 },
          show: { opacity: 1, translateY: 0, transition: { delay: 0.2 } }
        }}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="px-6 py-4 bg-white shadow-lg rounded-md"
      >
        <div className="flex items-center font-semibold text-red-600">
          <AlertTriangle />
          <h2 className="pl-2 text-xl">
            <FormattedMessage id="project.unityError" />
          </h2>
        </div>
        <p className="mt-2 mb-4">{error}</p>
        <Button onClick={() => window.location.reload()}>
          <FormattedMessage id="project.reloadPage" />
        </Button>
      </motion.div>
    </div>
  );
};

export default ErrorUnity;

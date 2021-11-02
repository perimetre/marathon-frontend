import React from 'react';
import classNames from 'classnames';
import { ArrowLeft, ArrowRight } from '../../UI/Icons';
import { Button } from '../../UI/Button';
import { motion } from 'framer-motion';

export type ProjectCreationTemplateProps = {
  title: string;
  description?: string;
  step: number;
  loading?: boolean;
  disableNext?: boolean;
  disablePrev?: boolean;
  handleNext?: () => void;
  handlePrev?: () => void;
};

const ProjectCreationTemplate: React.FC<ProjectCreationTemplateProps> = ({
  step,
  title,
  loading,
  description,
  disableNext,
  disablePrev,
  handleNext,
  handlePrev,
  children
}) => {
  return (
    <div className="bg-gray-100">
      <div>
        <div className="bg-gray-400 h-28" />
        <div className="container relative mx-auto">
          <Button
            disabled={disablePrev || loading}
            onClick={handlePrev}
            className="absolute left-0 flex items-center btn-default -bottom-5"
          >
            <ArrowRight />
            Back
          </Button>
          <Button
            disabled={disableNext || loading}
            onClick={handleNext}
            className="absolute right-0 flex items-center btn-default -bottom-5"
          >
            Next
            {loading ? <span className="ml-2 mui-spinner" /> : <ArrowLeft />}
          </Button>
        </div>
      </div>
      <div className="flex justify-center mx-4 mt-16 gap-6">
        {Array.from({ length: 5 }).map((_item, i) => (
          <div
            key={`step-${i}`}
            className={classNames('w-20 h-2 rounded-sm', step > i ? 'bg-red-500' : 'bg-gray-500')}
          />
        ))}
      </div>
      <div className="flex flex-col mt-12 text-center">
        <h1 className="text-4xl font-bold text-center">{title}</h1>
        {description && <p className="my-4 text-xl text-gray-600">{description}</p>}
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, translateY: 50 },
          show: { opacity: 1, translateY: 0, transition: { delay: 0.2 } }
        }}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ProjectCreationTemplate;

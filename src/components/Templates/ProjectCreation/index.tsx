import React from 'react';
import classNames from 'classnames';
import Button from '../../UI/Button';
import { motion } from 'framer-motion';
import AppLayout from '../../Layouts/AppLayout';
import Spinner from '../../UI/Spinner';
import SkeletonImage from '../../UI/SkeletonImage';
import UnitSwitch from '../../Elements/UnitSwitch';
import { ArrowLeft, ArrowRight } from 'react-feather';
import { FormattedMessage } from 'react-intl';

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
  handlePrev,
  children
}) => {
  return (
    <AppLayout appendRight={() => <UnitSwitch />}>
      <div className="flex flex-col">
        <div className="flex overflow-hidden h-28 gap-4">
          <div className="relative w-full h-full min-w-96">
            <SkeletonImage
              key="drawer-one"
              src="/images/IMG_DrawerOne.jpg"
              priority
              layout="fill"
              alt="drawer_one"
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-full min-w-96">
            <SkeletonImage
              key="drawer-two"
              src="/images/IMG_DrawerTwo.jpg"
              priority
              layout="fill"
              alt="drawer_one"
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-full min-w-96">
            <SkeletonImage
              key="drawer-three"
              src="/images/IMG_DrawerThree.jpg"
              priority
              layout="fill"
              alt="drawer_one"
              className="object-cover"
            />
          </div>
          <div className="relative w-full h-full min-w-96">
            <SkeletonImage
              key="drawer-four"
              src="/images/IMG_DrawerFour.jpg"
              priority
              layout="fill"
              alt="drawer_one"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center mx-4 mt-16 gap-6">
          {Array.from({ length: 5 }).map((_item, i) => (
            <div
              key={`step-${i}`}
              className={classNames('w-20 h-2 rounded-sm', step > i ? 'bg-red-500' : 'bg-gray-300')}
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
          className="flex-1"
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          {children}
        </motion.div>
        <div className="container sticky bottom-0 flex justify-end p-6 mx-auto border-t border-gray-300 bg-mui-gray-50 gap-8">
          {step !== 1 && (
            <Button
              disabled={disablePrev || loading}
              className="px-6 py-2"
              type="button"
              onClick={(e) => {
                // Using stopPropagation and preventDefault because this is triggering onsubmit on form for a unknown reason
                e.preventDefault();
                e.stopPropagation();
                handlePrev && handlePrev();
              }}
            >
              <ArrowLeft />
              <FormattedMessage id="common.back" />
            </Button>
          )}
          <Button disabled={disableNext || loading} className="px-6 py-2" type="submit">
            <FormattedMessage id="common.next" />
            {loading ? <Spinner className="w-5 h-5 ml-2" /> : <ArrowRight />}
          </Button>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProjectCreationTemplate;

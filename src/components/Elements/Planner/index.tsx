import React from 'react';
import { useUnityPlayerContext } from '../../Providers/UnityPlayerProvider';
import PlannerSidebar from '../../UI/PlannerSidebar';
import UnityPlayer from '../UnityPlayer';
import classNames from 'classnames';
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';
import ModuleTray from './ModuleTray';
import ErrorUnity from './ErrorUnity';
import { PlannerQuery } from '../../../apollo/generated/graphql';
import { usePlannerContext } from '../../Providers/PlannerProvider';
import Spinner from '../../UI/Spinner';
import { FormattedMessage } from 'react-intl';
import { motion } from 'framer-motion';

export type PlannerProps = {
  slug: string;
  data?: PlannerQuery;
  loading: boolean;
  error?: string;
  handleTryAgain: () => void;
  isSidebarOpen?: boolean;
};

const Planner: React.FC<PlannerProps> = ({ slug, data, loading, error, handleTryAgain, isSidebarOpen }) => {
  const { loadingProgress, state } = useUnityPlayerContext();
  const { isPending, didFinishSetup, error: unityError } = usePlannerContext();

  return (
    <div className="relative flex max-h-screen">
      {isPending && (
        <motion.div
          variants={{
            hidden: { opacity: 0, translateY: 50 },
            show: { opacity: 1, translateY: 0, transition: { delay: 0.2 } }
          }}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="absolute z-20 right-10 bottom-10"
        >
          <div className="flex py-4 bg-white px-7 rounded-md">
            <Spinner className="w-6 h-6 mr-5" />
            <FormattedMessage id="build.loadingModule" />
          </div>
        </motion.div>
      )}
      {/* Left sidebar, fixed width */}
      <PlannerSidebar project={data?.project} isSidebarOpen={isSidebarOpen} loading={loading} />
      {/* Right section, takes remaining space(flex-grow) */}
      <div className="relative flex-grow bg-mui-gray-300">
        {/* Try avoiding wrapping unity player with more conditions, or else it won't load on init */}
        {/* In this case it's valid because if graphql has an error, we shouldn't display the player anyway */}
        {!error && (
          <UnityPlayer
            className={classNames('opacity-0 absolute inset-0', {
              'animate-fade-in': state === 'complete' && didFinishSetup && loadingProgress >= 1
            })}
          />
        )}
        {/* Content on top of unity player */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {unityError && <ErrorUnity error={unityError} />}
          {(state === 'loading' || loading || !didFinishSetup) && <LoadingState />}
          {(state === 'error' || error) && <ErrorState slug={slug} handleTryAgain={handleTryAgain} error={error} />}
          <div className="absolute bottom-0 left-0 right-0">
            {!!(state === 'complete' && !unityError) && (
              <>
                <ModuleTray />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planner;

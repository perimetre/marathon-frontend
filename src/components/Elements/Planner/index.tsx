import React from 'react';
import { useUnityPlayerContext } from '../../Providers/UnityPlayerProvider';
import PlannerSidebar from '../../UI/PlannerSidebar';
import UnityPlayer from '../UnityPlayer';
import classNames from 'classnames';
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';
import ModuleTray from './ModuleTray';
import { PlannerQuery } from '../../../apollo/generated/graphql';

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

  return (
    <div className="flex max-h-screen">
      {/* Left sidebar, fixed width */}
      <PlannerSidebar project={data?.project} isSidebarOpen={isSidebarOpen} loading={loading} />
      {/* Right section, takes remaining space(flex-grow) */}
      <div className="relative flex-grow bg-mui-gray-300">
        {/* Try avoiding wrapping unity player with more conditions, or else it won't load on init */}
        {/* In this case it's valid because if graphql has an error, we shouldn't display the player anyway */}
        {!error && (
          <UnityPlayer
            className={classNames('opacity-0 absolute inset-0', {
              'animate-fade-in': state === 'complete' && loadingProgress >= 1
            })}
          />
        )}
        {/* Content on top of unity player */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {(state === 'loading' || loading) && <LoadingState />}
          {(state === 'error' || error) && <ErrorState slug={slug} handleTryAgain={handleTryAgain} error={error} />}
          {state === 'complete' && (
            <>
              <ModuleTray />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Planner;

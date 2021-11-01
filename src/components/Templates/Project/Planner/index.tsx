import Head from 'next/head';
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Image from 'next/image';
import classnames from 'classnames';
import { CenterContent } from './styles';
import UnityPlayer from '../../../Elements/UnityPlayer';
import { useUnityPlayerContext, UnityPlayerProvider } from '../../../Providers/UnityPlayerProvider';
import BuilderSidebar from '../../../UI/BuilderSidebar';
import ProgressBar from '../../../UI/ProgressBar';
import Spinner from '../../../UI/Spinner';
import { PlannerQuery } from '../../../../apollo/generated/graphql';
import { Button } from '../../../UI/Button';

const LoadingState: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { loadingProgress } = useUnityPlayerContext();

  return (
    <CenterContent
      className={classnames({
        'opacity-0 animate-fade-in': loadingProgress < 1, // Animate in when progress starts
        'animate-fade-out': loadingProgress >= 1 // Fade out when loading is finished
      })}
    >
      <div
        className={classnames('h-28 w-28 relative translate-y-2 opacity-0', {
          'animate-fade-into': imageLoaded // Animate up when image gets loaded
        })}
      >
        <Image
          layout="fill"
          src="/images/logo.webp"
          alt={'marathon'}
          sizes="50vw"
          objectFit="cover"
          onLoadingComplete={() => setImageLoaded(true)}
        />
      </div>
      <div className="flex items-center justify-center my-6 gap-4">
        <p className="text-2xl font-semibold uppercase text-mui-dark">
          <FormattedMessage id="title" />
        </p>
        <Spinner className="w-6 h-6" />
      </div>
      <ProgressBar color="mui-color-mui-dark" className="max-w-xs" progress={loadingProgress * 100} />
    </CenterContent>
  );
};

type ErrorStateProps = Pick<PlannerTemplateProps, 'error' | 'handleTryAgain'>;

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  const { errorMessage } = useUnityPlayerContext();

  const intl = useIntl();

  return (
    <CenterContent>
      <p className="text-2xl text-center">
        <FormattedMessage
          id="build.error"
          values={{
            appTitle: intl.formatMessage({ id: 'title' }),
            errorMessage: error || errorMessage,
            error: (msg: string) => <p className="mt-2 text-xl font-bold text-red-500">{msg}</p>
          }}
        />
      </p>

      {error && (
        <Button className="mt-4">
          <FormattedMessage id="common.tryAgain" />
        </Button>
      )}
    </CenterContent>
  );
};

type PlannerProps = PlannerTemplateProps;

const Planner: React.FC<PlannerProps> = ({ data, loading, error, handleTryAgain }) => {
  const { loadingProgress, state } = useUnityPlayerContext();

  return (
    <div className="flex min-h-screen">
      {/* Left sidebar, fixed width */}
      <BuilderSidebar modules={data?.project?.modules} />
      {/* Right section, takes remaining space(flex-grow) */}
      <div className="relative flex-grow">
        {!error && (
          <UnityPlayer
            className={classnames('opacity-0', { 'animate-fade-in': state === 'complete' && loadingProgress >= 1 })}
          />
        )}
        {/* Content on top of unity player */}
        <div className="absolute inset-0 pointer-events-none">
          {(state === 'loading' || loading) && <LoadingState />}
          {(state === 'error' || error) && <ErrorState handleTryAgain={handleTryAgain} error={error} />}
        </div>
      </div>
    </div>
  );
};

type PlannerTemplateProps = {
  data?: PlannerQuery;
  loading: boolean;
  error?: string;
  handleTryAgain: () => void;
};

const PlannerTemplate: React.FC<PlannerTemplateProps> = ({ data, loading, error, handleTryAgain }) => {
  const intl = useIntl();

  return (
    <>
      <Head>
        {/*TODO: display project name*/}
        <title>
          {intl.formatMessage({ id: 'build.title' })} | {intl.formatMessage({ id: 'title' })}
        </title>
        {/*TODO: display project description*/}
        {/*<meta name="description" content="Generated by create next app" />*/}
      </Head>
      <div id="build-template">
        <UnityPlayerProvider>
          <Planner data={data} loading={loading} error={error} handleTryAgain={handleTryAgain} />
        </UnityPlayerProvider>
      </div>
    </>
  );
};

export default PlannerTemplate;

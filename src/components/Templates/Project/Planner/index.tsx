import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import Image from 'next/image';
import classNames from 'classnames';
import { CenterContent } from './styles';
import UnityPlayer from '../../../Elements/UnityPlayer';
import { useUnityPlayerContext, UnityPlayerProvider } from '../../../Providers/UnityPlayerProvider';
import BuilderSidebar from '../../../UI/BuilderSidebar';
import ProgressBar from '../../../UI/ProgressBar';
import Spinner from '../../../UI/Spinner';
import { PlannerQuery } from '../../../../apollo/generated/graphql';
import { Button } from '../../../UI/Button';
import AppLayout from '../../../Layouts/AppLayout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBarsStaggered, faBars } from '@fortawesome/free-solid-svg-icons';
import NavbarButton from '../../../UI/NavbarButton';

const LoadingState: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { loadingProgress } = useUnityPlayerContext();

  return (
    <CenterContent
      className={classNames({
        'opacity-0 animate-fade-in': loadingProgress < 1, // Animate in when progress starts
        'animate-fade-out': loadingProgress >= 1 // Fade out when loading is finished
      })}
    >
      <div
        className={classNames('h-28 w-28 relative translate-y-2 opacity-0', {
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

type ErrorStateProps = Pick<PlannerTemplateProps, 'slug' | 'error' | 'handleTryAgain'>;

const ErrorState: React.FC<ErrorStateProps> = ({ error, handleTryAgain, slug }) => {
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
        <Button className="mt-4" onClick={handleTryAgain}>
          <FormattedMessage id="common.tryAgain" />
        </Button>
      )}

      {errorMessage && (
        <Link
          href={{
            pathname: '/project/[slug]/planner',
            query: { slug }
          }}
          // disable prefetch to hard refresh
          prefetch={false}
        >
          <a>
            <Button className="mt-4">
              <FormattedMessage id="common.tryAgain" />
            </Button>
          </a>
        </Link>
      )}
    </CenterContent>
  );
};

type PlannerProps = PlannerTemplateProps;

const Planner: React.FC<PlannerProps> = ({ slug, data, loading, error, handleTryAgain }) => {
  const { loadingProgress, state } = useUnityPlayerContext();

  return (
    <div className="flex max-h-screen">
      {/* Left sidebar, fixed width */}
      <BuilderSidebar project={data?.project} />
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
        <div className="absolute inset-0 z-10 pointer-events-none">
          {(state === 'loading' || loading) && <LoadingState />}
          {(state === 'error' || error) && <ErrorState slug={slug} handleTryAgain={handleTryAgain} error={error} />}
        </div>
      </div>
    </div>
  );
};

type PlannerTemplateProps = {
  slug: string;
  data?: PlannerQuery;
  loading: boolean;
  error?: string;
  handleTryAgain: () => void;
};

const PlannerTemplate: React.FC<PlannerTemplateProps> = ({ slug, data, loading, error, handleTryAgain }) => {
  const intl = useIntl();

  return (
    <AppLayout
      prependLeft={() => (
        <>
          <NavbarButton iconPosition="left" icon={() => <FontAwesomeIcon icon={faBars} className="text-2xl" />} />
        </>
      )}
      appendRight={() => (
        <>
          <NavbarButton
            iconPosition="left"
            icon={() => <FontAwesomeIcon icon={faCartShopping} className="text-2xl" />}
          />

          <Link href="/projects">
            <a className="flex items-center justify-center">
              <NavbarButton
                iconPosition="right"
                content={<FormattedMessage id="build.projectsPageNav" />}
                icon={() => <FontAwesomeIcon icon={faBarsStaggered} className="text-2xl text-mui-primary" />}
              />
            </a>
          </Link>
        </>
      )}
    >
      <Head>
        {/*TODO: display project name*/}
        <title>
          {data?.project?.title || intl.formatMessage({ id: 'build.title' })} | {intl.formatMessage({ id: 'title' })}
        </title>
        {/*TODO: display project description*/}
        {/*<meta name="description" content="Generated by create next app" />*/}
      </Head>
      <UnityPlayerProvider>
        <Planner slug={slug} data={data} loading={loading} error={error} handleTryAgain={handleTryAgain} />
      </UnityPlayerProvider>
    </AppLayout>
  );
};

export default PlannerTemplate;
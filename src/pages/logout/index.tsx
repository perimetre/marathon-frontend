import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import React, { useEffect } from 'react';
import { addApolloState, initializeApollo } from '../../lib/apollo';
import Spinner from '../../components/UI/Spinner';
import { useProjectCreationContext } from '../../components/Providers/ProjectCreationProvider';
import { removeCookie } from '../../lib/cookie';
import { useRouter } from 'next/router';

type LogoutContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const LogoutContainer: NextPage<LogoutContainerProps> = () => {
  const { clear } = useProjectCreationContext();
  const router = useRouter();

  useEffect(() => {
    clear();
    removeCookie('auth');
    router.push('/login', '/login');
  }, [router, clear]);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex text-xl font-semibold gap-3">
        <Spinner className="w-8 h-8" /> Exiting...
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params, query } = ctx;

  const apolloClient = initializeApollo(undefined, ctx);

  const props = {
    ...(params || {}),
    ...(query || {})
  };

  return addApolloState(apolloClient, {
    props
  });
};

export default LogoutContainer;

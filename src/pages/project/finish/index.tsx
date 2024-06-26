import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import {
  projectCreationDataHoc,
  ProjectCreationProviderProps,
  requiredProjectData,
  useProjectCreationContext
} from '../../../components/Providers/ProjectCreationProvider';
import { addApolloState, initializeApollo } from '../../../lib/apollo';
import { FINISH_BY_COLLECTION_QUERY } from '../../../apollo/finish';
import { useGetFinishByCollectionQuery } from '../../../apollo/generated/graphql';
import FinishTemplate from '../../../components/Templates/Project/Finish';
import { useCallback, useMemo } from 'react';
import { getLocaleIdFromGraphqlError, hasGraphqlUnauthorizedError } from '../../../lib/apollo/exceptions';
import { requiredAuthWithRedirectProp } from '../../../utils/auth';
import logging from '../../../lib/logging';

type FinishContainerGetServerProps = ProjectCreationProviderProps;

type FinishContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const FinishContainer: NextPage<FinishContainerProps> = ({ drawerFinish, drawerCollection }) => {
  const { setDrawerFinish } = useProjectCreationContext();

  const router = useRouter();

  const {
    data,
    loading,
    error: queryError,
    refetch
  } = useGetFinishByCollectionQuery({
    notifyOnNetworkStatusChange: true,
    variables: {
      collectionId: Number(drawerCollection)
    }
  });

  const handleTryAgain = useCallback(() => refetch && refetch(), [refetch]);

  const error = useMemo(
    () => (queryError ? getLocaleIdFromGraphqlError(queryError.graphQLErrors, queryError.networkError) : undefined),
    [queryError]
  );

  const handleSubmit = useCallback(
    (data: { finish: number | null }) => {
      setDrawerFinish(Number(data.finish));
      router.push('/project/supplier', '/project/supplier');
    },
    [router, setDrawerFinish]
  );

  return (
    <FinishTemplate
      data={data}
      loading={loading}
      error={error}
      handleTryAgain={handleTryAgain}
      onSubmit={handleSubmit}
      initialValue={{ finish: drawerFinish }}
    />
  );
};

export const getServerSideProps: GetServerSideProps<FinishContainerGetServerProps> = async (ctx) => {
  const { res, params, query } = ctx;

  const apolloClient = initializeApollo(undefined, ctx);

  let props: FinishContainerGetServerProps = {
    ...(params || {}),
    ...(query || {})
  };

  const { redirect } = await requiredAuthWithRedirectProp(ctx);
  if (redirect) {
    return {
      redirect
    };
  }

  const projectData = requiredProjectData(ctx);
  if (!projectData.drawerCollection) {
    return {
      props: {},
      redirect: {
        destination: '/project/collection',
        permanent: false
      }
    };
  }
  props = {
    ...props,
    ...projectData
  };

  try {
    await apolloClient.query({
      query: FINISH_BY_COLLECTION_QUERY,
      variables: { collectionId: projectData.drawerCollection }
    });
  } catch (err) {
    if (hasGraphqlUnauthorizedError(err)) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      };
    } else {
      // Do nothing for now. The client side will get the same error when trying to call the query
      logging.error(err, `Failed to load props for [FinishContainer]`, {
        params: ctx.params,
        query: ctx.query
      });
      res.statusCode = 500;
    }
  }

  return addApolloState(apolloClient, {
    props
  });
};

export default projectCreationDataHoc(FinishContainer);

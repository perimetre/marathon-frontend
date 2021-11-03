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
import { useGetFinishByCollectionLazyQuery } from '../../../apollo/generated/graphql';
import FinishTemplate from '../../../components/Templates/Project/Finish';
import { useCallback, useEffect, useMemo } from 'react';
import { getLocaleIdFromGraphqlError } from '../../../lib/apollo/exceptions';

type FinishContainerGetServerProps = ProjectCreationProviderProps;

type FinishContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const FinishContainer: NextPage<FinishContainerProps> = ({ drawerFinish, drawerCollection }) => {
  const { setDrawerFinish } = useProjectCreationContext();

  const router = useRouter();

  const [getFinish, { data, loading, error: queryError, refetch }] = useGetFinishByCollectionLazyQuery({
    notifyOnNetworkStatusChange: true,
    variables: {
      collectionId: Number(drawerCollection)
    }
  });

  useEffect(() => getFinish(), [getFinish]);

  const handleTryAgain = useCallback(() => refetch && refetch(), [refetch]);

  const error = useMemo(
    () => (queryError ? getLocaleIdFromGraphqlError(queryError.graphQLErrors, queryError.networkError) : undefined),
    [queryError]
  );

  const handleSubmit = useCallback(
    (data: { finish: number }) => {
      setDrawerFinish(data.finish);
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
  const apolloClient = initializeApollo();

  const projectData = requiredProjectData(ctx);

  if (!projectData.drawerCollection) {
    return {
      props: {},
      redirect: {
        destination: '/project/collection',
        permanent: true
      }
    };
  }

  const props: FinishContainerGetServerProps = {
    ...ctx?.query,
    ...ctx?.params,
    ...projectData
  };

  await apolloClient.query({
    query: FINISH_BY_COLLECTION_QUERY,
    variables: { collectionId: projectData.drawerCollection }
  });

  return addApolloState(apolloClient, {
    props
  });
};

export default projectCreationDataHoc(FinishContainer);

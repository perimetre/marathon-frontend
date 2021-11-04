import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import {
  projectCreationDataHoc,
  ProjectCreationProviderProps,
  requiredProjectData,
  useProjectCreationContext
} from '../../../components/Providers/ProjectCreationProvider';
import { addApolloState, initializeApollo } from '../../../lib/apollo';
import { COLLECTION_QUERY } from '../../../apollo/collection';
import { useGetCollectionsLazyQuery } from '../../../apollo/generated/graphql';
import CollectionTemplate from '../../../components/Templates/Project/Collection';
import { useCallback, useEffect, useMemo } from 'react';
import { getLocaleIdFromGraphqlError } from '../../../lib/apollo/exceptions';

type CollectionContainerGetServerProps = ProjectCreationProviderProps;

type CollectionContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const CollectionContainer: NextPage<CollectionContainerProps> = ({ drawerCollection }) => {
  const { setDrawerCollection } = useProjectCreationContext();

  const router = useRouter();

  const [getCollection, { data, loading, error: queryError, refetch }] = useGetCollectionsLazyQuery({
    notifyOnNetworkStatusChange: true
  });

  useEffect(() => getCollection(), [getCollection]);

  const handleTryAgain = useCallback(() => refetch && refetch(), [refetch]);

  const error = useMemo(
    () => (queryError ? getLocaleIdFromGraphqlError(queryError.graphQLErrors, queryError.networkError) : undefined),
    [queryError]
  );

  const handleSubmit = useCallback(
    (data: { collection: number | null }) => {
      setDrawerCollection(Number(data.collection));
      router.push('/project/finish', '/project/finish');
    },
    [setDrawerCollection, router]
  );

  return (
    <CollectionTemplate
      data={data}
      loading={loading}
      error={error}
      handleTryAgain={handleTryAgain}
      onSubmit={handleSubmit}
      initialValue={{ collection: drawerCollection }}
    />
  );
};

export const getServerSideProps: GetServerSideProps<CollectionContainerGetServerProps> = async (ctx) => {
  const apolloClient = initializeApollo();

  const projectData = requiredProjectData(ctx);

  if (!projectData.drawerType) {
    return {
      props: {},
      redirect: {
        destination: '/project/type',
        permanent: true
      }
    };
  }

  const props: CollectionContainerGetServerProps = {
    ...ctx?.query,
    ...ctx?.params,
    ...projectData
  };

  await apolloClient.query({ query: COLLECTION_QUERY });

  return addApolloState(apolloClient, {
    props
  });
};

export default projectCreationDataHoc(CollectionContainer);

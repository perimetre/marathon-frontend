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

const CollectionContainer: NextPage<CollectionContainerProps> = ({ drawerCollection, drawerType, drawerPegs }) => {
  const { setDrawerCollection, setDrawerPegs } = useProjectCreationContext();

  const router = useRouter();

  const [getCollection, { data, loading, error: queryError, refetch }] = useGetCollectionsLazyQuery({
    notifyOnNetworkStatusChange: true,
    variables: {
      typeId: Number(drawerType)
    }
  });

  useEffect(() => getCollection(), [getCollection]);

  const handleTryAgain = useCallback(() => refetch && refetch(), [refetch]);

  const error = useMemo(
    () => (queryError ? getLocaleIdFromGraphqlError(queryError.graphQLErrors, queryError.networkError) : undefined),
    [queryError]
  );

  const handleSubmit = useCallback(
    (data: { collection: number | null; hasPegs?: boolean }) => {
      setDrawerCollection(Number(data.collection));
      setDrawerPegs(data.hasPegs);
      router.push('/project/finish', '/project/finish');
    },
    [setDrawerCollection, setDrawerPegs, router]
  );

  return (
    <CollectionTemplate
      data={data}
      loading={loading}
      error={error}
      handleTryAgain={handleTryAgain}
      onSubmit={handleSubmit}
      displayPegs={data?.type?.hasPegs}
      initialValue={{ collection: drawerCollection, hasPegs: drawerPegs }}
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

  await apolloClient.query({
    query: COLLECTION_QUERY,
    variables: {
      typeId: projectData.drawerType
    }
  });

  return addApolloState(apolloClient, {
    props
  });
};

export default projectCreationDataHoc(CollectionContainer);

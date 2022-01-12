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
import { useGetCollectionsQuery, User } from '../../../apollo/generated/graphql';
import CollectionTemplate from '../../../components/Templates/Project/Collection';
import { useCallback, useMemo } from 'react';
import { getLocaleIdFromGraphqlError, hasGraphqlUnauthorizedError } from '../../../lib/apollo/exceptions';
import { requiredAuthWithRedirectProp } from '../../../utils/auth';
import logging from '../../../lib/logging';

type CollectionContainerGetServerProps = ProjectCreationProviderProps & { user?: User };

type CollectionContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const CollectionContainer: NextPage<CollectionContainerProps> = ({
  drawerCollection,
  drawerType,
  drawerPegs,
  user
}) => {
  const { setDrawerCollection, setDrawerPegs } = useProjectCreationContext();

  const router = useRouter();

  const {
    data,
    loading,
    error: queryError,
    refetch
  } = useGetCollectionsQuery({
    notifyOnNetworkStatusChange: true,
    variables: {
      typeId: Number(drawerType)
    }
  });

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
      user={user}
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
  const { res, params, query } = ctx;

  const apolloClient = initializeApollo(undefined, ctx);

  let props: CollectionContainerGetServerProps = {
    ...(params || {}),
    ...(query || {})
  };

  const { auth, redirect } = await requiredAuthWithRedirectProp(ctx);
  if (redirect) {
    return {
      redirect
    };
  }

  if (auth?.user) {
    props.user = auth?.user;
  }

  const projectData = requiredProjectData(ctx);
  if (!projectData.drawerType) {
    return {
      props: {},
      redirect: {
        destination: '/project/type',
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
      query: COLLECTION_QUERY,
      variables: {
        typeId: projectData.drawerType
      }
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
      logging.error(err, `Failed to load props for [CollectionContainer]`, {
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

export default projectCreationDataHoc(CollectionContainer);

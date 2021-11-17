import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import {
  projectCreationDataHoc,
  ProjectCreationProviderProps,
  requiredProjectData,
  useProjectCreationContext
} from '../../../components/Providers/ProjectCreationProvider';
import { addApolloState, initializeApollo } from '../../../lib/apollo';
import { TYPE_QUERY } from '../../../apollo/type';
import { useGetTypeQuery } from '../../../apollo/generated/graphql';
import TypeTemplate from '../../../components/Templates/Project/Type';
import { useCallback, useMemo } from 'react';
import { getLocaleIdFromGraphqlError, hasGraphqlUnauthorizedError } from '../../../lib/apollo/exceptions';
import { requiredAuthWithRedirectProp } from '../../../utils/auth';
import logging from '../../../lib/logging';

type TypeContainerGetServerProps = ProjectCreationProviderProps;

type TypeContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const TypeContainer: NextPage<TypeContainerProps> = ({ drawerType }) => {
  const { setDrawerType, setDrawerPegs } = useProjectCreationContext();

  const router = useRouter();

  const {
    data,
    loading,
    error: queryError,
    refetch
  } = useGetTypeQuery({
    notifyOnNetworkStatusChange: true
  });

  const handleTryAgain = useCallback(() => refetch && refetch(), [refetch]);

  const error = useMemo(
    () => (queryError ? getLocaleIdFromGraphqlError(queryError.graphQLErrors, queryError.networkError) : undefined),
    [queryError]
  );

  const handleSubmit = useCallback(
    (data: { type: number | null }) => {
      setDrawerType(Number(data.type));
      setDrawerPegs(undefined);
      router.push('/project/collection', '/project/collection');
    },
    [router, setDrawerType, setDrawerPegs]
  );

  return (
    <TypeTemplate
      data={data}
      loading={loading}
      error={error}
      handleTryAgain={handleTryAgain}
      onSubmit={handleSubmit}
      initialValue={{ type: drawerType }}
    />
  );
};

export const getServerSideProps: GetServerSideProps<TypeContainerGetServerProps> = async (ctx) => {
  const { res, params, query } = ctx;

  const apolloClient = initializeApollo(undefined, ctx);

  let props: TypeContainerGetServerProps = {
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
  if (!projectData.drawerTitle) {
    return {
      redirect: {
        destination: '/projects',
        permanent: false
      }
    };
  }
  props = {
    ...props,
    ...projectData
  };

  try {
    await apolloClient.query({ query: TYPE_QUERY });
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
      logging.error(err, `Failed to load props for [TypeContainer]`, {
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

export default projectCreationDataHoc(TypeContainer);

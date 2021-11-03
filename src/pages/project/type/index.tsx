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
import { useGetTypeLazyQuery } from '../../../apollo/generated/graphql';
import TypeTemplate from '../../../components/Templates/Project/Type';
import { useCallback, useMemo, useEffect } from 'react';
import { getLocaleIdFromGraphqlError } from '../../../lib/apollo/exceptions';

type TypeContainerGetServerProps = ProjectCreationProviderProps;

type TypeContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const TypeContainer: NextPage<TypeContainerProps> = ({ drawerType }) => {
  const { setDrawerType } = useProjectCreationContext();

  const router = useRouter();

  const [getType, { data, loading, error: queryError, refetch }] = useGetTypeLazyQuery({
    notifyOnNetworkStatusChange: true
  });

  useEffect(() => getType(), [getType]);

  const handleTryAgain = useCallback(() => refetch && refetch(), [refetch]);

  const error = useMemo(
    () => (queryError ? getLocaleIdFromGraphqlError(queryError.graphQLErrors, queryError.networkError) : undefined),
    [queryError]
  );

  const handleSubmit = useCallback(
    (data: { type: number }) => {
      setDrawerType(data.type);
      router.push('/project/collection', '/project/collection');
    },
    [router, setDrawerType]
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
  const apolloClient = initializeApollo();

  const projectData = requiredProjectData(ctx);

  if (!projectData.drawerTitle) {
    // return {
    //   props: {},
    //   redirect: {
    //     destination: '/projects',
    //     permanent: true
    //   }
    // };
  }

  const props: TypeContainerGetServerProps = {
    ...ctx?.query,
    ...ctx?.params,
    ...projectData
  };

  await apolloClient.query({ query: TYPE_QUERY });

  return addApolloState(apolloClient, {
    props
  });
};

export default projectCreationDataHoc(TypeContainer);

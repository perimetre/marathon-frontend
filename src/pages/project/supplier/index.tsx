import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import {
  projectCreationDataHoc,
  ProjectCreationProviderProps,
  requiredProjectData,
  useProjectCreationContext
} from '../../../components/Providers/ProjectCreationProvider';
import { addApolloState, initializeApollo } from '../../../lib/apollo';
import { SUPPLIER_QUERY } from '../../../apollo/supplier';
import { useGetSlideSupplierByCollectionLazyQuery } from '../../../apollo/generated/graphql';
import SupplierTemplate from '../../../components/Templates/Project/Supplier';
import { useCallback, useEffect, useMemo } from 'react';
import { getLocaleIdFromGraphqlError } from '../../../lib/apollo/exceptions';

type SupplierContainerGetServerProps = ProjectCreationProviderProps;

type SupplierContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const SupplierContainer: NextPage<SupplierContainerProps> = ({ drawerCollection, drawerSlide }) => {
  const { setDrawerSlide } = useProjectCreationContext();

  const router = useRouter();

  const [getSupplier, { data, loading, error: queryError, refetch }] = useGetSlideSupplierByCollectionLazyQuery({
    notifyOnNetworkStatusChange: true,
    variables: {
      collectionId: Number(drawerCollection)
    }
  });

  useEffect(() => getSupplier(), [getSupplier]);

  const handleTryAgain = useCallback(() => refetch && refetch(), [refetch]);

  const error = useMemo(
    () => (queryError ? getLocaleIdFromGraphqlError(queryError.graphQLErrors, queryError.networkError) : undefined),
    [queryError]
  );

  const handleSubmit = useCallback(
    (data: { slide: number | null; model: string; depth: string }) => {
      setDrawerSlide({
        slide: Number(data.slide),
        depth: data.depth,
        model: data.model
      });
      router.push('/project/size-assistant', '/project/size-assistant');
    },
    [router, setDrawerSlide]
  );

  return (
    <SupplierTemplate
      data={data}
      loading={loading}
      error={error}
      handleTryAgain={handleTryAgain}
      onSubmit={handleSubmit}
      initialValue={{ slide: drawerSlide?.slide, model: drawerSlide?.model, depth: drawerSlide?.depth }}
    />
  );
};

export const getServerSideProps: GetServerSideProps<SupplierContainerGetServerProps> = async (ctx) => {
  const apolloClient = initializeApollo();

  const projectData = requiredProjectData(ctx);

  if (!projectData.drawerFinish) {
    return {
      props: {},
      redirect: {
        destination: '/project/finish',
        permanent: true
      }
    };
  }

  const props: SupplierContainerGetServerProps = {
    ...ctx?.query,
    ...ctx?.params,
    ...projectData
  };

  await apolloClient.query({ query: SUPPLIER_QUERY, variables: { collectionId: projectData.drawerCollection } });

  return addApolloState(apolloClient, {
    props
  });
};

export default projectCreationDataHoc(SupplierContainer);

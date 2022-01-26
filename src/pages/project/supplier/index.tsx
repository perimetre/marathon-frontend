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
import { useGetSlideSupplierByCollectionQuery } from '../../../apollo/generated/graphql';
import SupplierTemplate from '../../../components/Templates/Project/Supplier';
import { useCallback, useMemo } from 'react';
import { getLocaleIdFromGraphqlError, hasGraphqlUnauthorizedError } from '../../../lib/apollo/exceptions';
import { requiredAuthWithRedirectProp } from '../../../utils/auth';
import logging from '../../../lib/logging';

type SupplierContainerGetServerProps = ProjectCreationProviderProps;

type SupplierContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const SupplierContainer: NextPage<SupplierContainerProps> = ({ drawerCollection, drawerSlide }) => {
  const { setDrawerSlide } = useProjectCreationContext();

  const router = useRouter();

  const {
    data,
    loading,
    error: queryError,
    refetch
  } = useGetSlideSupplierByCollectionQuery({
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
    (data: { supplier: number | null; slide: string; depth: string }) => {
      setDrawerSlide({
        supplier: Number(data.supplier),
        depth: data.depth,
        slide: data.slide
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
      initialValue={{ supplier: drawerSlide?.supplier, slide: drawerSlide?.slide, depth: drawerSlide?.depth }}
    />
  );
};

export const getServerSideProps: GetServerSideProps<SupplierContainerGetServerProps> = async (ctx) => {
  const { res, params, query } = ctx;

  const apolloClient = initializeApollo(undefined, ctx);

  let props: SupplierContainerGetServerProps = {
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
  if (!projectData.drawerFinish) {
    return {
      props: {},
      redirect: {
        destination: '/project/finish',
        permanent: false
      }
    };
  }
  props = {
    ...props,
    ...projectData
  };

  try {
    await apolloClient.query({ query: SUPPLIER_QUERY, variables: { collectionId: projectData.drawerCollection } });
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
      logging.error(err, `Failed to load props for [SupplierContainer]`, {
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

export default projectCreationDataHoc(SupplierContainer);

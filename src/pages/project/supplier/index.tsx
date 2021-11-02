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
import { useCallback } from 'react';

type SupplierContainerGetServerProps = ProjectCreationProviderProps;

type SupplierContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const SupplierContainer: NextPage<SupplierContainerProps> = ({ drawerCollection, drawerSlide }) => {
  const { setDrawerSlide } = useProjectCreationContext();

  const router = useRouter();

  const { data } = useGetSlideSupplierByCollectionQuery({
    variables: {
      collectionId: Number(drawerCollection)
    }
  });

  const handleSubmit = useCallback(
    (data: { slide: number; model: number; depth: number }) => {
      setDrawerSlide(data);
      router.push('/project/size-assistant', '/project/size-assistant');
    },
    [router, setDrawerSlide]
  );

  return (
    <SupplierTemplate
      data={data}
      onSubmit={handleSubmit}
      initialValue={{ slide: drawerSlide?.slide, model: drawerSlide?.model, depth: drawerSlide?.model }}
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

import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { DefaultLayout } from '../../../components/Layouts/Default';
import {
  projectCreationDataHoc,
  ProjectCreationProviderProps,
  requiredProjectData,
  useProjectCreationContext
} from '../../../components/Providers/ProjectCreationProvider';
import { addApolloState, initializeApollo } from '../../../lib/apollo';
import { SUPPLIER_QUERY } from '../../../apollo/supplier';
import { useGetSlideSupplierByCollectionQuery } from '../../../apollo/generated/graphql';
import { ProjectCreationTemplate, SupplierTemplate } from '../../../components/Templates';
import { Formik } from 'formik';
import { useCallback, useMemo } from 'react';
import * as yup from 'yup';

type SupplierContainerGetServerProps = ProjectCreationProviderProps;

type SupplierContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const SupplierContainer: NextPage<SupplierContainerProps> = ({ drawerCollection, drawerSlide }) => {
  const context = useProjectCreationContext();
  const router = useRouter();

  const { data } = useGetSlideSupplierByCollectionQuery({
    variables: {
      collectionId: Number(drawerCollection)
    }
  });

  const schema = useMemo(
    () =>
      yup.object().shape({
        supplier: yup.number().label('Supplier').required(),
        model: yup.string().label('Model').required(),
        depth: yup.string().label('Depth').required()
      }),
    []
  );

  const handleSubmit = useCallback(
    (data: { supplier: number; model: number; depth: number }) => {
      context.setDrawerSlide(data);
      router.push('/project/size-assistant', '/project/size-assistant');
    },
    [router, context]
  );

  return (
    <DefaultLayout>
      <Formik
        initialValues={{
          supplier: drawerSlide?.supplier || 0,
          depth: drawerSlide?.depth || 0,
          model: drawerSlide?.model || 0
        }}
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnMount
      >
        {({ submitForm, isValid }) => (
          <ProjectCreationTemplate
            step={4}
            title="What slides will be used?"
            disableNext={!isValid}
            handleNext={submitForm}
            handlePrev={() => router.push('/project/finish', '/project/finish')}
          >
            <SupplierTemplate data={data} />
          </ProjectCreationTemplate>
        )}
      </Formik>
    </DefaultLayout>
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

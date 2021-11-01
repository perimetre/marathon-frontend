import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { DefaultLayout } from '../../../components/Layouts/Default';
import { useProjectCreationContext } from '../../../components/Providers/ProjectCreationProvider';
import { addApolloState, initializeApollo } from '../../../lib/apollo';
import { SUPPLIER_QUERY } from '../../../apollo/supplier';
import { useGetSlideSupplierQuery } from '../../../apollo/generated/graphql';
import { ProjectCreationTemplate, SupplierTemplate } from '../../../components/Templates';
import { Formik } from 'formik';
import { useCallback, useEffect, useMemo } from 'react';
import * as yup from 'yup';

type SupplierContainerProps = InferGetStaticPropsType<typeof getStaticProps>;

const SupplierContainer: NextPage<SupplierContainerProps> = () => {
  const context = useProjectCreationContext();
  const router = useRouter();

  const { data } = useGetSlideSupplierQuery();

  useEffect(() => {
    if (!context.drawerFinish) {
      router.push('/project/finish', '/project/finish');
    }
  }, [router, context]);

  const schema = useMemo(
    () =>
      yup.object().shape({
        supplier: yup.string().label('Supplier').required(),
        model: yup.string().label('Model').required(),
        depth: yup.string().label('Depth').nullable()
      }),
    []
  );

  const handleSubmit = useCallback(
    (data: { supplier: string; model: string; depth: string }) => {
      context.setDrawerSlide(data);
      router.push('/project/size-assistant', '/project/size-assistant');
    },
    [router, context]
  );

  return (
    <DefaultLayout>
      <Formik
        initialValues={{
          supplier: context.drawerSlide?.supplier || '',
          depth: context.drawerSlide?.depth || '',
          model: context.drawerSlide?.model || ''
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

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({ query: SUPPLIER_QUERY });

  return addApolloState(apolloClient, {
    props: { test: true },
    revalidate: 1
  });
};

export default SupplierContainer;

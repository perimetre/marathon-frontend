import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { DefaultLayout } from '../../../components/Layouts/Default';
import { useProjectCreationContext } from '../../../components/Providers/ProjectCreationProvider';
import { addApolloState, initializeApollo } from '../../../lib/apollo';
import { FINISH_QUERY } from '../../../apollo/finish';
import { useGetFinishQuery } from '../../../apollo/generated/graphql';
import { ProjectCreationTemplate, FinishTemplate } from '../../../components/Templates';
import { useCallback, useEffect, useMemo } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';

type FinishContainerProps = InferGetStaticPropsType<typeof getStaticProps>;

const FinishContainer: NextPage<FinishContainerProps> = () => {
  const context = useProjectCreationContext();
  const router = useRouter();

  const { data } = useGetFinishQuery();

  useEffect(() => {
    if (!context.drawerCollection) {
      router.push('/project/collection', '/project/collection');
    }
  }, [router, context]);

  const schema = useMemo(
    () =>
      yup.object().shape({
        finish: yup.string().label('Finish').required()
      }),
    []
  );

  const handleSubmit = useCallback(
    (data: { finish: string }) => {
      context.setDrawerFinish(data.finish);
      router.push('/project/supplier', '/project/supplier');
    },
    [router, context]
  );

  return (
    <DefaultLayout>
      <Formik
        initialValues={{ finish: context.drawerFinish || '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnMount
      >
        {({ submitForm, isValid }) => (
          <ProjectCreationTemplate
            step={3}
            title="What type of finish would look the best?"
            disableNext={!isValid}
            handleNext={submitForm}
            handlePrev={() => router.push('/project/collection', '/project/collection')}
          >
            <FinishTemplate data={data} />
          </ProjectCreationTemplate>
        )}
      </Formik>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({ query: FINISH_QUERY });

  return addApolloState(apolloClient, {
    props: { test: true },
    revalidate: 1
  });
};

export default FinishContainer;

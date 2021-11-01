import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { DefaultLayout } from '../../../components/Layouts/Default';
import { useProjectCreationContext } from '../../../components/Providers/ProjectCreationProvider';
import { addApolloState, initializeApollo } from '../../../lib/apollo';
import { ProjectCreationTemplate, SizeAssistantTemplate } from '../../../components/Templates';
import { Formik } from 'formik';
import { useCallback, useEffect, useMemo } from 'react';
import * as yup from 'yup';

type SizeAssistantContainerProps = InferGetStaticPropsType<typeof getStaticProps>;

const SizeAssistantContainer: NextPage<SizeAssistantContainerProps> = () => {
  const context = useProjectCreationContext();
  const router = useRouter();

  useEffect(() => {
    if (!context.drawerFinish) {
      router.push('/project/finish', '/project/finish');
    }
  }, [router, context]);

  const schema = useMemo(
    () =>
      yup.object().shape({
        thickness: yup.string().label('Thickness').required(),
        weight: yup.string().label('Weight').required()
      }),
    []
  );

  const handleSubmit = useCallback(
    (data: { thickness: string; weight: string }) => {
      context.setDrawerSize(data);
    },
    [context]
  );

  return (
    <DefaultLayout>
      <Formik
        initialValues={{
          thickness: context.drawerSize?.thickness || '',
          weight: context.drawerSize?.weight || ''
        }}
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnMount
      >
        {({ submitForm, isValid }) => (
          <ProjectCreationTemplate
            step={5}
            title="Starting measurement for this drawer"
            disableNext={!isValid}
            handlePrev={() => router.push('/project/supplier', '/project/supplier')}
            handleNext={submitForm}
          >
            <SizeAssistantTemplate unit={context.unit} />
          </ProjectCreationTemplate>
        )}
      </Formik>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  return addApolloState(apolloClient, {
    props: { test: true },
    revalidate: 1
  });
};

export default SizeAssistantContainer;

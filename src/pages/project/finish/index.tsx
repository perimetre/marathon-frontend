import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import {
  projectCreationDataHoc,
  ProjectCreationProviderProps,
  requiredProjectData,
  useProjectCreationContext
} from '../../../components/Providers/ProjectCreationProvider';
import { addApolloState, initializeApollo } from '../../../lib/apollo';
import { FINISH_QUERY } from '../../../apollo/finish';
import { useGetFinishQuery } from '../../../apollo/generated/graphql';
import { useCallback, useMemo } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { ProjectCreationTemplate } from '../../../components/Templates/ProjectCreation';
import { FinishTemplate } from '../../../components/Templates/Project';

type FinishContainerGetServerProps = ProjectCreationProviderProps;

type FinishContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const FinishContainer: NextPage<FinishContainerProps> = ({ drawerFinish }) => {
  const context = useProjectCreationContext();
  const router = useRouter();

  const { data } = useGetFinishQuery();

  const schema = useMemo(
    () =>
      yup.object().shape({
        finish: yup.string().label('Finish').required()
      }),
    []
  );

  const handleSubmit = useCallback(
    (data: { finish: number }) => {
      context.setDrawerFinish(data.finish);
      router.push('/project/supplier', '/project/supplier');
    },
    [router, context]
  );

  return (
    <Formik
      initialValues={{ finish: drawerFinish || 0 }}
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
  );
};

export const getServerSideProps: GetServerSideProps<FinishContainerGetServerProps> = async (ctx) => {
  const apolloClient = initializeApollo();

  const projectData = requiredProjectData(ctx);

  if (!projectData.drawerCollection) {
    return {
      props: {},
      redirect: {
        destination: '/project/collection',
        permanent: true
      }
    };
  }

  const props: FinishContainerGetServerProps = {
    ...ctx?.query,
    ...ctx?.params,
    ...projectData
  };

  await apolloClient.query({ query: FINISH_QUERY });

  return addApolloState(apolloClient, {
    props
  });
};

export default projectCreationDataHoc(FinishContainer);

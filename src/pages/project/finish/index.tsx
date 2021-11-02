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
import { FINISH_QUERY } from '../../../apollo/finish';
import { useGetFinishQuery } from '../../../apollo/generated/graphql';
import ProjectCreationTemplate from '../../../components/Templates/ProjectCreation';
import FinishTemplate from '../../../components/Templates/Project/Finish';
import { useCallback, useMemo } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useIntl } from 'react-intl';

type FinishContainerGetServerProps = ProjectCreationProviderProps;

type FinishContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const FinishContainer: NextPage<FinishContainerProps> = ({ drawerFinish }) => {
  const { setDrawerFinish } = useProjectCreationContext();
  const router = useRouter();

  const intl = useIntl();

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
      setDrawerFinish(data.finish);
      router.push('/project/supplier', '/project/supplier');
    },
    [router, setDrawerFinish]
  );

  return (
    <DefaultLayout>
      <Formik
        initialValues={{ finish: drawerFinish || 0 }}
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnMount
      >
        {({ submitForm, isValid }) => (
          <ProjectCreationTemplate
            step={3}
            title={intl.formatMessage({ id: 'project.finishTitle' })}
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

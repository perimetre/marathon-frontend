import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import {
  projectCreationDataHoc,
  ProjectCreationProviderProps,
  requiredProjectData,
  useProjectCreationContext
} from '../../../components/Providers/ProjectCreationProvider';
import { addApolloState, initializeApollo } from '../../../lib/apollo';
import { Formik } from 'formik';
import { useCallback, useMemo } from 'react';
import * as yup from 'yup';
import { ProjectCreationTemplate } from '../../../components/Templates/ProjectCreation';
import { SizeAssistantTemplate } from '../../../components/Templates/Project';

type SizeAssistantContainerGetServerProps = ProjectCreationProviderProps;

type SizeAssistantContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const SizeAssistantContainer: NextPage<SizeAssistantContainerProps> = ({ drawerSize }) => {
  const context = useProjectCreationContext();
  const router = useRouter();

  const schema = useMemo(
    () =>
      yup.object().shape({
        thickness: yup.number().min(1).label('Thickness').required(),
        weight: yup.number().min(1).label('Weight').required()
      }),
    []
  );

  const handleSubmit = useCallback(
    (data: { thickness: number; weight: number }) => {
      context.setDrawerSize(data);
    },
    [context]
  );

  return (
    <Formik
      initialValues={{
        thickness: drawerSize?.thickness || 0,
        weight: drawerSize?.weight || 0
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
  );
};

export const getServerSideProps: GetServerSideProps<SizeAssistantContainerGetServerProps> = async (ctx) => {
  const apolloClient = initializeApollo();

  const projectData = requiredProjectData(ctx);

  if (!projectData.drawerSlide) {
    return {
      props: {},
      redirect: {
        destination: '/project/supplier',
        permanent: true
      }
    };
  }

  const props: SizeAssistantContainerGetServerProps = {
    ...ctx?.query,
    ...ctx?.params,
    ...projectData
  };

  return addApolloState(apolloClient, {
    props
  });
};

export default projectCreationDataHoc(SizeAssistantContainer);

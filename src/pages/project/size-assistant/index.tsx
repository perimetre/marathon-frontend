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
import ProjectCreationTemplate from '../../../components/Templates/ProjectCreation';
import SizeAssistantTemplate from '../../../components/Templates/Project/SizeAssistant';
import { Formik } from 'formik';
import { useCallback, useMemo } from 'react';
import * as yup from 'yup';
import { useCreateProjectMutation } from '../../../apollo/generated/graphql';
import { slugify } from '../../../utils/string';
import { useIntl } from 'react-intl';

type SizeAssistantContainerGetServerProps = ProjectCreationProviderProps;

type SizeAssistantContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const SizeAssistantContainer: NextPage<SizeAssistantContainerProps> = ({
  drawerSize,
  drawerType,
  drawerFinish,
  drawerSlide,
  drawerTitle,
  drawerCollection
}) => {
  const { clear, unit, setDrawerSize } = useProjectCreationContext();
  const router = useRouter();

  const intl = useIntl();

  const [doCreateProject, { loading }] = useCreateProjectMutation();

  const schema = useMemo(
    () =>
      yup.object().shape({
        gable: yup.number().min(1).label('Thickness').required(),
        width: yup.number().min(1).label('Weight').required()
      }),
    []
  );

  const handleSubmit = useCallback(
    async (data: { gable: number; width: number }) => {
      setDrawerSize(data);

      await doCreateProject({
        variables: {
          data: {
            slug: slugify(drawerTitle),
            title: drawerTitle as string,
            gable: data.gable,
            width: data.width,
            type: {
              connect: {
                id: Number(drawerType)
              }
            },
            finish: {
              connect: {
                id: Number(drawerFinish)
              }
            },
            collection: {
              connect: {
                id: Number(drawerCollection)
              }
            },
            slideDepth: {
              connect: {
                id: Number(drawerSlide?.depth)
              }
            },
            slide: {
              connect: {
                id: Number(drawerSlide?.slide)
              }
            }
          }
        }
      });

      clear();

      router.push('/projects', '/projects');
    },
    [
      clear,
      doCreateProject,
      drawerCollection,
      drawerFinish,
      drawerSlide?.depth,
      drawerSlide?.slide,
      drawerTitle,
      drawerType,
      router,
      setDrawerSize
    ]
  );

  return (
    <DefaultLayout>
      <Formik
        initialValues={{
          gable: drawerSize?.gable || 0,
          width: drawerSize?.width || 0
        }}
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnMount
      >
        {({ submitForm, isValid }) => (
          <ProjectCreationTemplate
            step={5}
            title={intl.formatMessage({ id: 'project.sizeAssistantTitle' })}
            disableNext={!isValid}
            loading={loading}
            handlePrev={() => router.push('/project/supplier', '/project/supplier')}
            handleNext={submitForm}
          >
            <SizeAssistantTemplate unit={unit} />
          </ProjectCreationTemplate>
        )}
      </Formik>
    </DefaultLayout>
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

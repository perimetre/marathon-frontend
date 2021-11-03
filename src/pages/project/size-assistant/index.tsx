import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import {
  projectCreationDataHoc,
  ProjectCreationProviderProps,
  requiredProjectData,
  useProjectCreationContext
} from '../../../components/Providers/ProjectCreationProvider';
import { addApolloState, initializeApollo } from '../../../lib/apollo';
import SizeAssistantTemplate from '../../../components/Templates/Project/SizeAssistant';
import { useCallback } from 'react';
import { useCreateProjectMutation } from '../../../apollo/generated/graphql';
import { slugify } from '../../../utils/string';
import { convertInToMm } from '../../../utils/unit/conversion';

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

  const [doCreateProject, { loading }] = useCreateProjectMutation();

  const handleSubmit = useCallback(
    async (data: { gable: number | null; width: number | null }) => {
      setDrawerSize({
        gable: Number(data.gable),
        width: Number(data.width)
      });

      await doCreateProject({
        variables: {
          data: {
            slug: slugify(drawerTitle),
            title: drawerTitle as string,
            gable: Number(data.gable),
            width: Number(data.width),
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

  const GABLE_DATA = [
    {
      display: '5/8"',
      value: convertInToMm('0', '5', '8')
    },
    {
      display: '11/16"',
      value: convertInToMm('0', '11', '16')
    },
    {
      display: '18mm',
      value: '18'
    },
    {
      display: '3/4"',
      value: convertInToMm('0', '3', '4')
    }
  ];

  return (
    <SizeAssistantTemplate
      unit={unit}
      gable={GABLE_DATA}
      loading={loading}
      onSubmit={handleSubmit}
      initialValue={{ gable: drawerSize?.gable, width: drawerSize?.width }}
    />
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

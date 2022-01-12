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
import { useCallback, useMemo } from 'react';
import { useCreateProjectMutation } from '../../../apollo/generated/graphql';
import { slugify } from '../../../utils/string';
import { convertInToMm, convertInToMmFormatted } from '../../../utils/conversion';
import { requiredAuthWithRedirectProp } from '../../../utils/auth';
import { getLocaleIdFromGraphqlError } from '../../../lib/apollo/exceptions';
import logging from '../../../lib/logging';

type SizeAssistantContainerGetServerProps = ProjectCreationProviderProps & { userId?: number };

type SizeAssistantContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const SizeAssistantContainer: NextPage<SizeAssistantContainerProps> = ({
  userId,
  drawerSize,
  drawerType,
  drawerFinish,
  drawerSlide,
  drawerTitle,
  drawerCollection,
  drawerPegs
}) => {
  const { clear, unit, setDrawerSize } = useProjectCreationContext();
  const router = useRouter();

  const [doCreateProject, { loading, error: mutationError }] = useCreateProjectMutation();

  const handleSubmit = useCallback(
    async (data: { gable?: string; cabinetWidth?: string }) => {
      try {
        setDrawerSize({
          gable: data.gable,
          cabinetWidth: data.cabinetWidth
        });

        const slug = slugify(drawerTitle);

        const response = await doCreateProject({
          variables: {
            data: {
              slug,
              hasPegs: drawerPegs,
              user: {
                connect: {
                  id: userId
                }
              },
              title: drawerTitle as string,
              gable: Number(data.gable),
              cabinetWidth:
                unit === 'mm' ? Number(data.cabinetWidth) : Number(convertInToMmFormatted(data.cabinetWidth as string)),
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

        if (!response.errors && response.data?.createOneProject.id) {
          clear();
          router.push('/project/[slug]/planner', `/project/${response.data.createOneProject.slug}/planner`);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        logging.error(err, 'Error creating project:', { data });
      }
    },
    [
      unit,
      clear,
      userId,
      doCreateProject,
      drawerCollection,
      drawerFinish,
      drawerSlide,
      drawerTitle,
      drawerType,
      router,
      setDrawerSize,
      drawerPegs
    ]
  );

  const GABLE_DATA = useMemo(
    () => [
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
    ],
    []
  );

  const error = useMemo(
    () =>
      mutationError ? getLocaleIdFromGraphqlError(mutationError.graphQLErrors, mutationError.networkError) : undefined,
    [mutationError]
  );

  return (
    <SizeAssistantTemplate
      unit={unit}
      error={error}
      gable={GABLE_DATA}
      loading={loading}
      onSubmit={handleSubmit}
      initialValue={{ gable: drawerSize?.gable, cabinetWidth: drawerSize?.cabinetWidth }}
    />
  );
};

export const getServerSideProps: GetServerSideProps<SizeAssistantContainerGetServerProps> = async (ctx) => {
  const { params, query } = ctx;

  const apolloClient = initializeApollo(undefined, ctx);

  let props: SizeAssistantContainerGetServerProps = {
    ...(params || {}),
    ...(query || {})
  };

  const { auth, redirect } = await requiredAuthWithRedirectProp(ctx);
  if (redirect) {
    return {
      redirect
    };
  }

  const projectData = requiredProjectData(ctx);
  if (!projectData.drawerSlide) {
    return {
      props: {},
      redirect: {
        destination: '/project/supplier',
        permanent: false
      }
    };
  }
  props = {
    ...props,
    ...projectData,
    userId: auth?.userId
  };

  return addApolloState(apolloClient, {
    props
  });
};

export default projectCreationDataHoc(SizeAssistantContainer);

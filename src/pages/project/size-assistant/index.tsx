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
import { convertInToMm, convertInToMmFormatted } from '../../../utils/unit/conversion';
import { requiredAuthWithRedirectProp } from '../../../utils/authUtils';
import { getLocaleIdFromGraphqlError } from '../../../lib/apollo/exceptions';

type SizeAssistantContainerGetServerProps = ProjectCreationProviderProps & { userId?: number };

type SizeAssistantContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const SizeAssistantContainer: NextPage<SizeAssistantContainerProps> = ({
  userId,
  drawerSize,
  drawerType,
  drawerFinish,
  drawerSlide,
  drawerTitle,
  drawerCollection
}) => {
  const { clear, unit, setDrawerSize } = useProjectCreationContext();
  const router = useRouter();

  const [doCreateProject, { loading, error: mutationError }] = useCreateProjectMutation();

  const handleSubmit = useCallback(
    async (data: { gable?: string; width?: string }) => {
      setDrawerSize({
        gable: data.gable,
        width: data.width
      });

      const slug = slugify(drawerTitle);

      await doCreateProject({
        variables: {
          data: {
            slug,
            user: {
              connect: {
                id: userId
              }
            },
            title: drawerTitle as string,
            gable: Number(data.gable),
            width: unit === 'mm' ? Number(data.width) : Number(convertInToMmFormatted(data.width as string)),
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

      router.push('/project/[slug]/planner', `/project/${slug}/planner`);
    },
    [
      unit,
      clear,
      userId,
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
      initialValue={{ gable: drawerSize?.gable, width: drawerSize?.width }}
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
        permanent: true
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

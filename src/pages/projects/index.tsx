import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useCallback, useMemo } from 'react';
import { useProjectsQuery } from '../../apollo/generated/graphql';
import { PROJECTS_QUERY } from '../../apollo/projects';
import {
  projectCreationDataHoc,
  ProjectCreationProviderProps,
  requiredProjectData
} from '../../components/Providers/ProjectCreationProvider';
import ProjectsTemplate from '../../components/Templates/Projects';
import { addApolloState, initializeApollo } from '../../lib/apollo';
import { getLocaleIdFromGraphqlError, hasGraphqlUnauthorizedError } from '../../lib/apollo/exceptions';
import { requiredAuthWithRedirectProp } from '../../utils/auth';
import logging from '../../lib/logging';

type ProjectsContainerGetServerProps = ProjectCreationProviderProps & { userId?: number };

type ProjectsContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const ProjectsContainer: NextPage<ProjectsContainerProps> = ({ userId }) => {
  const {
    data,
    error: queryError,
    refetch,
    loading
  } = useProjectsQuery({
    notifyOnNetworkStatusChange: true,
    variables: {
      userId: Number(userId)
    }
  });

  const handleTryAgain = useCallback(() => refetch && refetch(), [refetch]);

  const error = useMemo(
    () => (queryError ? getLocaleIdFromGraphqlError(queryError.graphQLErrors, queryError.networkError) : undefined),
    [queryError]
  );

  return <ProjectsTemplate data={data} loading={loading} error={error} handleTryAgain={handleTryAgain} />;
};

export const getServerSideProps: GetServerSideProps<ProjectsContainerGetServerProps> = async (ctx) => {
  const { res, params, query } = ctx;

  const apolloClient = initializeApollo(undefined, ctx);

  let props: ProjectsContainerGetServerProps = {
    ...(params || {}),
    ...(query || {})
  };

  const { auth, redirect } = await requiredAuthWithRedirectProp(ctx);
  if (redirect) {
    return {
      redirect
    };
  }

  props.userId = auth?.userId;

  try {
    await apolloClient.query({
      query: PROJECTS_QUERY,
      variables: {
        userId: auth?.userId
      }
    });
  } catch (err) {
    if (hasGraphqlUnauthorizedError(err)) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      };
    } else {
      // Do nothing for now. The client side will get the same error when trying to call the query
      logging.error(err, `Failed to load props for [ProjectsContainer]`, {
        params: ctx.params,
        query: ctx.query
      });
      res.statusCode = 500;
    }
  }

  const projectData = requiredProjectData(ctx);
  props = {
    ...props,
    ...projectData
  };

  return addApolloState(apolloClient, {
    props
  });
};

export default projectCreationDataHoc(ProjectsContainer);

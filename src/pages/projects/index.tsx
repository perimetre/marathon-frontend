import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useCallback, useEffect, useMemo } from 'react';
import { useProjectsLazyQuery } from '../../apollo/generated/graphql';
import { PROJECTS_QUERY } from '../../apollo/projects';
import { projectCreationDataHoc } from '../../components/Providers/ProjectCreationProvider';
import ProjectsTemplate from '../../components/Templates/Projects';
import { addApolloState, initializeApollo } from '../../lib/apollo';
import { getLocaleIdFromGraphqlError } from '../../lib/apollo/exceptions';

type ProjectsContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const ProjectsContainer: NextPage<ProjectsContainerProps> = () => {
  const [getProjects, { data, error: queryError, refetch, loading }] = useProjectsLazyQuery({
    notifyOnNetworkStatusChange: true
  });

  const fetchData = useCallback(() => {
    getProjects();
  }, [getProjects]);

  const handleTryAgain = useCallback(() => refetch && refetch(), [refetch]);

  useEffect(() => fetchData(), [fetchData]);

  const error = useMemo(
    () => (queryError ? getLocaleIdFromGraphqlError(queryError.graphQLErrors, queryError.networkError) : undefined),
    [queryError]
  );

  return <ProjectsTemplate data={data} loading={loading} error={error} handleTryAgain={handleTryAgain} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({ query: PROJECTS_QUERY });

  const props = {
    ...ctx?.query,
    ...ctx?.params
  };

  return addApolloState(apolloClient, {
    props
  });
};

export default projectCreationDataHoc(ProjectsContainer);

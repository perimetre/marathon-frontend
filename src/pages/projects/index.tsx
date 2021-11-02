import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { useProjectCreationContext } from '../../components/Providers/ProjectCreationProvider';
import { ProjectsTemplate } from '../../components/Templates/Projects';
import { addApolloState, initializeApollo } from '../../lib/apollo';

const Projects: NextPage = () => {
  const context = useProjectCreationContext();
  return (
    <ProjectsTemplate
      onChange={(description) => context.setDrawerDescription(description)}
      description={context.drawerDescription}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1
  });
};

export default Projects;

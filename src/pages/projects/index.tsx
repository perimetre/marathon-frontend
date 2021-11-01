import type { GetStaticProps, NextPage } from 'next';
import { DefaultLayout } from '../../components/Layouts/Default';
import { useProjectCreationContext } from '../../components/Providers/ProjectCreationProvider';
import { ProjectsTemplate } from '../../components/Templates';
import { addApolloState, initializeApollo } from '../../lib/apollo';

const Projects: NextPage = () => {
  const context = useProjectCreationContext();
  return (
    <DefaultLayout>
      <ProjectsTemplate
        onChange={(description) => context.setDrawerDescription(description)}
        description={context.drawerDescription}
      />
    </DefaultLayout>
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

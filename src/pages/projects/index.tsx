import type { NextPage } from 'next';
import { DefaultLayout } from '../../components/Layouts/Default';
import { ProjectsTemplate } from '../../components/Templates';

const Projects: NextPage = () => {
  return (
    <DefaultLayout>
      <ProjectsTemplate />
    </DefaultLayout>
  );
};

export default Projects;

import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { DefaultLayout } from '../../../components/Layouts/Default';
import { useProjectCreationProvider } from '../../../components/Providers/ProjectCreationProvider';
import { addApolloState, initializeApollo } from '../../../lib/apollo';
import { ProjectCreationTemplate, SizeAssistantTemplate } from '../../../components/Templates';

type SizeAssistantContainerProps = InferGetStaticPropsType<typeof getStaticProps>;

const SizeAssistantContainer: NextPage<SizeAssistantContainerProps> = () => {
  const context = useProjectCreationProvider();
  const router = useRouter();
  return (
    <DefaultLayout>
      <ProjectCreationTemplate
        step={6}
        title="Starting measurement for this drawer"
        disableNext={!(context.drawerSize?.weight && context.drawerSize?.thickness)}
        handlePrev={() => router.push('/project/supplier', '/project/supplier')}
      >
        <SizeAssistantTemplate
          unit={context.unit}
          thickness={context.drawerSize?.thickness}
          weight={context.drawerSize?.weight}
          onChangeWeight={(value) => context.setDrawerSize({ weight: value })}
          onChangeThickness={(value) => context.setDrawerSize({ ...context.drawerSize, thickness: value })}
        />
      </ProjectCreationTemplate>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();
  return addApolloState(apolloClient, {
    props: { test: true },
    revalidate: 1
  });
};

export default SizeAssistantContainer;

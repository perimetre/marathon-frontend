import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { DefaultLayout } from '../../../components/Layouts/Default';
import { useAppContext } from '../../../components/Providers/AppProvider';
import { addApolloState, initializeApollo } from '../../../lib/apollo';
import { DescriptionTemplate, ProjectCreationTemplate } from '../../../components/Templates';

type TypeContainerProps = InferGetStaticPropsType<typeof getStaticProps>;

const TypeContainer: NextPage<TypeContainerProps> = () => {
  const context = useAppContext();
  const router = useRouter();
  return (
    <DefaultLayout>
      <ProjectCreationTemplate
        step={2}
        title="Describe the drawer"
        description="Where will this drawer be in the house?"
        disableNext={!context.drawerDescription}
        handleNext={() => router.push('/project/collection', '/project/collection')}
        handlePrev={() => router.push('/project/type', '/project/type')}
      >
        <DescriptionTemplate
          onChange={(description) => context.setDrawerDescription(description)}
          description={context.drawerDescription}
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

export default TypeContainer;

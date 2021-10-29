import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { DefaultLayout } from '../../../components/Layouts/Default';
import { useProjectCreationProvider } from '../../../components/Providers/ProjectCreationProvider';
import { addApolloState, initializeApollo } from '../../../lib/apollo';
import { TYPE_QUERY } from '../../../apollo/type';
import { useGetTypeQuery } from '../../../apollo/generated/graphql';
import { ProjectCreationTemplate, TypeTemplate } from '../../../components/Templates';

type TypeContainerProps = InferGetStaticPropsType<typeof getStaticProps>;

const TypeContainer: NextPage<TypeContainerProps> = () => {
  const context = useProjectCreationProvider();
  const router = useRouter();

  const { data } = useGetTypeQuery();

  return (
    <DefaultLayout>
      <ProjectCreationTemplate
        step={1}
        title="What kind of drawer will you be designing?"
        disablePrev
        disableNext={!context.drawerType}
        handleNext={() => router.push('/project/description', '/project/description')}
      >
        <TypeTemplate
          data={data}
          onSelectCard={(type) => context.setDrawerType(type)}
          selectedCard={context.drawerType}
        />
      </ProjectCreationTemplate>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({ query: TYPE_QUERY });

  return addApolloState(apolloClient, {
    props: { test: true },
    revalidate: 1
  });
};

export default TypeContainer;

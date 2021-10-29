import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { DefaultLayout } from '../../../components/Layouts/Default';
import { useAppContext } from '../../../components/Providers/AppProvider';
import { addApolloState, initializeApollo } from '../../../lib/apollo';
import { COLLECTION_QUERY } from '../../../apollo/collection';
import { useGetCollectionsQuery } from '../../../apollo/generated/graphql';
import { ProjectCreationTemplate, CollectionTemplate } from '../../../components/Templates';

type CollectionContainerProps = InferGetStaticPropsType<typeof getStaticProps>;

const CollectionContainer: NextPage<CollectionContainerProps> = () => {
  const context = useAppContext();
  const router = useRouter();

  const { data } = useGetCollectionsQuery();

  return (
    <DefaultLayout>
      <ProjectCreationTemplate
        step={3}
        title="Which collection would you like?"
        disableNext={!context.drawerCollection}
        handleNext={() => router.push('/project/finish', '/project/finish')}
        handlePrev={() => router.push('/project/description', '/project/description')}
      >
        <CollectionTemplate
          data={data}
          onSelectCard={(type) => context.setDrawerCollection(type)}
          selectedCard={context.drawerCollection}
        />
      </ProjectCreationTemplate>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({ query: COLLECTION_QUERY });

  return addApolloState(apolloClient, {
    props: { test: true },
    revalidate: 1
  });
};

export default CollectionContainer;

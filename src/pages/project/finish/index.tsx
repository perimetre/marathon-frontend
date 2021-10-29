import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { DefaultLayout } from '../../../components/Layouts/Default';
import { useAppContext } from '../../../components/Providers/AppProvider';
import { addApolloState, initializeApollo } from '../../../lib/apollo';
import { FINISH_QUERY } from '../../../apollo/finish';
import { useGetFinishQuery } from '../../../apollo/generated/graphql';
import { ProjectCreationTemplate, FinishTemplate } from '../../../components/Templates';

type FinishContainerProps = InferGetStaticPropsType<typeof getStaticProps>;

const FinishContainer: NextPage<FinishContainerProps> = () => {
  const context = useAppContext();
  const router = useRouter();

  const { data } = useGetFinishQuery();

  return (
    <DefaultLayout>
      <ProjectCreationTemplate
        step={4}
        title="What type of finish would look the best?"
        disableNext={!context.drawerFinish}
        handleNext={() => router.push('/project/supplier', '/project/supplier')}
        handlePrev={() => router.push('/project/collection', '/project/collection')}
      >
        <FinishTemplate
          data={data}
          onSelectCard={(type) => context.setDrawerFinish(type)}
          selectedCard={context.drawerFinish}
        />
      </ProjectCreationTemplate>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({ query: FINISH_QUERY });

  return addApolloState(apolloClient, {
    props: { test: true },
    revalidate: 1
  });
};

export default FinishContainer;

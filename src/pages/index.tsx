import type { GetStaticProps, NextPage } from 'next';
import { addApolloState, initializeApollo } from '../lib/apollo';
import HomeTemplate from '../components/Templates/Home';
import { DefaultLayout } from '../components/Layouts/Default';

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <HomeTemplate />
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

export default Home;

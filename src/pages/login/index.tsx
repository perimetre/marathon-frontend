import type { GetStaticProps, NextPage } from 'next';
import { addApolloState, initializeApollo } from '../../lib/apollo';
import LoginTemplate from '../../components/Templates/Login';
import { DefaultLayout } from '../../components/Layouts/Default';

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <LoginTemplate onSubmit={console.log} />
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

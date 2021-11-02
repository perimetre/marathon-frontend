import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import {
  projectCreationDataHoc,
  ProjectCreationProviderProps,
  requiredProjectData,
  useProjectCreationContext
} from '../../../components/Providers/ProjectCreationProvider';
import { addApolloState, initializeApollo } from '../../../lib/apollo';
import { FINISH_QUERY } from '../../../apollo/finish';
import { useGetFinishQuery } from '../../../apollo/generated/graphql';
import FinishTemplate from '../../../components/Templates/Project/Finish';
import { useCallback } from 'react';

type FinishContainerGetServerProps = ProjectCreationProviderProps;

type FinishContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const FinishContainer: NextPage<FinishContainerProps> = ({ drawerFinish }) => {
  const { setDrawerFinish } = useProjectCreationContext();

  const router = useRouter();

  const { data } = useGetFinishQuery();

  const handleSubmit = useCallback(
    (data: { finish: number }) => {
      setDrawerFinish(data.finish);
      router.push('/project/supplier', '/project/supplier');
    },
    [router, setDrawerFinish]
  );

  return <FinishTemplate data={data} onSubmit={handleSubmit} initialValue={{ finish: drawerFinish }} />;
};

export const getServerSideProps: GetServerSideProps<FinishContainerGetServerProps> = async (ctx) => {
  const apolloClient = initializeApollo();

  const projectData = requiredProjectData(ctx);

  if (!projectData.drawerCollection) {
    return {
      props: {},
      redirect: {
        destination: '/project/collection',
        permanent: true
      }
    };
  }

  const props: FinishContainerGetServerProps = {
    ...ctx?.query,
    ...ctx?.params,
    ...projectData
  };

  await apolloClient.query({ query: FINISH_QUERY });

  return addApolloState(apolloClient, {
    props
  });
};

export default projectCreationDataHoc(FinishContainer);

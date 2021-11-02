import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { DefaultLayout } from '../../../components/Layouts/Default';
import {
  projectCreationDataHoc,
  ProjectCreationProviderProps,
  requiredProjectData,
  useProjectCreationContext
} from '../../../components/Providers/ProjectCreationProvider';
import { addApolloState, initializeApollo } from '../../../lib/apollo';
import { COLLECTION_QUERY } from '../../../apollo/collection';
import { useGetCollectionsQuery } from '../../../apollo/generated/graphql';
import ProjectCreationTemplate from '../../../components/Templates/ProjectCreation';
import CollectionTemplate from '../../../components/Templates/Project/Collection';
import { useCallback, useMemo } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useIntl } from 'react-intl';

type CollectionContainerGetServerProps = ProjectCreationProviderProps;

type CollectionContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const CollectionContainer: NextPage<CollectionContainerProps> = ({ drawerCollection }) => {
  const { setDrawerCollection } = useProjectCreationContext();
  const router = useRouter();

  const intl = useIntl();

  const { data } = useGetCollectionsQuery();

  const schema = useMemo(
    () =>
      yup.object().shape({
        collection: yup.number().label('Collection').required()
      }),
    []
  );

  const handleSubmit = useCallback(
    (data: { collection: number }) => {
      setDrawerCollection(data.collection);
      router.push('/project/finish', '/project/finish');
    },
    [setDrawerCollection, router]
  );

  return (
    <DefaultLayout>
      <Formik
        initialValues={{ collection: drawerCollection || 0 }}
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnMount
      >
        {({ submitForm, isValid }) => (
          <ProjectCreationTemplate
            step={2}
            title={intl.formatMessage({ id: 'project.collectionTitle' })}
            disableNext={!isValid}
            handleNext={submitForm}
            handlePrev={() => router.push('/project/type', '/project/type')}
          >
            <CollectionTemplate data={data} />
          </ProjectCreationTemplate>
        )}
      </Formik>
    </DefaultLayout>
  );
};

export const getServerSideProps: GetServerSideProps<CollectionContainerGetServerProps> = async (ctx) => {
  const apolloClient = initializeApollo();

  const projectData = requiredProjectData(ctx);

  if (!projectData.drawerType) {
    return {
      props: {},
      redirect: {
        destination: '/project/type',
        permanent: true
      }
    };
  }

  const props: CollectionContainerGetServerProps = {
    ...ctx?.query,
    ...ctx?.params,
    ...projectData
  };

  await apolloClient.query({ query: COLLECTION_QUERY });

  return addApolloState(apolloClient, {
    props
  });
};

export default projectCreationDataHoc(CollectionContainer);

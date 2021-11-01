import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { DefaultLayout } from '../../../components/Layouts/Default';
import { useProjectCreationContext } from '../../../components/Providers/ProjectCreationProvider';
import { addApolloState, initializeApollo } from '../../../lib/apollo';
import { COLLECTION_QUERY } from '../../../apollo/collection';
import { useGetCollectionsQuery } from '../../../apollo/generated/graphql';
import { ProjectCreationTemplate, CollectionTemplate } from '../../../components/Templates';
import { useCallback, useEffect, useMemo } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

type CollectionContainerProps = InferGetStaticPropsType<typeof getStaticProps>;

const CollectionContainer: NextPage<CollectionContainerProps> = () => {
  const context = useProjectCreationContext();
  const router = useRouter();

  const { data } = useGetCollectionsQuery();

  useEffect(() => {
    if (!context.drawerType) {
      router.push('/project/type', '/project/type');
    }
  }, [router, context]);

  const schema = useMemo(
    () =>
      yup.object().shape({
        collection: yup.string().label('Collection').required()
      }),
    []
  );

  const handleSubmit = useCallback(
    (data: { collection: string }) => {
      context.setDrawerCollection(data.collection);
      router.push('/project/finish', '/project/finish');
    },
    [router, context]
  );

  return (
    <DefaultLayout>
      <Formik
        initialValues={{ collection: context.drawerCollection || '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnMount
      >
        {({ submitForm, isValid }) => (
          <ProjectCreationTemplate
            step={2}
            title="Which collection would you like?"
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

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({ query: COLLECTION_QUERY });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1
  });
};

export default CollectionContainer;

import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { DefaultLayout } from '../../../components/Layouts/Default';
import { useProjectCreationContext } from '../../../components/Providers/ProjectCreationProvider';
import { addApolloState, initializeApollo } from '../../../lib/apollo';
import { TYPE_QUERY } from '../../../apollo/type';
import { useGetTypeQuery } from '../../../apollo/generated/graphql';
import { ProjectCreationTemplate, TypeTemplate } from '../../../components/Templates';
import { Formik } from 'formik';
import { useCallback, useMemo } from 'react';
import * as yup from 'yup';

type TypeContainerProps = InferGetStaticPropsType<typeof getStaticProps>;

const TypeContainer: NextPage<TypeContainerProps> = () => {
  const context = useProjectCreationContext();
  const router = useRouter();

  const { data } = useGetTypeQuery();

  const schema = useMemo(
    () =>
      yup.object().shape({
        type: yup.string().label('Type').required()
      }),
    []
  );

  const handleSubmit = useCallback(
    (data: { type: string }) => {
      context.setDrawerType(data.type);
      router.push('/project/collection', '/project/collection');
    },
    [router, context]
  );

  return (
    <DefaultLayout>
      <Formik
        initialValues={{ type: context.drawerType || '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnMount
      >
        {({ submitForm, isValid }) => (
          <ProjectCreationTemplate
            step={1}
            title="What kind of drawer will you be designing?"
            disablePrev
            disableNext={!isValid}
            handleNext={submitForm}
          >
            <TypeTemplate data={data} />
          </ProjectCreationTemplate>
        )}
      </Formik>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({ query: TYPE_QUERY });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1
  });
};

export default TypeContainer;

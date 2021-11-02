import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import {
  projectCreationDataHoc,
  ProjectCreationProviderProps,
  requiredProjectData,
  useProjectCreationContext
} from '../../../components/Providers/ProjectCreationProvider';
import { addApolloState, initializeApollo } from '../../../lib/apollo';
import { TYPE_QUERY } from '../../../apollo/type';
import { useGetTypeQuery } from '../../../apollo/generated/graphql';
import { Formik } from 'formik';
import { useCallback, useMemo } from 'react';
import * as yup from 'yup';
import { ProjectCreationTemplate } from '../../../components/Templates/ProjectCreation';
import { TypeTemplate } from '../../../components/Templates/Project';

type TypeContainerGetServerProps = ProjectCreationProviderProps;

type TypeContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const TypeContainer: NextPage<TypeContainerProps> = ({ drawerType }) => {
  const context = useProjectCreationContext();
  const router = useRouter();

  const { data } = useGetTypeQuery();

  const schema = useMemo(
    () =>
      yup.object().shape({
        type: yup.number().label('Type').required()
      }),
    []
  );

  const handleSubmit = useCallback(
    (data: { type: number }) => {
      context.setDrawerType(data.type);
      router.push('/project/collection', '/project/collection');
    },
    [router, context]
  );

  return (
    <Formik initialValues={{ type: drawerType || 0 }} onSubmit={handleSubmit} validationSchema={schema} validateOnMount>
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
  );
};

export const getServerSideProps: GetServerSideProps<TypeContainerGetServerProps> = async (ctx) => {
  const apolloClient = initializeApollo();

  const projectData = requiredProjectData(ctx);

  const props: TypeContainerGetServerProps = {
    ...ctx?.query,
    ...ctx?.params,
    ...projectData
  };

  await apolloClient.query({ query: TYPE_QUERY });

  return addApolloState(apolloClient, {
    props
  });
};

export default projectCreationDataHoc(TypeContainer);

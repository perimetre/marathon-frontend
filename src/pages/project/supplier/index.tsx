import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { DefaultLayout } from '../../../components/Layouts/Default';
import { useAppContext } from '../../../components/Providers/AppProvider';
import { addApolloState, initializeApollo } from '../../../lib/apollo';
import { SUPPLIER_QUERY } from '../../../apollo/supplier';
import { useGetSlideSupplierQuery } from '../../../apollo/generated/graphql';
import { ProjectCreationTemplate, SupplierTemplate } from '../../../components/Templates';

type SupplierContainerProps = InferGetStaticPropsType<typeof getStaticProps>;

const SupplierContainer: NextPage<SupplierContainerProps> = () => {
  const context = useAppContext();
  const router = useRouter();

  const { data } = useGetSlideSupplierQuery();

  return (
    <DefaultLayout>
      <ProjectCreationTemplate
        step={5}
        title="What slides will be used?"
        disableNext={!(context.drawerSlide?.model && context.drawerSlide.supplier)}
        handleNext={() => router.push('/project/size-assistant', '/project/size-assistant')}
        handlePrev={() => router.push('/project/finish', '/project/finish')}
      >
        <SupplierTemplate
          data={data}
          onSelectSupplier={context.setDrawerSlide}
          selectedSupplier={context.drawerSlide}
        />
      </ProjectCreationTemplate>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({ query: SUPPLIER_QUERY });

  return addApolloState(apolloClient, {
    props: { test: true },
    revalidate: 1
  });
};

export default SupplierContainer;

import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { useIntl } from 'react-intl';
import { UnityPlayerProvider } from '../../../Providers/UnityPlayerProvider';
import AppLayout from '../../../Layouts/AppLayout';
import Badge from '../../../UI/Badge';
import { ShoppingCart } from 'react-feather';
import NavbarButton from '../../../UI/NavbarButton';
import Planner, { PlannerProps } from '../../../Elements/Planner';

type PlannerTemplateProps = PlannerProps;

const PlannerTemplate: React.FC<PlannerTemplateProps> = ({ slug, data, loading, error, handleTryAgain }) => {
  const intl = useIntl();

  return (
    <AppLayout
      appendRight={() => (
        <Link
          href={{
            pathname: '/project/[slug]/cart',
            query: { slug }
          }}
        >
          <a className="h-full">
            <NavbarButton
              icon={
                <Badge content="0">
                  <ShoppingCart />
                </Badge>
              }
            />
          </a>
        </Link>
      )}
    >
      <Head>
        <title>
          {`${intl.formatMessage({ id: 'build.title' })} | ${data?.project?.title} | ${intl.formatMessage({
            id: 'title'
          })}`}
        </title>
      </Head>
      {data?.project && (
        <UnityPlayerProvider project={data.project}>
          <Planner
            slug={slug}
            data={data}
            loading={loading}
            error={error}
            handleTryAgain={handleTryAgain}
            isSidebarOpen
          />
        </UnityPlayerProvider>
      )}
    </AppLayout>
  );
};

export default PlannerTemplate;

import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { useIntl } from 'react-intl';
import AppLayout from '../../../Layouts/AppLayout';
import Badge from '../../../UI/Badge';
import { ShoppingCart } from 'react-feather';
import NavbarButton from '../../../UI/NavbarButton';
import Planner, { PlannerProps } from '../../../Elements/Planner';
import { usePlannerContext } from '../../../Providers/PlannerProvider';

type PlannerTemplateProps = PlannerProps;

const PlannerTemplate: React.FC<PlannerTemplateProps> = ({ slug, data, loading, error, handleTryAgain }) => {
  const intl = useIntl();
  const { cartAmount } = usePlannerContext();

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
                <Badge content={cartAmount}>
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
      <Planner isSidebarOpen slug={slug} data={data} loading={loading} error={error} handleTryAgain={handleTryAgain} />
    </AppLayout>
  );
};

export default PlannerTemplate;

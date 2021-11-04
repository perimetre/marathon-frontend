import React from 'react';
import { CartDataFragment, CartQuery } from '../../../apollo/generated/graphql';
import AppLayout from '../../Layouts/AppLayout';
import Head from 'next/head';
import { FormattedMessage, useIntl } from 'react-intl';
import SkeletonImage from '../../UI/SkeletonImage';
import classNames from 'classnames';
import classnames from 'classnames';
import { Button } from '../../UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faFile } from '@fortawesome/free-solid-svg-icons';
import NavbarButton from '../../UI/NavbarButton';
import Link from 'next/link';

type CartProjectModulesProps = {
  projectModules: (CartDataFragment & { children?: CartDataFragment[] })[];
  isChildren?: boolean;
};

const CartProjectModules: React.FC<CartProjectModulesProps> = ({ projectModules, isChildren }) => {
  return (
    <>
      {projectModules.map((projectModule, i) => (
        <React.Fragment key={projectModule.id}>
          {(isChildren || i !== 0) && <hr className={classNames('col-span-12', { 'col-start-2': isChildren })} />}
          <div className={classNames('relative h-44 mui-border-radius col-span-2', { 'col-start-2': isChildren })}>
            {projectModule.module.thumbnailUrl && (
              <SkeletonImage
                src={projectModule.module.thumbnailUrl}
                alt={projectModule.module.partNumber}
                layout="fill"
                objectFit="contain"
              />
            )}
          </div>
          <div
            className={classNames(
              'flex flex-col items-stretch justify-center',
              isChildren ? 'col-span-8' : 'col-span-9'
            )}
          >
            <h4 className="text-lg font-bold">{projectModule.module.partNumber}</h4>
            {/*<p className="h-full">*/}
            {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et*/}
            {/*  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex*/}
            {/*  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu*/}
            {/*  fugiat nulla pariatur.*/}
            {/*</p>*/}
            {projectModule.module.description && <p className="h-full">{projectModule.module.description}</p>}
          </div>
          <p className="font-bold text-center col-span-1">1</p>

          {projectModule.children && <CartProjectModules projectModules={projectModule.children} isChildren={true} />}
        </React.Fragment>
      ))}
    </>
  );
};

type CartTemplateProps = {
  data: CartQuery;
  slug: string;
  loading: boolean;
  error?: string;
  handleTryAgain: () => void;
};

const CartTemplate: React.FC<CartTemplateProps> = ({ data, slug }) => {
  const intl = useIntl();
  // TODO: Create quantity if duplicate. Loading + handle try again too. Add back button, add Print button

  return (
    <AppLayout
      hideLeft
      prependLeft={() => (
        <>
          <Link
            href={{
              pathname: '/project/[slug]/planner',
              query: { slug }
            }}
          >
            <a className="flex items-center justify-center h-full">
              <NavbarButton
                iconPosition="left"
                content="Back"
                icon={(className) => (
                  <FontAwesomeIcon icon={faAngleLeft} className={classnames('text-2xl', className)} />
                )}
              />
            </a>
          </Link>
        </>
      )}
    >
      <Head>
        <title>
          {`${intl.formatMessage({ id: 'cart.title' })} | ${data?.project?.title} | ${intl.formatMessage({
            id: 'title'
          })}`}
        </title>
      </Head>
      <div>
        <div className="no-print:mx-auto no-print:container no-print:my-12 no-print:bg-white no-print:shadow-md no-print:p-8">
          <div className="flex">
            <div className="w-full">
              <h2 className="mb-4 text-3xl text-black print:hidden">
                <FormattedMessage id="cart.review" />
              </h2>
              <h3 className="text-xl print:text-black no-print:text-gray-500">{data?.project?.title}</h3>
            </div>
            <div className="print:hidden">
              <Button className="group" onClick={() => window?.print()}>
                <span>
                  <FormattedMessage id="cart.print" />
                </span>
                <FontAwesomeIcon icon={faFile} className="text-2xl mui-animate-group-hover" />
              </Button>
            </div>
          </div>
          <hr className="my-4" />
          {data?.project?.projectModules && (
            <div className="grid grid-cols-12 gap-4">
              <div className="py-2 col-span-12 bg-mui-gray-300 grid grid-cols-12 gap-4">
                <p className="font-bold col-span-9 col-start-3">
                  <FormattedMessage id="cart.headers.product" />
                </p>
                <p className="font-bold text-center col-span-1">
                  <FormattedMessage id="cart.headers.quantity" />
                </p>
              </div>
              <CartProjectModules projectModules={data.project.projectModules} />
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default CartTemplate;

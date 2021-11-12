import React, { useMemo } from 'react';
import { CartDataFragment, CartQuery } from '../../../apollo/generated/graphql';
import AppLayout from '../../Layouts/AppLayout';
import Head from 'next/head';
import { FormattedMessage, useIntl } from 'react-intl';
import SkeletonImage from '../../UI/SkeletonImage';
import classNames from 'classnames';
import Button from '../../UI/Button';
import Link from 'next/link';
import ErrorMessage from '../../UI/ErrorMessage';
import Skeleton from '../../UI/Skeleton';
import { ChevronLeft, File } from 'react-feather';
import { groupBy, values } from 'lodash';
import NavbarButton from '../../UI/NavbarButton';

type ProjectModules = (CartDataFragment & {
  children?: (CartDataFragment & { quantity?: number })[];
  quantity?: number;
})[];

type CartProjectModulesProps = {
  projectModules: ProjectModules;
  isChildren?: boolean;
};

const CartProjectModules: React.FC<CartProjectModulesProps> = ({ projectModules, isChildren }) => {
  return (
    <>
      {projectModules.map((projectModule, i) => (
        <React.Fragment key={projectModule.id}>
          <div className="grid grid-cols-12 gap-y-4 page-break-inside-avoid">
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
                'flex flex-col items-stretch justify-center ml-4',
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
            <p className="flex items-center justify-center font-bold text-center col-span-1">
              {projectModule.quantity || 1}
            </p>
          </div>

          {projectModule.children && <CartProjectModules projectModules={projectModule.children} isChildren />}
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

const CartTemplate: React.FC<CartTemplateProps> = ({ data, slug, error, loading, handleTryAgain }) => {
  const intl = useIntl();

  const projectModules = useMemo(() => {
    if (data.project?.projectModules && data.project.projectModules.length > 0) {
      // This method groups similar modules and returns the amount as quantity, then does the same for the children.
      // So if the user has two of the same modules. We show "quantity:2" instead of showing the module twice
      return values(groupBy(data.project.projectModules, 'moduleId')).map((group) => ({
        ...group[0],
        quantity: group.length,
        children: values(
          groupBy(
            data.project?.projectModules.filter((x) => x.moduleId === group[0].moduleId).flatMap((x) => x.children) ||
              [],
            'moduleId'
          )
        ).map((childGroup) => ({ ...childGroup[0], quantity: childGroup.length }))
      }));
    }

    return undefined;
  }, [data]);

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
            <a className="h-full">
              <NavbarButton icon={<ChevronLeft />} iconPosition="left">
                <FormattedMessage id="common.back" />
              </NavbarButton>
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
          {!error ? (
            !loading ? (
              <>
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
                      <File className="text-2xl" />
                    </Button>
                  </div>
                </div>
                <hr className="my-4" />
                {projectModules && (
                  <>
                    <div className="py-2 mb-4 grid grid-cols-12 gap-y-4 bg-mui-gray-300">
                      <p className="ml-4 font-bold col-span-9 col-start-3">
                        <FormattedMessage id="cart.headers.product" />
                      </p>
                      <p className="font-bold text-center col-span-1">
                        <FormattedMessage id="cart.headers.quantity" />
                      </p>
                    </div>
                    <CartProjectModules projectModules={projectModules} />
                  </>
                )}
              </>
            ) : (
              <>
                <Skeleton className="w-1/4 h-10 mui-border-radius" />
                <Skeleton className="w-1/5 h-4 mt-2 mui-border-radius" />
                <Skeleton className="w-full h-6 mt-4 mui-border-radius" />
                <div className="mt-2 grid grid-cols-12 gap-2">
                  {Array(2)
                    .fill(null)
                    .map((_, i) => (
                      <React.Fragment key={i}>
                        <Skeleton className="w-full h-44 col-span-2 mui-border-radius" />
                        <Skeleton className="w-full h-44 col-span-9 mui-border-radius" />
                        <Skeleton className="w-full h-44 col-span-1 mui-border-radius" />
                        {i === 0 &&
                          Array(2)
                            .fill(null)
                            .map((_, i2) => (
                              <React.Fragment key={i2 + i}>
                                <Skeleton className="w-full h-40 col-span-2 col-start-2 mui-border-radius" />
                                <Skeleton className="w-full h-40 col-span-8 mui-border-radius" />
                                <Skeleton className="w-full h-40 col-span-1 mui-border-radius" />
                              </React.Fragment>
                            ))}
                      </React.Fragment>
                    ))}
                </div>
              </>
            )
          ) : (
            <ErrorMessage error={error} handleTryAgain={handleTryAgain} />
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default CartTemplate;

import { NextPage } from 'next';
import NextError, { ErrorProps } from 'next/error';
import React from 'react';
import logging from '../lib/logging';

type CustomErrorGetInitialProps = ErrorProps & {
  // Workaround for https://github.com/vercel/next.js/issues/8592, mark when getInitialProps has run
  hasGetInitialPropsRun?: boolean;
};

type CustomErrorProps = CustomErrorGetInitialProps & { err?: Error };

// Ref: https://nextjs.org/docs/advanced-features/custom-error-page#customizing-the-error-page
const CustomError: NextPage<CustomErrorProps, CustomErrorGetInitialProps> = ({
  statusCode,
  hasGetInitialPropsRun,
  err
}) => {
  if (!hasGetInitialPropsRun && err) {
    // getInitialProps is not called in case of https://github.com/vercel/next.js/issues/8592.
    // As a workaround, we pass err via _app.js so it can be captured
    logging.error(err);
  }

  return (
    <>
      <NextError statusCode={statusCode} /> matheus
    </>
  );
};

CustomError.getInitialProps = async (ctx) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const errorInitialProps: any = await NextError.getInitialProps(ctx);

  // Workaround for https://github.com/vercel/next.js/issues/8592, mark when
  // getInitialProps has run
  errorInitialProps.hasGetInitialPropsRun = true;

  // Running on the server, the response object (`res`) is available.
  //
  // Next.js will pass an err on the server if a page's data fetching methods
  // threw or returned a Promise that rejected
  //
  // Running on the client (browser), Next.js will provide an err if:
  //
  //  - a page's `getInitialProps` threw or returned a Promise that rejected
  //  - an exception was thrown somewhere in the React lifecycle (render,
  //    componentDidMount, etc) that was caught by Next.js's React Error
  //    Boundary. Read more about what types of exceptions are caught by Error
  //    Boundaries: https://reactjs.org/docs/error-boundaries.html

  if (ctx.err) {
    logging.error(ctx.err, undefined, { ctx: { ...ctx } });
  }

  if (ctx.res?.statusCode !== 404) {
    // If this point is reached, getInitialProps was called without any
    // information about what the error might be. This is unexpected and may
    // indicate a bug introduced in Next.js, so record it in Sentry
    logging.error(new Error(`_error.js getInitialProps missing data at path: ${ctx.asPath}`));
  }

  return errorInitialProps;
};

export default CustomError;

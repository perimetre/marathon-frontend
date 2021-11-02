import React from 'react';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { config } from '@fortawesome/fontawesome-svg-core';
import { useApollo } from '../lib/apollo';
import { LocaleProvider } from '../components/Providers/LocaleProvider';
import DefaultPageTitle from '../components/Elements/DefaultPageTitle';

import '../../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';

config.autoAddCss = false;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MyApp: React.FC<AppProps & { err: any }> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);

  return (
    <LocaleProvider {...pageProps}>
      <DefaultPageTitle />
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </LocaleProvider>
  );
};

export default MyApp;

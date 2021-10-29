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

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
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

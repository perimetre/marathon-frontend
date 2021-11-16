import React from 'react';
import type { AppProps } from 'next/app';
import AppProvider from '../components/Providers/AppProvider';

import '../styles/globals.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MyApp: React.FC<AppProps & { err: any }> = ({ Component, pageProps, err }) => (
  <AppProvider {...pageProps}>
    <Component {...pageProps} err={err || pageProps?.err} />
  </AppProvider>
);

export default MyApp;

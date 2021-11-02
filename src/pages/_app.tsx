import React from 'react';
import type { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core';
import AppProvider from '../components/Providers/AppProvider';
import AppLayout from '../components/Layouts/AppLayout';

import '../../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css';

config.autoAddCss = false;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MyApp: React.FC<AppProps & { err: any }> = ({ Component, pageProps, err }) => (
  <AppProvider {...pageProps}>
    <AppLayout>
      <Component {...pageProps} err={err || pageProps?.err} />
    </AppLayout>
  </AppProvider>
);

export default MyApp;

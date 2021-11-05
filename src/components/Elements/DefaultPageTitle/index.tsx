import Head from 'next/head';
import React from 'react';
import { useIntl } from 'react-intl';

const DefaultPageTitle: React.FC = () => {
  const intl = useIntl();
  return (
    <Head>
      <title>{intl.formatMessage({ id: 'title' })}</title>
      <meta name="description" content={intl.formatMessage({ id: 'description' })} />
    </Head>
  );
};

export default DefaultPageTitle;

import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { useApollo, WithApolloProps } from '../../../lib/apollo';
import { LocaleProvider } from '../LocaleProvider';

type AppProviderProps = WithApolloProps<Record<string, unknown>>;

const AppProvider: React.FC<AppProviderProps> = ({ children, ...props }) => {
  const apolloClient = useApollo(props);

  return (
    <LocaleProvider>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </LocaleProvider>
  );
};

export default AppProvider;

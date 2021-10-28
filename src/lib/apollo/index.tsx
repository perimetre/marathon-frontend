import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';
import env from '../../env';

// Ref: https://github.com/vercel/next.js/blob/0d924ca0252450089a2627993166c5131618b874/examples/with-apollo/lib/apolloClient.js#L1

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

export type WithApolloProps<T> = T & {
  // Rehydration
  [APOLLO_STATE_PROP_NAME]: NormalizedCacheObject;
};

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: env().NEXT_PUBLIC_GRAPHQL_URI, // Server URL (must be absolute)
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache()
  });
};

export const initializeApollo = (initialState: NormalizedCacheObject | null = null) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => !isEqual(d, s)))
      ]
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export const addApolloState = <TPageProps extends { props?: TProps }, TProps>(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: TPageProps
): TPageProps & { props: WithApolloProps<TProps> } => ({
  ...pageProps,
  props: {
    ...pageProps?.props,
    [APOLLO_STATE_PROP_NAME]: client.cache.extract()
  }
});

export const useApollo = <T extends Record<string, unknown>>(pageProps: WithApolloProps<T>) => {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
};

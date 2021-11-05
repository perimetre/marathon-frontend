import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import React, { useCallback, useEffect, useMemo } from 'react';
import { CartQuery, CartQueryVariables, useCartLazyQuery } from '../../../apollo/generated/graphql';
import { addApolloState, initializeApollo, WithApolloProps } from '../../../lib/apollo';
import { getLocaleIdFromGraphqlError } from '../../../lib/apollo/exceptions';
import { CART_QUERY } from '../../../apollo/cart';
import CartTemplate from '../../../components/Templates/Cart';

type CartParams = {
  slug: string;
};

type CartServerSideProps = CartParams & {
  // Graphql data
  data: CartQuery;
};

type CartContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const CartContainer: NextPage<CartContainerProps> = ({ slug, data: ssrData }) => {
  // ***********
  // ** Grapqhl declarations
  // ***********

  // ** Queries
  const [getCart, { data, error: queryError, refetch, loading }] = useCartLazyQuery({
    // This makes the "loading" state to be updated when we run "refetch"
    // if we don't do this, it'll run in background and state will only be updated if the query finishes
    notifyOnNetworkStatusChange: true,
    variables: {
      slug
    }
  });

  // ***********
  // ** Business logic
  // ***********

  // Get the translated error if any
  const error = useMemo(
    () => (queryError ? getLocaleIdFromGraphqlError(queryError.graphQLErrors, queryError.networkError) : undefined),
    [queryError]
  );

  // ** Execution

  useEffect(() => {
    getCart();
  }, [getCart]);

  // ** Handlers

  const handleTryAgain = useCallback(() => {
    if (refetch) {
      refetch();
    }
  }, [refetch]);

  return (
    <CartTemplate slug={slug} data={data || ssrData} loading={loading} error={error} handleTryAgain={handleTryAgain} />
  );
};

export const getServerSideProps: GetServerSideProps<WithApolloProps<CartServerSideProps>, CartParams> = async ({
  params
}) => {
  if (!params || !params.slug) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    };
  }

  const { slug } = params;

  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<CartQuery, CartQueryVariables>({
    query: CART_QUERY,
    variables: {
      slug
    }
  });

  if (!data.project?.id) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    };
  }

  return addApolloState(apolloClient, {
    props: {
      slug,
      data
    }
  });
};

export default CartContainer;

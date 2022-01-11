import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import React, { useCallback, useMemo } from 'react';
import { CartQuery, CartQueryVariables, useCartQuery, useCreateListMutation } from '../../../apollo/generated/graphql';
import { addApolloState, initializeApollo, WithApolloProps } from '../../../lib/apollo';
import { getLocaleIdFromGraphqlError, hasGraphqlUnauthorizedError } from '../../../lib/apollo/exceptions';
import { CART_QUERY } from '../../../apollo/cart';
import CartTemplate from '../../../components/Templates/Cart';
import { requiredAuthWithRedirectProp } from '../../../utils/auth';
import logging from '../../../lib/logging';

type CartParams = {
  slug?: string;
};

type CartServerSideProps = CartParams;

type CartContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const CartContainer: NextPage<CartContainerProps> = ({ slug }) => {
  // ***********
  // ** Grapqhl declarations
  // ***********

  // ** Queries
  const {
    data,
    error: queryError,
    refetch,
    loading
  } = useCartQuery({
    // This makes the "loading" state to be updated when we run "refetch"
    // if we don't do this, it'll run in background and state will only be updated if the query finishes
    notifyOnNetworkStatusChange: true,
    variables: {
      slug: slug as string
    }
  });

  // ** Mutations
  const [createList] = useCreateListMutation();

  // ***********
  // ** Business logic
  // ***********

  // Get the translated error if any
  const error = useMemo(
    () => (queryError ? getLocaleIdFromGraphqlError(queryError.graphQLErrors, queryError.networkError) : undefined),
    [queryError]
  );

  // ** Handlers

  const handleTryAgain = useCallback(() => {
    if (refetch) {
      refetch();
    }
  }, [refetch]);

  const handleCreateList = useCallback(async () => {
    if (data?.project?.id) {
      await createList({
        variables: {
          projectId: data.project.id
        }
      });
    }
  }, [createList, data]);

  return (
    <CartTemplate
      slug={slug as string}
      data={data}
      loading={loading}
      error={error}
      handleTryAgain={handleTryAgain}
      handleCreateList={handleCreateList}
    />
  );
};

export const getServerSideProps: GetServerSideProps<WithApolloProps<CartServerSideProps>, CartParams> = async (ctx) => {
  const { res, params, query } = ctx;

  const apolloClient = initializeApollo(undefined, ctx);

  const props: CartServerSideProps = {
    ...(params || {}),
    ...(query || {})
  };

  const { redirect } = await requiredAuthWithRedirectProp(ctx);
  if (redirect) {
    return {
      redirect
    };
  }

  if (!params || !params.slug) {
    return {
      redirect: {
        destination: '/404',
        permanent: false
      }
    };
  }

  try {
    const { data } = await apolloClient.query<CartQuery, CartQueryVariables>({
      query: CART_QUERY,
      variables: {
        slug: params.slug
      }
    });
    if (!data?.project?.id) {
      return {
        redirect: {
          destination: '/404',
          permanent: false
        }
      };
    }
  } catch (err) {
    if (hasGraphqlUnauthorizedError(err)) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      };
    } else {
      // Do nothing for now. The client side will get the same error when trying to call the query
      logging.error(err, `Failed to load props for [CartContainer]`, {
        params: ctx.params,
        query: ctx.query
      });
      res.statusCode = 500;
    }
  }

  return addApolloState(apolloClient, {
    props
  });
};

export default CartContainer;

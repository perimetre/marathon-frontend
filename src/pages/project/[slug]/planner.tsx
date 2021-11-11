import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import React, { useCallback, useEffect, useMemo } from 'react';
import { PlannerQuery, PlannerQueryVariables, usePlannerLazyQuery } from '../../../apollo/generated/graphql';
import { PLANNER_QUERY } from '../../../apollo/planner';
import PlannerTemplate from '../../../components/Templates/Project/Planner';
import { addApolloState, initializeApollo, WithApolloProps } from '../../../lib/apollo';
import { getLocaleIdFromGraphqlError, hasGraphqlUnauthorizedError } from '../../../lib/apollo/exceptions';
import { requiredAuthWithRedirectProp } from '../../../utils/auth';
import { UnityPlayerProvider } from '../../../components/Providers/UnityPlayerProvider';

type PlannerParams = {
  slug?: string;
};

type PlannerServerSideProps = PlannerParams & {
  // Graphql data
  data?: PlannerQuery;
};

type PlannerContainerProps = InferGetServerSidePropsType<typeof getServerSideProps>;

const PlannerContainer: NextPage<PlannerContainerProps> = ({ slug, data: ssrData }) => {
  // ***********
  // ** Grapqhl declarations
  // ***********

  // ** Queries
  const [getPlanner, { data, error: queryError, refetch, loading }] = usePlannerLazyQuery({
    // This makes the "loading" state to be updated when we run "refetch"
    // if we don't do this, it'll run in background and state will only be updated if the query finishes
    notifyOnNetworkStatusChange: true,
    variables: {
      slug: slug as string
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
    getPlanner();
  }, [getPlanner]);

  // ** Handlers

  const handleTryAgain = useCallback(() => {
    if (refetch) {
      refetch();
    }
  }, [refetch]);

  return (
    <>
      {data?.project && (
        <UnityPlayerProvider project={data.project}>
          <PlannerTemplate
            slug={slug as string}
            data={data || ssrData}
            loading={loading}
            error={error}
            handleTryAgain={handleTryAgain}
          />
        </UnityPlayerProvider>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<WithApolloProps<PlannerServerSideProps>, PlannerParams> = async (
  ctx
) => {
  const { res, params, query } = ctx;

  const apolloClient = initializeApollo(undefined, ctx);

  const props: PlannerServerSideProps = {
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
    const { data } = await apolloClient.query<PlannerQuery, PlannerQueryVariables>({
      query: PLANNER_QUERY,
      variables: {
        slug: params.slug
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
    props.data = data;
  } catch (err) {
    if (hasGraphqlUnauthorizedError(err)) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      };
    }
    res.statusCode = 404;
  }

  return addApolloState(apolloClient, {
    props
  });
};

export default PlannerContainer;

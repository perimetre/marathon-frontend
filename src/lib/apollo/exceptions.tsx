/* eslint-disable @typescript-eslint/no-explicit-any */
import { GraphQLError } from 'graphql';
import { ServerError, ServerParseError } from '@apollo/client';
import logging from '../logging';

const codesToIgnoreOnLogging: string[] = [];

export type GraphQLErrors = readonly GraphQLError[] | null | undefined;
export type NetworkError = Error | ServerError | ServerParseError | null | undefined;
export type CatchGraphqlError = {
  graphQLErrors?: GraphQLErrors;
  networkError?: NetworkError;
};

export const getLocaleIdFromGraphqlError = (graphQLErrors?: GraphQLErrors, networkError?: NetworkError) => {
  if (
    networkError?.message === 'Failed to fetch' ||
    (networkError as any)?.code === 'ECONNREFUSED' ||
    networkError?.message?.toUpperCase().includes('ECONNREFUSED')
  ) {
    // If the internet is down
    return 'serverErrors.ECONNREFUSED';
  } else if (
    graphQLErrors &&
    graphQLErrors.length > 0 &&
    graphQLErrors.some((x) => x.extensions?.code === 'FORBIDDEN')
  ) {
    // Unauthorized requests (protected endpoints that find an invalid or expired token) will return FORBIDDEN as code
    return 'serverErrors.unauthorized';
  } else if (graphQLErrors && graphQLErrors.length > 0 && graphQLErrors.some((x) => x.extensions?.exception?.name)) {
    // If we have a custom graphql error, we'll have the "extensions.exception.name" property
    // TODO: Also parse yup fields validation errors. (They wouldn't even happen in the frontend since graphql validates the field before the backend does, so it's not needed for now)

    // Get the error code
    const code = (graphQLErrors.find((x) => x.extensions?.exception?.name) as GraphQLError).extensions?.exception?.name;

    // Return the locale with the code appended to it(this should cover most cases, and we only have to worry about adding the code to the locale copy)
    return `serverErrors.${code}`;
  } else if (networkError?.message) {
    // If there's a message in the network error and it's not one that we handled until this point
    return `serverErrors.unknownError` /* `Not handled: ${networkError.message}` */;
  } else if (graphQLErrors && graphQLErrors.length > 0 && graphQLErrors[0].message) {
    // If there's a message in the graphql error and it's not one that we handled until this point
    return `serverErrors.unknownError` /*`Not handled: ${graphQLErrors[0].message}`*/;
  } else {
    // Unknown error
    return 'serverErrors.unknownError';
  }
};

// Expected any. Since there are so many types of errors
export const getKeyFromException = (err: any) => {
  const code = err.data?.code;
  if (!codesToIgnoreOnLogging.includes(code)) {
    logging.error(err);
  }

  if (err.data) {
    return err.data.code
      ? err.data.code === 'Error'
        ? `serverErrors.unknownError` // map generic "Error" to unknownError locale
        : `serverErrors.${err.data.code}`
      : `${err.data.message}`;
  } else if (err.response?.data) {
    return err.response.data.code ? `serverErrors.${err.response.data.code}` : `${err.response.data.message}`;
  } else if (err.message === 'Network Error') {
    // The server side axios returns "ECONNREFUSED" but the client side returns "Network Error"
    // if a network request cannot be made.
    // So I'm using the same ket for both.
    return `serverErrors.ECONNREFUSED`;
  } else {
    return err.code ? `serverErrors.${err.code}` : `${err.message}`;
  }
};

export const hasGraphqlUnauthorizedError = (error: any) =>
  error.graphQLErrors && error.graphQLErrors.length > 0
    ? (error.graphQLErrors as GraphQLError[]).some((x) => x.extensions?.code === 'FORBIDDEN')
    : false;

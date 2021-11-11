import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { useLoginMutation } from '../../apollo/generated/graphql';
import LoginTemplate from '../../components/Templates/Login';
import { getLocaleIdFromGraphqlError } from '../../lib/apollo/exceptions';
import { setCookie } from '../../lib/cookie';
import logging from '../../lib/logging';
import { requiredAuthWithRedirectProp } from '../../utils/auth';

const LoginContainer: NextPage = () => {
  const router = useRouter();

  const [doLogin, { loading, error: queryError }] = useLoginMutation();

  const handleSubmit = useCallback(
    async (form: { email: string; password: string }) => {
      try {
        const { data } = await doLogin({ variables: { user: { email: form.email, password: form.password } } });
        setCookie('auth', JSON.stringify(data?.login));
        router.push('/projects', '/projects');
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        logging.error(err, 'Error on authentication:', { form });
      }
    },
    [doLogin, router]
  );

  const error = useMemo(
    () => (queryError ? getLocaleIdFromGraphqlError(queryError.graphQLErrors, queryError.networkError) : undefined),
    [queryError]
  );

  return <LoginTemplate onSubmit={handleSubmit} loading={loading} error={error} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { auth } = await requiredAuthWithRedirectProp(ctx);
  if (auth?.token) {
    return {
      redirect: {
        destination: '/projects',
        permanent: false
      }
    };
  }
  return {
    props: {}
  };
};

export default LoginContainer;

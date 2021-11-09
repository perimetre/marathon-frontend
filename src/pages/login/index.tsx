import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { useLoginMutation } from '../../apollo/generated/graphql';
import LoginTemplate from '../../components/Templates/Login';
import { getLocaleIdFromGraphqlError } from '../../lib/apollo/exceptions';
import { requiredAuthWithRedirectProp } from '../../utils/authUtils';
import { setCookie } from '../../lib/cookie';

const LoginContainer: NextPage = () => {
  const router = useRouter();

  const [doLogin, { loading, error: queryError }] = useLoginMutation();

  const handleSubmit = useCallback(
    async (form: { email: string; password: string }) => {
      try {
        const { data } = await doLogin({ variables: { user: { email: form.email, password: form.password } } });
        setCookie('auth', JSON.stringify(data?.login));
        router.push('/projects', '/projects');
      } catch (err) {
        console.log({ err });
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
        permanent: true
      }
    };
  }
  return {
    props: {}
  };
};

export default LoginContainer;

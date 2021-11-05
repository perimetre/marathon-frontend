import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import LoginTemplate from '../../components/Templates/Login';

const LoginContainer: NextPage = () => {
  const router = useRouter();

  const handleSubmit = useCallback(
    (form: { email: string; password: string }) => {
      console.log('logging: ', form);

      router.push('/projects', '/projects');
    },
    [router]
  );

  return <LoginTemplate onSubmit={handleSubmit} />;
};

export default LoginContainer;

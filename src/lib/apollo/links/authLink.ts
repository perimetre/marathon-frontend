import { setContext } from '@apollo/client/link/context';
import { GetServerSidePropsContext } from 'next';
import { Session } from '../../../apollo/generated/graphql';
import { getCookie } from '../../cookie';

export const authLink = (ctx?: GetServerSidePropsContext) =>
  setContext(async (_operation, { headers }) => {
    const payload = getCookie('auth', ctx);
    const session = payload ? ((typeof payload === 'string' ? JSON.parse(payload) : payload) as Session) : null;
    return {
      headers: {
        ...headers,
        'x-auth-token': session?.token
      }
    };
  });

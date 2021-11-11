import { GetServerSidePropsContext, NextPageContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Session } from '../apollo/generated/graphql';
import { getCookie } from '../lib/cookie';
import logging from '../lib/logging';

export const optionalAuth = async <T extends ParsedUrlQuery>(ctx?: NextPageContext | GetServerSidePropsContext<T>) => {
  if (typeof window === 'undefined') {
    try {
      const payload = getCookie('auth', ctx);
      const user = payload ? ((typeof payload === 'string' ? JSON.parse(payload) : payload) as Session) : null;
      return user;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      logging.error(error, undefined, { ctx: { ...ctx } });
    }
  }
  return undefined;
};

export const requiredAuthWithRedirectProp = async <T extends ParsedUrlQuery>(
  ctx: NextPageContext | GetServerSidePropsContext<T>
) => {
  if (typeof window !== 'undefined') {
    console.warn('requiredAuthProps was called in a client side environment, but it can only be useful server side');
  }

  const auth = await optionalAuth(ctx);

  if (!auth?.token || !auth.userId) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    };
  }
  return { auth };
};

import cookie from 'js-cookie';
import { NextPageContext, GetServerSidePropsContext } from 'next';
import nextCookie from 'next-cookies';
import env from '../../env';
import { ParsedUrlQuery } from 'querystring';

const getDefaultAttributes = () => {
  const { NODE_ENV } = env();
  return { expires: 90, secure: NODE_ENV !== 'development' };
};

export const getCookie = <T extends ParsedUrlQuery>(
  name: string,
  ctx?: NextPageContext | GetServerSidePropsContext<T>
) => {
  let value: string | undefined;

  // Server side
  if (ctx) {
    const cookies = nextCookie(ctx);
    if (cookies && cookies[name]) {
      value = cookies[name];
    }
  }

  // Client side
  if (!value) {
    value = cookie.get(name);
  }

  return value;
};

export const setCookie = (name: string, value: string) => {
  if (process.browser) {
    cookie.set(name, value, getDefaultAttributes());
  }
};

export const removeCookie = <T extends ParsedUrlQuery>(
  name: string,
  ctx?: NextPageContext | GetServerSidePropsContext<T>
) => {
  if (process.browser && getCookie(name, ctx)) {
    cookie.remove(name, getDefaultAttributes());
  }
};

export const setCookieOrRemoveIfUndefined = <T extends ParsedUrlQuery>(
  name: string,
  value?: string,
  ctx?: NextPageContext | GetServerSidePropsContext<T>
) => {
  if (value === undefined) {
    removeCookie(name, ctx);
  } else {
    setCookie(name, value);
  }
};

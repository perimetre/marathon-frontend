import { IncomingMessage, ServerResponse } from 'http';
import Router from 'next/router';

/**
 * @deprecated Only use this with the OLD getInitialProps. Prefer `redirect` property on other cases
 */
export const redirectServerOrClient = (
  url: string,
  as: string,
  req?: IncomingMessage,
  res?: ServerResponse,
  options?: Record<string, unknown>
): void => {
  if (typeof window === 'undefined' && (!req || !res)) {
    console.warn('Trying to server side redirect without req and res');
  }
  // If we have the res variable and it does have the redirect function
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((res as any)?.redirect) {
    // If another redirect hasn't happened
    if (!res?.headersSent) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (res as any).redirect(as);
    }
  } else if (req && res) {
    // If we have req && res and another redirect hasn't happened
    if (!res?.headersSent) {
      // Server side redirect
      res.writeHead(302, { Location: as });
      res.end();
    }
  } else {
    // If we don't have req && res we're at client side
    // Check if we're really on client side with process.browser
    if (process.browser) {
      // Redirect
      Router.replace(url, as, options);
    }
  }
};

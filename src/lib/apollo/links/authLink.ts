import { setContext } from '@apollo/client/link/context';
import env from '../../../env';

export const authLink = setContext(async (_operation, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${env().BEARER}`
    }
  };
});

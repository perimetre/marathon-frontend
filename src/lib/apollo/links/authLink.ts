import { setContext } from '@apollo/client/link/context';
import env from '../../../env';

export const authLink = setContext(async (_operation, { headers }) => {
  console.log('Bearer ', env().NEXT_PUBLIC_BEARER);
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${env().NEXT_PUBLIC_BEARER}`
    }
  };
});

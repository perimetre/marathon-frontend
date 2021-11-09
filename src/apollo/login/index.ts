import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($user: UserSingIn!) {
    login(user: $user) {
      id
      userId
      token
    }
  }
`;

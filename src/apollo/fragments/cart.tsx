import { gql } from '@apollo/client';

export const CART_DATA = gql`
  fragment CartData on ProjectModule {
    id
    moduleId
    module {
      id
      partNumber
      description
      thumbnailUrl
    }
  }
`;

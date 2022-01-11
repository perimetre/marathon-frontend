import { gql } from '@apollo/client';

export const CART_DATA = gql`
  fragment CartData on ProjectCart {
    id
    quantity
    projectModule {
      id
      moduleId
      module {
        id
        partNumber
        description
        thumbnailUrl
      }
    }
  }
`;

import { gql } from '@apollo/client';

export const SUPPLIER_QUERY = gql`
  query GetSlideSupplier {
    slideSuppliers {
      id
      name
      slug
      thumbnailUrl
      slides {
        id
        slug
        formula
        product
        depths {
          id
          display
          depth
        }
      }
    }
  }
`;

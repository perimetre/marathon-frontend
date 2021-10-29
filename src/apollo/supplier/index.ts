import gql from 'graphql-tag';

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

import gql from 'graphql-tag';

export const SUPPLIER_QUERY = gql`
  query GetSlideSupplierByCollection($collectionId: Int!) {
    slideSuppliers {
      id
      slug
      name
      thumbnailUrl
      slides(where: { collection: { id: { equals: $collectionId } } }) {
        id
        slug
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

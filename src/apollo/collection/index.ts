import { gql } from '@apollo/client';

export const COLLECTION_QUERY = gql`
  query GetCollections {
    collections {
      id
      name
      slug
      subtitle
      description
      footer
      thumbnailUrl
    }
  }
`;

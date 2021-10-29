import gql from 'graphql-tag';

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

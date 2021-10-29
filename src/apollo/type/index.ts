import gql from 'graphql-tag';

export const TYPE_QUERY = gql`
  query GetType {
    types {
      id
      description
      name
      slug
      thumbnailUrl
    }
  }
`;

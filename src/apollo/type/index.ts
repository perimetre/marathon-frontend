import { gql } from '@apollo/client';

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

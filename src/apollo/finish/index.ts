import { gql } from '@apollo/client';

export const FINISH_QUERY = gql`
  query GetFinish {
    finishes {
      id
      description
      name
      slug
      thumbnailUrl
    }
  }
`;

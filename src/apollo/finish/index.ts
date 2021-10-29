import gql from 'graphql-tag';

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

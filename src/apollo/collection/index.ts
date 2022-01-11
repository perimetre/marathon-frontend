import { gql } from '@apollo/client';

export const COLLECTION_QUERY = gql`
  query GetCollections($typeId: Int!) {
    type(where: { id: $typeId }) {
      id
      hasPegs
    }
    collections {
      id
      name
      slug
      hasPegs
      isComingSoon
      subtitle
      description
      footer
      thumbnailUrl
    }
  }
`;

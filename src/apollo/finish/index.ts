import { gql } from '@apollo/client';

export const FINISH_BY_COLLECTION_QUERY = gql`
  query GetFinishByCollection($collectionId: Int!) {
    finishes(where: { collectionFinishes: { some: { collectionId: { equals: $collectionId } } } }) {
      id
      description
      name
      slug
      thumbnailUrl
    }
  }
`;

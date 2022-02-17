import { gql } from '@apollo/client';
import { CART_DATA } from '../fragments/cart';

export const CART_QUERY = gql`
  query Cart($slug: String!) {
    project(where: { slug: $slug }) {
      id
      slug
      title
      cartAmount
      cart {
        ...CartData
        children {
          ...CartData
        }
      }
    }
  }
  ${CART_DATA}
`;

export const CREATE_LIST = gql`
  mutation CreateList($projectId: Int!) {
    createList(id: $projectId) {
      id
      externalId
      name
      project {
        id
      }
    }
  }
`;

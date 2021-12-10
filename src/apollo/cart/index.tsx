import { gql } from '@apollo/client';
import { CART_DATA } from '../fragments/cart';

export const CART_QUERY = gql`
  query Cart($slug: String!) {
    project(where: { slug: $slug }) {
      id
      slug
      title
      projectModules(where: { parentId: { equals: null } }) {
        ...CartData
        children(where: { module: { partNumber: { not: { contains: "EXTENSION" } } } }) {
          ...CartData
        }
      }
    }
  }
  ${CART_DATA}
`;

import { gql } from '@apollo/client';
import { CART_DATA } from '../fragments/cart';

export const CART_QUERY = gql`
  query Cart($slug: String!) {
    project(where: { slug: $slug }) {
      id
      slug
      title
      projectModules {
        ...CartData
        children {
          ...CartData
        }
      }
    }
  }
  ${CART_DATA}
`;

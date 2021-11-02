import { gql } from '@apollo/client';
import { MODULE_DATA } from '../fragments/module';

export const PLANNER_QUERY = gql`
  query Planner($slug: String!) {
    project(where: { slug: $slug }) {
      id
      title
      modules {
        ...ModuleData
      }
    }
  }
  ${MODULE_DATA}
`;

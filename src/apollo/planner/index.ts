import { gql } from '@apollo/client';
import { MODULE_DATA } from '../fragments/module';
import { PROJECT_MODULE_DATA } from '../fragments/projectModule';

export const PLANNER_QUERY = gql`
  query Planner($slug: String!) {
    project(where: { slug: $slug }) {
      id
      slug
      title
      gable
      calculatedWidth
      hasPegs
      cartAmount
      type {
        id
        slug
      }
      finish {
        id
        slug
      }
      slideDepth {
        id
        depth
      }
      modules {
        ...ModuleData
      }
      projectModules(where: { parentId: { equals: null } }) {
        ...ProjectModuleData
        children {
          ...ProjectModuleData
        }
      }
    }
  }
  ${MODULE_DATA}
  ${PROJECT_MODULE_DATA}
`;

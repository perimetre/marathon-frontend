import { gql } from '@apollo/client';
import { PROJECT_MODULE_DATA } from '../fragments/projectModule';

export const GET_PROJECT_MODULE = gql`
  query GetProjectModule($nanoIds: [String!]!) {
    projectModules(where: { nanoId: { in: $nanoIds } }) {
      ...ProjectModuleData
    }
  }
  ${PROJECT_MODULE_DATA}
`;

export const CREATE_PROJECT_MODULE = gql`
  mutation CreateProjectModule($data: ProjectModuleCreateInput!) {
    createOneProjectModule(data: $data) {
      ...ProjectModuleData
    }
  }
  ${PROJECT_MODULE_DATA}
`;

export const UPDATE_PROJECT_MODULE = gql`
  mutation UpdateProjectModule($data: ProjectModuleUpdateInput!, $id: Int!) {
    updateOneProjectModule(data: $data, where: { id: $id }) {
      ...ProjectModuleData
    }
  }
  ${PROJECT_MODULE_DATA}
`;

export const DELETE_PROJECT_MODULE = gql`
  mutation DeleteProjectModule($nanoIds: [String!]!) {
    deleteManyProjectModule(where: { nanoId: { in: $nanoIds } }) {
      count
    }
  }
`;

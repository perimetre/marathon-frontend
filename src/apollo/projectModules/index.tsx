import { gql } from '@apollo/client';

export const CREATE_PROJECT_MODULE = gql`
  mutation CreateProjectModule($data: ProjectModuleCreateInput!) {
    createOneProjectModule(data: $data) {
      id
    }
  }
`;

export const UPDATE_PROJECT_MODULE = gql`
  mutation UpdateProjectModule($data: ProjectModuleUpdateInput!, $id: Int!) {
    updateOneProjectModule(data: $data, where: { id: $id }) {
      id
    }
  }
`;

export const DELETE_PROJECT_MODULE = gql`
  mutation DeleteProjectModule($ids: [Int!]) {
    deleteManyProjectModule(where: { id: { in: $ids } }) {
      count
    }
  }
`;

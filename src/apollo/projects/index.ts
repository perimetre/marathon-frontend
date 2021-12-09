import { gql } from '@apollo/client';

export const PROJECT_DATA = gql`
  fragment ProjectData on Project {
    id
    title
    slug
    cabinetWidth
    gable
    type {
      id
      slug
    }
    collection {
      id
      slug
    }
  }
`;

export const PROJECT_CART = gql`
  query ProjectCart($slug: String!) {
    project(where: { slug: $slug }) {
      id
      slug
      cartAmount
    }
  }
`;

export const PROJECTS_QUERY = gql`
  query Projects($userId: Int!) {
    projects(where: { userId: { equals: $userId } }) {
      ...ProjectData
    }
  }
  ${PROJECT_DATA}
`;

export const CREATE_PROJECT_MUTATION = gql`
  mutation CreateProject($data: ProjectCreateInput!) {
    createOneProject(data: $data) {
      ...ProjectData
    }
  }
  ${PROJECT_DATA}
`;

export const UPDATE_PROJECT_MUTATION = gql`
  mutation UpdateProject($projectId: Int!, $data: ProjectUpdateInput!) {
    updateOneProject(data: $data, where: { id: $projectId }) {
      ...ProjectData
    }
  }
  ${PROJECT_DATA}
`;

export const DELETE_PROJECT_MUTATION = gql`
  mutation DeleteProject($projectId: Int!) {
    deleteOneProject(where: { id: $projectId }) {
      id
    }
  }
`;

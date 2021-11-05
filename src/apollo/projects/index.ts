import { gql } from '@apollo/client';

export const PROJECT_DATA = gql`
  fragment ProjectData on Project {
    id
    title
    slug
    width
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

export const PROJECTS_QUERY = gql`
  query Projects {
    projects {
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
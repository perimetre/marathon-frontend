import { gql } from '@apollo/client';

export const PROJECT_MODULE_DATA = gql`
  fragment ProjectModuleData on ProjectModule {
    id
    posX
    posY
    posZ
    rotY
    parentId
    moduleId
    module {
      id
      partNumber
      bundleUrl
    }
  }
`;

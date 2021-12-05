import { gql } from '@apollo/client';
import { MODULE_DATA } from './module';

export const PROJECT_MODULE_DATA = gql`
  fragment ProjectModuleData on ProjectModule {
    id
    nanoId
    posX
    posY
    posZ
    rotY
    parentId
    parentNanoId
    module {
      ...ModuleData
      rulesJson
    }
  }
  ${MODULE_DATA}
`;

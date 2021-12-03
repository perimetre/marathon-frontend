import { gql } from '@apollo/client';
import { MODULE_DATA } from './module';

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
      ...ModuleData
    }
  }
  ${MODULE_DATA}
`;

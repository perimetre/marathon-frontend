import { gql } from '@apollo/client';

const MODULE_DATA_WITHOUT_EXTENSIONS = gql`
  fragment ModuleDataWithoutExtensions on Module {
    id
    bundleUrl
    hasPegs
    isExtension
    isMat
    isSubmodule
    isEdge
    partNumber
    rules {
      rules {
        options
      }
      extensions {
        options
      }
    }
    thumbnailUrl
    description
    categories {
      id
      slug
      name
    }
  }
`;

export const MODULE_DATA = gql`
  fragment ModuleData on Module {
    ...ModuleDataWithoutExtensions
    defaultLeftExtension {
      ...ModuleDataWithoutExtensions
      rulesJson
    }
    defaultRightExtension {
      ...ModuleDataWithoutExtensions
      rulesJson
    }
    attachmentToAppend {
      ...ModuleDataWithoutExtensions
      rulesJson
    }
    moduleAttachments {
      id
      attachment {
        ...ModuleDataWithoutExtensions
        rulesJson
      }
    }
    owner {
      id
      partNumber
      description
      thumbnailUrl
    }
  }
  ${MODULE_DATA_WITHOUT_EXTENSIONS}
`;

import { gql } from '@apollo/client';

export const MODULE_DATA = gql`
  fragment ModuleData on Module {
    id
    bundleUrl
    hasPegs
    isImprintExtension
    isMat
    isSubmodule
    partNumber
    rules
    thumbnailUrl
    # description
    categories {
      id
      slug
      name
    }
  }
`;

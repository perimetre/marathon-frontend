import { gql } from '@apollo/client';
import { MODULE_DATA } from '../fragments/module';

export const MODULE_OPTIONS_QUERY = gql`
  query ModuleOptions($options: [String!]) {
    modules(where: { partNumber: { in: $options } }) {
      ...ModuleData
    }
  }
  ${MODULE_DATA}
`;

export const MODULE_RULES_QUERY = gql`
  query ModuleRules($partNumber: String!) {
    module(where: { partNumber: $partNumber }) {
      id
      rulesJson
      isMat
    }
  }
`;

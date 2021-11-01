import type { NextPage } from 'next';
import React from 'react';
import BuildTemplate from '../../components/Templates/Build';

// export const HOME_QUERY = gql`
//     query Home {
//         types {
//             id
//             description
//             name
//             slug
//             thumbnailUrl
//         }
//     }
// `;

type BuildContainerProps = Record<string, unknown>;

const BuildContainer: NextPage<BuildContainerProps> = ({}) => {
  // const { data } = useHomeQuery();
  // console.log(data);

  return <BuildTemplate />;
};

export default BuildContainer;

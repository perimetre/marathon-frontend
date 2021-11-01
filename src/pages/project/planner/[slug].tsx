import type { NextPage } from 'next';
import React from 'react';
import PlannerTemplate from '../../../components/Templates/Project/Planner';

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

type PlannerContainerProps = Record<string, unknown>;

const PlannerContainer: NextPage<PlannerContainerProps> = ({}) => {
  // const { data } = useHomeQuery();
  // console.log(data);

  return <PlannerTemplate />;
};

export default PlannerContainer;

import React from 'react';

const MouseLeftClick: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="22" height="22" viewBox="0 0 530 874" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M265 40H281C396.428 40 490 133.573 490 249V625C490 740.427 396.428 834 281 834H249C133.572 834 40 740.427 40 625V368H205C238.137 368 265 341.137 265 308V40ZM265 0H281C418.519 0 530 111.481 530 249V625C530 762.519 418.519 874 281 874H249C111.481 874 0 762.519 0 625V368V249C0 111.481 111.481 0 249 0H265Z"
    />
  </svg>
);

export default MouseLeftClick;

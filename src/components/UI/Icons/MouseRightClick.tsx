import React from 'react';

const MouseRightClick: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="22" height="22" viewBox="0 0 530 874" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M265 40.2283H249C133.572 40.2283 40 133.801 40 249.228V625.228C40 740.656 133.572 834.228 249 834.228H281C396.428 834.228 490 740.656 490 625.228V368.228H325C291.863 368.228 265 341.365 265 308.228V40.2283ZM265 0.228302H249C111.481 0.228302 0 111.709 0 249.228V625.228C0 762.747 111.481 874.228 249 874.228H281C418.519 874.228 530 762.747 530 625.228V368.228V249.228C530 111.709 418.519 0.228302 281 0.228302H265Z"
      fill="white"
    />
  </svg>
);

export default MouseRightClick;

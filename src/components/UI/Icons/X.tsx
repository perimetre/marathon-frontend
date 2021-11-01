import React from 'react';
import classnames from 'classnames';

/**
 * X icon to use with JSX
 *
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const X: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    className={classnames('h-6 w-6 stroke-current', className)}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

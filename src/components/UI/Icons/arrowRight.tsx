import React from 'react';
import classnames from 'classnames';

/**
 * ArrowRight icon to use with JSX
 *
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const ArrowRight: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    className={classnames('h-6 w-6 stroke-current', className)}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

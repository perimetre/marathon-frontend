import React from 'react';
import classNames from 'classnames';

/**
 * ArrowLeft icon to use with JSX
 *
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const ArrowLeft: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    className={classNames('h-6 w-6 stroke-current', className)}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

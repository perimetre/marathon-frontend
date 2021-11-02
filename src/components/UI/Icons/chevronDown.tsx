import React from 'react';
import classNames from 'classnames';

/**
 * ChevronDownIcon icon to use with JSX
 *
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    className={classNames('h-6 w-6 stroke-current', className)}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
);

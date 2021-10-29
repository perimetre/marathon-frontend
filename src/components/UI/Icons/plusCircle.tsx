import React from 'react';
import classnames from 'classnames';

/**
 * PlusCircle icon to use with JSX
 *
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const PlusCircle: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    className={classnames('h-6 w-6 stroke-current', className)}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

/**
 * PlusCircleSolid icon to use with JSX
 *
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const PlusCircleSolid: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" {...props} className={classnames('h-6 w-6 fill-current', className)}>
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
      clipRule="evenodd"
    />
  </svg>
);

import React from 'react';
import classNames from 'classnames';

/**
 * XCircle icon to use with JSX
 *
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const XCircle: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    className={classNames('h-6 w-6 stroke-current', className)}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

/**
 * XCircleSolid icon to use with JSX
 *
 * @param props the icon props
 * @param props.className the icon classname value
 */
export const XCircleSolid: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" {...props} className={classNames('h-6 w-6 fill-current', className)}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
    />
  </svg>
);

import React, { forwardRef } from 'react';
import classNames from 'classnames';

const variantClassnameMap = {
  default: 'btn-default',
  text: 'btn-text'
};

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  /**
   * The button type variant
   *
   * @default default
   */
  variant?: keyof typeof variantClassnameMap;
};

/**
 * Button
 *
 * @param props The input props
 * @param props.className The input className
 * @param props.variant The button type variant
 * @param props.children The component children
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', className, children, ...props }, ref) => {
    return (
      <button type="button" {...props} ref={ref} className={classNames(variantClassnameMap[variant], className)}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

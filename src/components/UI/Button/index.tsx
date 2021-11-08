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
const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'default', className, children, ...props },
  ref
) {
  return (
    <button {...props} ref={ref} className={classNames(variantClassnameMap[variant], className)}>
      {children}
    </button>
  );
});

export default Button;

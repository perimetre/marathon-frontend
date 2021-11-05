import React, { forwardRef } from 'react';
import Tippy, { TippyProps } from '@tippyjs/react/headless';
import classNames from 'classnames';

export type TooltipProps = TippyProps & {
  /**
   * Determines if the tooltip has an arrow.
   */
  arrow?: boolean;
  /**
   * The props for the button handler
   */
  buttonProps?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
  /**
   * Classname to be appended to content classes
   */
  contentClassName?: string;
};

/**
 * Displays a tooltip
 *
 * @param props The component props
 * @param props.arrow Determines if the tooltip has an arrow.
 * @param props.buttonProps The props for the button handler
 * @param props.contentClassName Classname to be appended to content classes
 * @param props.content The tooltip content
 * @param props.children The provided children
 */
const Tooltip: React.FC<TooltipProps> = forwardRef<Element, TooltipProps>(
  ({ children, content, buttonProps, arrow = true, contentClassName, ...props }, ref) => (
    <Tippy
      {...props}
      ref={ref}
      render={(attrs: unknown) => (
        <div className="mui-tooltip" tabIndex={-1} {...attrs}>
          <div className={classNames('mui-tooltip-content', contentClassName)}>{content}</div>
          {arrow && (
            <div data-popper-arrow="">
              <div className="mui-tooltip-arrow" />
            </div>
          )}
        </div>
      )}
    >
      {/* For correct accessibility reasons, it's recommended that the tooltip element is a button */}
      <button
        type="button"
        {...buttonProps}
        className={classNames('mui-btn-icon flex items-center', buttonProps?.className)}
      >
        {children}
      </button>
    </Tippy>
  )
);

Tooltip.displayName = 'Tooltip';

export default Tooltip;

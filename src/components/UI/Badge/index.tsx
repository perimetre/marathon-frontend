import React, { useMemo } from 'react';
import classnames from 'classnames';

const variantClassnameMap = {
  default: 'mui-badge-default',
  mini: 'mui-badge-mini',
  dot: 'mui-badge-dot'
};

const placementClassnameMap = {
  ['top-right']: 'mui-badge-placement-top-right',
  ['bottom-right']: 'mui-badge-placement-bottom-right',
  ['top-left']: 'mui-badge-placement-top-left',
  ['bottom-left']: 'mui-badge-placement-bottom-left'
};

export type BadgeProps = {
  /**
   * The badge display number or text
   */
  content?: number | string;
  /**
   * The maximum number until the badge will add a "+" sign, only taken into consideration if `content` is of type number
   *
   * @default 9
   */
  maxValue?: number | null;
  /**
   * Whether or not the badge should have a pulsing effect
   */
  pulse?: boolean;
  /**
   * The badge variant
   *
   * @default default
   */
  variant?: keyof typeof variantClassnameMap;
  /**
   * The badge placement
   *
   * @default top-right
   */
  placement?: keyof typeof placementClassnameMap;
};

/**
 * A badge
 *
 * @param props the component props
 * @param props.content The badge display number or text
 * @param props.maxValue The maximum number until the badge will add a "+" sign, only taken into consideration if `content` is of type number
 * @param props.pulse Whether or not the badge should have a pulsing effect
 * @param props.variant The badge variant
 * @param props.placement The bagge placement
 * @param props.children the provided children
 */
const Badge: React.FC<BadgeProps> = ({
  content: propsContent,
  maxValue = 9,
  pulse,
  variant = 'default',
  placement = 'top-right',
  children
}) => {
  const content = useMemo(
    () =>
      typeof propsContent === 'number'
        ? maxValue && propsContent > maxValue
          ? `${maxValue}+`
          : `${propsContent}`
        : propsContent,
    [propsContent, maxValue]
  );

  return (
    <div className="mui-badge">
      {children}
      {content && (
        <span className={classnames(variantClassnameMap[variant], placementClassnameMap[placement], { pulse })}>
          {variant !== 'dot' && content}
        </span>
      )}
    </div>
  );
};

export default Badge;

import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import classNames from 'classnames';

type TrayButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  icon?: () => React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
};

const TrayButton: React.FC<TrayButtonProps> = ({ icon, iconPosition = 'right', children, className, ...props }) => (
  <button
    className={classNames(
      'flex items-center justify-center h-full p-2 gap-2 hover:bg-mui-gray-300 disabled:bg-mui-gray-50 disabled:cursor-auto disabled:text-mui-gray-300',
      className
    )}
    {...props}
  >
    {iconPosition === 'left' && icon && icon()}
    {children && <span>{children}</span>}
    {iconPosition === 'right' && icon && icon()}
  </button>
);

export default TrayButton;

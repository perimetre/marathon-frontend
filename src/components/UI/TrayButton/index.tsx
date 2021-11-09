import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import classNames from 'classnames';

type TrayButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  icon?: () => React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
};

const TrayButton: React.FC<TrayButtonProps> = ({ icon, iconPosition = 'right', children, className }) => (
  <button className={classNames('flex items-center justify-center h-full p-2 gap-2 hover:bg-mui-gray-50', className)}>
    {iconPosition === 'left' && icon && icon()}
    {children && <span>{children}</span>}
    {iconPosition === 'right' && icon && icon()}
  </button>
);

export default TrayButton;

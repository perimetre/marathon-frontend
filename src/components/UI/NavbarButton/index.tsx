import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type NavbarButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children?: string | React.ReactNode;
};

const NavbarButton: React.FC<NavbarButtonProps> = ({ icon, iconPosition = 'right', children, ...buttonProps }) => (
  <button
    className="flex items-center justify-center h-full px-4 hover:bg-mui-gray-50 transition-colors duration-75 group gap-2"
    {...buttonProps}
  >
    {iconPosition === 'left' && icon}
    {children && <span className="text-sm font-bold uppercase">{children}</span>}
    {iconPosition === 'right' && icon}
  </button>
);

export default NavbarButton;

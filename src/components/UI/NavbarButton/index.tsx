import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type NavbarButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  icon?: (className: string) => React.ReactNode;
  iconPosition?: 'left' | 'right';
  content?: string | React.ReactNode;
};

const NavbarButton: React.FC<NavbarButtonProps> = ({ icon, iconPosition, content, ...buttonProps }) => (
  <button
    className="flex items-center justify-center h-full px-4 hover:bg-mui-gray-50 transition-colors duration-75 group gap-2"
    {...buttonProps}
  >
    {iconPosition === 'left' && icon && icon('mui-animate-group-hover')}
    {content && <span className="text-sm font-bold uppercase">{content}</span>}
    {iconPosition === 'right' && icon && icon('mui-animate-group-hover')}
  </button>
);

export default NavbarButton;

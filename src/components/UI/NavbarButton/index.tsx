type NavbarButtonProps = {
  icon?: (className: string) => React.ReactNode;
  iconPosition?: 'left' | 'right';
  content?: string | React.ReactNode;
};

const NavbarButton: React.FC<NavbarButtonProps> = ({ icon, iconPosition, content }) => (
  <button className="flex items-center justify-center p-4 hover:bg-mui-gray-50 transition-colors duration-75 group gap-2">
    {iconPosition === 'left' &&
      icon &&
      icon(
        'group-hover:scale-125 transition-transform duration-75 group-active:scale-100 group-active:transition-none'
      )}
    {content && <span className="text-sm font-bold uppercase">{content}</span>}
    {iconPosition === 'right' &&
      icon &&
      icon(
        'group-hover:scale-125 transition-transform duration-75 group-active:scale-100 group-active:transition-none'
      )}
  </button>
);

export default NavbarButton;

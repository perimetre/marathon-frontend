type NavbarButtonProps = {
  icon?: () => React.ReactNode;
  iconPosition?: 'left' | 'right';
  content?: string | React.ReactNode;
};

const NavbarButton: React.FC<NavbarButtonProps> = ({ icon, iconPosition, content }) => (
  <button className="flex items-center justify-center p-4 hover:bg-mui-gray-50 transition-colors duration-75 group gap-2">
    {iconPosition === 'left' && icon && (
      <span className="group-hover:scale-125 transition-transform duration-75 group-active:scale-100 group-active:transition-none">
        {icon()}
      </span>
    )}
    {content && <span className="text-sm font-bold uppercase">{content}</span>}
    {iconPosition === 'right' && icon && (
      <span className="group-hover:scale-125 transition-transform duration-75 group-active:scale-100 group-active:transition-none">
        {icon()}
      </span>
    )}
  </button>
);

export default NavbarButton;

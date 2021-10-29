import { NavBar, NavbarProps } from '../../Elements';

type DefaultLayoutProps = NavbarProps;

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, goBack }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 h-14">
      <NavBar goBack={goBack} />
      <div className="flex flex-col flex-1">{children}</div>
    </div>
  );
};

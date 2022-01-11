import Navbar, { NavbarProps } from '../../Elements/Navbar';
import { Main } from './styles';

type AppLayoutProps = NavbarProps;

const AppLayout: React.FC<AppLayoutProps> = ({ children, prependLeft, appendRight, hideLeft }) => (
  <div id="app-layout" className="flex flex-col min-h-screen">
    <Navbar prependLeft={prependLeft} appendRight={appendRight} hideLeft={hideLeft} />
    <Main>{children}</Main>
    {/* <Footer /> */}
  </div>
);

export default AppLayout;

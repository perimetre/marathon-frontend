import Navbar from '../../Elements/Navbar';

type AppLayoutProps = Record<string, unknown>;

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => (
  <div id="app-layout">
    <Navbar />
    <main>{children}</main>
    {/* <Footer /> */}
  </div>
);

export default AppLayout;

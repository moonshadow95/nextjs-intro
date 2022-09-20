import NavBar from './NavBar';

const Layout = ({ children }: { children: any }) => (
  <>
    <NavBar />
    <div>{children}</div>
  </>
);

export default Layout;

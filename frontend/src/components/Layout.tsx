import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Cart from './Cart';

const Layout = () => {
  return (
    <div className="relative overflow-hidden">
      <Header />

      <Navigation />
      <Cart />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;

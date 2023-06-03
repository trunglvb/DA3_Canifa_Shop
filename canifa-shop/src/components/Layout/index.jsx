import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Routers from '../../routes';
import Header from '../Header';
import Footer from '../Footer';

const Layout = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <>
      <Header />
      <ScrollToTop />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
// import { buildFooter as Footer } from './Footer.jsx';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/*<Footer />*/}
    </>
  );
}

export default Layout;

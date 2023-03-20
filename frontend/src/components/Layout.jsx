import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default Layout;

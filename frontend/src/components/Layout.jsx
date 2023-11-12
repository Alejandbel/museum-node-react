import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navigation/Navbar';

function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>&copy; 2023 Museum app. All rights reserved.</footer>
    </>
  );
}

export default Layout;

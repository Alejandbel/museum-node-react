import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navigation/Navbar';

function Layout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        Footer
      </footer>
    </div>
  );
}

export default Layout;

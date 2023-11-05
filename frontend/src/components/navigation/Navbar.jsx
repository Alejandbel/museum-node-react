import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/login">Login</Link>
    </>
  );
}

export default Navbar;

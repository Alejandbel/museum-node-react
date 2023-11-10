import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/articles">Articles</Link></li>
      <li><Link to="/feedbacks">Feedbacks</Link></li>
      <li><Link to="/exhibits">Exhibits</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  );
}

export default Navbar;

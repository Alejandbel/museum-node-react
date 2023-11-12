import { Link } from 'react-router-dom';
import React from 'react';
import PrivateOrEmpty from './PrivateOrEmpty';
import { useAuth } from '../../hooks/useAuth';
import OnlyPublicOrEmpty from './OnlyPublicOrEmpty';

function UserInfo() {
  const { user } = useAuth();

  return (
    <>
      <p> Hello, {user.firstname} {user.lastname}
      </p>
      <p>TimeZone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
      <Link to="/logout">Logout</Link>
    </>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/articles">Articles</Link></li>
        <li><Link to="/feedbacks">Feedbacks</Link></li>
        <li><Link to="/exhibits">Exhibits</Link></li>
        <OnlyPublicOrEmpty>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/sign-up">Sign Up</Link></li>
        </OnlyPublicOrEmpty>
      </ul>
      <PrivateOrEmpty>
        <UserInfo />
      </PrivateOrEmpty>
    </nav>
  );
}

export default Navbar;

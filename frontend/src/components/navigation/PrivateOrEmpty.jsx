import React from 'react';
import { useAuth } from '../../hooks/useAuth';

function PrivateOrEmpty({ children: Children, allowedRoles }) {
  const { currentUser } = useAuth();

  if (!currentUser || (allowedRoles && !allowedRoles.includes(currentUser.role))) {
    return null;
  }

  return <Children />;
}

export default PrivateOrEmpty;

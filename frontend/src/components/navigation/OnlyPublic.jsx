import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';

const OnlyPublic = ({ children: Children }) => {
  const { currentUser } = useAuth();

  if (currentUser) {
    return <Navigate to="/"/>;
  }

  return <>{Children}</>;
};

export default OnlyPublic;

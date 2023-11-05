import React, { useEffect, useMemo, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from '../config';

const AuthContext = React.createContext(undefined);

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const effect = async () => {
      const user = null;
      setCurrentUser(user);
      setLoading(false);
    };
    effect().catch(console.error);
  }, []);

  async function signup() {
    setLoading(true);
    const user = null; // TODO: signup
    setCurrentUser(user);
    setLoading(false);
  }

  async function login() {
    setLoading(true);
    const user = null; // TODO: login
    setCurrentUser(user);
    setLoading(false);
  }

  function logout() {
    setLoading(true);
    // TODO: logout
    setCurrentUser(null);
    setLoading(false);
  }

  const value = useMemo(() => ({
    currentUser,
    login,
    signup,
    logout,
  }), []);
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  );
}

export default AuthProvider;

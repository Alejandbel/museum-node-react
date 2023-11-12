import React, { useEffect, useMemo, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GOOGLE_CLIENT_ID } from '../config';
import { authService, usersService } from '../services/api';
import { handleAxiosErrorMessageToast } from '../utils/toasts';

export const AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const effect = async () => {
      const user = await usersService.getCurrentUser().catch(handleAxiosErrorMessageToast);
      setCurrentUser(user);
      setLoading(false);
    };

    effect().catch(handleAxiosErrorMessageToast);
  }, []);

  async function signUp({
    email, password, firstname, lastname,
  }) {
    await authService.signUp({
      email, password, firstname, lastname,
    });

    const user = await usersService.getCurrentUser().catch(() => null);
    setCurrentUser(user);
  }

  async function signIn({
    email, password,
  }) {
    await authService.signIn({ email, password });
    const user = await usersService.getCurrentUser().catch(() => null);

    setCurrentUser(user);
  }

  async function signInWithFacebook(token) {
    await authService.signInWithFacebook(token);
    const user = await usersService.getCurrentUser().catch(() => null);
    setCurrentUser(user);
  }

  async function signInWithGoogle(token) {
    await authService.signInWithGoogle(token);
    const user = await usersService.getCurrentUser().catch(() => null);
    setCurrentUser(user);
  }

  async function logout() {
    await authService.logout().catch(handleAxiosErrorMessageToast);
    setCurrentUser(null);
  }

  const value = useMemo(() => ({
    user: currentUser,
    signInWithFacebook,
    signInWithGoogle,
    signUp,
    signIn,
    logout,
  }), [currentUser]);

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthContext.Provider value={value}>
        {!loading && children}
      </AuthContext.Provider>
    </GoogleOAuthProvider>
  );
}

export default AuthProvider;

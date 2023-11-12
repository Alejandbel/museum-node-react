import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { useNavigate } from 'react-router-dom';
import { FACEBOOK_APP_ID } from '../../config';
import { useAuth } from '../../hooks/useAuth';
import Stack from '../../components/Stack';
import LoginForm from './forms/LoginFrom';
import { handleAxiosErrorMessageToast } from '../../utils/toasts';

function LoginPage() {
  const { signInWithGoogle, signInWithFacebook, signIn } = useAuth();
  const navigate = useNavigate();

  const onFacebookLogin = async ({ accessToken }) => {
    try {
      await signInWithFacebook(accessToken);
      navigate('/');
    } catch (err) {
      handleAxiosErrorMessageToast(err);
    }
  };

  const onGoogleLogin = async ({ credential }) => {
    try {
      await signInWithGoogle(credential);
      navigate('/');
    } catch (err) {
      handleAxiosErrorMessageToast(err);
    }
  };

  const onLogin = async (user) => {
    try {
      await signIn(user);
      navigate('/');
    } catch (err) {
      handleAxiosErrorMessageToast(err);
    }
  };

  return (
    <Stack>
      <LoginForm onSubmit={onLogin} />
      <FacebookLogin
        className="button button-green"
        appId={FACEBOOK_APP_ID}
        onSuccess={onFacebookLogin}
      />
      <GoogleLogin onSuccess={onGoogleLogin} />
    </Stack>
  );
}

export default LoginPage;

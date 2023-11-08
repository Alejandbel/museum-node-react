import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { FACEBOOK_APP_ID } from '../../config';
import { useAuth } from '../../hooks/useAuth';

function LoginPage() {
  const { signInWithGoogle, signInWithFacebook } = useAuth();

  return (
    <>
      <FacebookLogin
        appId={FACEBOOK_APP_ID}
        onSuccess={(response) => {
          signInWithFacebook(response.accessToken);
        }}
      />
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          signInWithGoogle(credentialResponse.credential);
        }}
      />
    </>
  );
}

export default LoginPage;

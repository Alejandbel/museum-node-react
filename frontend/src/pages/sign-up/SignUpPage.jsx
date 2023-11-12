import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import SignUpForm from './forms/SignUpForm';
import Stack from '../../components/Stack';
import { handleAxiosErrorMessageToast } from '../../utils/toasts';

function SignUpPage() {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const onSignUp = async (formData) => {
    try {
      await signUp(formData);
      navigate('/');
    } catch (err) {
      handleAxiosErrorMessageToast(err);
    }
  };

  return (
    <Stack>
      <SignUpForm onSubmit={onSignUp} />
    </Stack>
  );
}

export default SignUpPage;

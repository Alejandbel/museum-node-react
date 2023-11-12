import React, { useRef } from 'react';
import Joi from 'joi';
import Input from '../../../components/forms/Input';
import { validateOrToast } from '../../../utils/toasts';

const loginSchema = Joi.object({
  email: Joi.string().required().email({ tlds: false }),
  password: Joi.string().required(),
});

function LoginForm({ onSubmit }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const onFormSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    validateOrToast(loginSchema, { email, password }, onSubmit);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <Input ref={emailRef} type="email" minLength="1" name="email" label="Email" />
      <Input ref={passwordRef} type="password" minLength="4" name="password" label="Password" />
      <button className="button button-green" type="submit">Sign in</button>
    </form>
  );
}

export default LoginForm;

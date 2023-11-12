import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import Input from '../../../components/forms/Input';

function SignUpForm({ onSubmit }) {
  const emailRef = useRef(null);
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const firstname = firstnameRef.current.value;
    const lastname = lastnameRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirm = passwordConfirmRef.current.value;

    if (password !== passwordConfirm) {
      toast.error('Passwords does not match');
      return;
    }

    onSubmit({
      email, firstname, lastname, password,
    });
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <Input ref={emailRef} type="email" name="email" label="Email" />
      <Input ref={firstnameRef} ftype="text" name="firstname" label="First name" />
      <Input ref={lastnameRef} type="text" name="lastname" label="Last name" />
      <Input ref={passwordRef} type="password" name="password" label="Password" />
      <Input ref={passwordConfirmRef} type="password" name="passwordConfirm" label="Confirm password" />
      <button className="button button-green" type="submit">Sign up</button>
    </form>
  );
}

export default SignUpForm;

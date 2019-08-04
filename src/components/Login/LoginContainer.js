import React from 'react';
import Login from './Login';

const onSubmit = (formData) => {
  console.log(formData);
}

const LoginContainer = (props) => {
  return (
    <Login onSubmit={onSubmit} />
  )
}

export default LoginContainer;

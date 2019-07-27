import React from 'react';
import s from './Login.module.css';
import { Field, reduxForm } from 'redux-form';


const LoginForm = (props) => {
  const { handleSubmit, reset } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="login" component="input" type="text" placeholder="login" />
      </div>
      <div>
        <Field name="password" component="input" type="text" placeholder="password" />
      </div>
      <div>
        <Field name="rememberMe" component="input" type="checkbox" />
        <label htmlFor="rememberMe">Remember Me</label>
      </div>
      <div>
        <button type="submit">Submit</button>
        <button onClick={reset}>Reset</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }

  return (
    <div className={s.content}>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login;

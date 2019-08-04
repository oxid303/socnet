import React from 'react';
import s from './Login.module.css';
import { Field, reduxForm, reset } from 'redux-form';
import { required, maxLength, email } from '../../utils/validators';
import {Input} from '../common/FormsControls/FormControl';

const maxLength20 = maxLength(20);

const afterSubmit = (result, dispatch) => {
  dispatch(reset('login'));
}

const Login = (props) => {
  const { handleSubmit, reset } = props;

  return (
    <div className={s.container}>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="email"
            component={Input}
            placeholder="email"
            validate={[required, email]} />
        </div>
        <div>
          <Field
            name="password"
            component={Input}
            placeholder="password"
            validate={[required, maxLength20]} />
        </div>
        <div>
          <Field name="rememberMe" component={Input} type="checkbox" />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <div>
          <button type="submit">Submit</button>
          <button onClick={reset}>Reset</button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'login',
  onSubmitSuccess: afterSubmit
})(Login);

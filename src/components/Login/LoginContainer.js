import React from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import { loginMe, logoutMe } from '../../Redux/authReducer';
import {Redirect} from 'react-router-dom';

const LoginContainer = (props) => {
  const onSubmit = (formData) => {
    const { email, password, rememberMe } = formData;
    props.loginMe(email, password, rememberMe);
  }

  if (props.isAuth) return <Redirect to='/profile' />;
  return <Login onSubmit={onSubmit} />
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { loginMe, logoutMe })(LoginContainer);

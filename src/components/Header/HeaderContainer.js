import React from 'react';
import Header from './Header/Header';
import { connect } from 'react-redux';
import * as ActionCreators from '../../Redux/authReducer';
import * as axios from 'axios';

class HeaderContainer extends React.Component {
  axiosGet() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true }).then(responce => {
      let {id, email, login} = responce.data.data;
      if (responce.data.resultCode === 0) this.props.setAuthUserData(id, email, login);
    })
  }

  componentDidMount() {
    this.axiosGet();
  }

  render() {
    return (
      <Header {...this.props} />
    )
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, ActionCreators)(HeaderContainer);

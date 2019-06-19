import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import * as ActionCreators from '../../Redux/authReducer';
import { authMe } from '../../api/api';

class HeaderContainer extends React.Component {
  axiosGet() {
    authMe().then(data => {
      let {id, email, login} = data.data;
      if (data.resultCode === 0) this.props.setAuthUserData(id, email, login);
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

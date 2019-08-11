import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logoutMe } from '../../Redux/authReducer';

class HeaderContainer extends React.Component {

  render() {
    return (
      <Header {...this.props} />
    )
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  logoutInProcess: state.auth.logoutInProcess
})

export default connect(mapStateToProps, { logoutMe })(HeaderContainer);

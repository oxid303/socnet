import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import * as ActionCreators from '../../Redux/authReducer';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.authMe();
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

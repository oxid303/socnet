import React from 'react';
import Profile from './Profile';
import * as ActionCreators from '../../Redux/profileReducer';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import { withRouter, Redirect } from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.userId || this.props.authId;
    if (id) this.props.viewUser(id);
  }

  render() {
    if (!this.props.isAuth) return <Redirect to="/login" />
    return (
      <>
        {this.props.isFetching ? <Preloader /> : <Profile {...this.props} />}
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
    postTextArea: state.profile.postTextArea,
    userInfo: state.profile.userInfo,
    isFetching: state.profile.isFetching,
    authId: state.auth.id,
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, ActionCreators)(withRouter(ProfileContainer));

import React from 'react';
import Profile from './Profile';
import * as ActionCreators from '../../Redux/profileReducer';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);

    if (this.props.match.params.userId) this.props.viewUser(this.props.match.params.userId)
    else
      if (this.props.isAuth) this.props.viewUser(this.props.authId)
      else this.props.authMeAndViewUser();
  }

  render() {
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
    isAuth: state.auth.isAuth,
    authId: state.auth.id
  }
}

export default connect(mapStateToProps, ActionCreators)(withRouter(ProfileContainer));

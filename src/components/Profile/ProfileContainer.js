import React from 'react';
import Profile from './Profile';
import * as ActionCreators from '../../Redux/profileReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.userId || this.props.authId || 2;
    this.props.getStatus(id);
    this.props.getUser(id);
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
    status: state.profile.status,
    setStatus: state.profile.setStatus,
    authId: state.auth.id
  }
}

export default compose(
  connect(mapStateToProps, ActionCreators),
  withRouter
)(ProfileContainer);

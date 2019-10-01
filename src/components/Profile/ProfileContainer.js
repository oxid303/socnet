import React from 'react';
import Profile from './Profile';
import * as ActionCreators from '../../Redux/profileReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import { withRouter, Redirect } from 'react-router-dom';
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.paramsId = +this.props.match.params.userId;
    this.isMyProfile = this.paramsId === this.props.authId || !this.paramsId;
  }

  componentDidMount() {
    const id = this.paramsId || this.props.authId;
    if (id) {
      this.props.getStatus(id);
      this.props.getUser(id);
    }
  }

  render() {
    if (!this.props.isAuth && !this.paramsId) return <Redirect to="/login" />;

    return (
      <>
        {this.props.isFetching
          ? <Preloader />
          : <Profile
            {...this.props}
            isMyProfile={this.isMyProfile} />}
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    posts: state.profile.posts,
    userInfo: state.profile.userInfo,
    isFetching: state.profile.isFetching,
    status: state.profile.status,
    statusIsFetching: state.profile.statusIsFetching,
    updateStatus: state.profile.updateStatus,
    authId: state.auth.id,
    isAuth: state.auth.isAuth
  }
}

export default compose(
  connect(mapStateToProps, ActionCreators),
  withRouter
)(ProfileContainer);

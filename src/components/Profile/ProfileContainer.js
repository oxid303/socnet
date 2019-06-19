import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import * as ActionCreators from '../../Redux/profileReducer';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

  axiosGet() {
    this.props.toggleIsFetching(true);
    let id = this.props.match.params.userId || this.props.authId;
    if (id === null) {
      this.props.toggleIsFetching(false);
      return;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(responce => {
      this.props.setUserInfo(responce.data);
      this.props.toggleIsFetching(false);
    }).catch(() => {
      this.props.setUserInfo({fullName: 'No such user or directory'});
      this.props.toggleIsFetching(false);
    })
  }

  componentDidMount() {
    this.axiosGet();
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
    authId: state.auth.id
  }
}

let ProfileRouterContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, ActionCreators)(ProfileRouterContainer);

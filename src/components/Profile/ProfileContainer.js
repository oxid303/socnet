import React from 'react';
import Profile from './Profile';
import * as ActionCreators from '../../Redux/profileReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Preloader from '../common/Preloader/Preloader';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isAuth: this.props.isAuth}
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.match.params.userId && prevProps.isAuth !== this.state.isAuth) {
      this.setState({isAuth: this.props.isAuth});
      this.props.getStatus(this.props.authId);
      this.props.getUser(this.props.authId);
    }
  }

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
    updateStatus: state.profile.updateStatus,
    authId: state.auth.id,
    isAuth: state.auth.isAuth
  }
}

export default compose(
  connect(mapStateToProps, ActionCreators),
  withRouter
)(ProfileContainer);

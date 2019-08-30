import React from 'react';
import * as ActionCreators from '../../Redux/usersReducer';
import * as Selectors from '../../Redux/usersSelectors';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    if (pageNumber === this.props.currentPage) return;
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  }

  render() {
    console.log('users render');
    
    return (
      <>
        {this.props.isFetching ?
          <Preloader /> :
          <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            followingInProgress={this.props.followingInProgress}

            follow={this.props.follow}
            unfollow={this.props.unfollow}
            toggleFollowingInProgress={this.props.toggleFollowingInProgress}
            onPageChanged={this.onPageChanged}

            unfollowUser={this.props.unfollowUser}
            followUser={this.props.followUser}
          />
        }
      </>
    )
  }
}

// let mapStateToProps = (state) => ({
//   users: state.users.users,
//   pageSize: state.users.pageSize,
//   totalUsersCount: state.users.totalUsersCount,
//   currentPage: state.users.currentPage,
//   isFetching: state.users.isFetching,
//   followingInProgress: state.users.followingInProgress
// })

let mapStateToProps = (state) => {
  console.log('users mstp');
  
  return {
    users: Selectors.getUsers(state),
    pageSize: Selectors.getPageSize(state),
    totalUsersCount: Selectors.getTotalUsersCount(state),
    currentPage: Selectors.getCurrentPage(state),
    isFetching: Selectors.getIsFetching(state),
    followingInProgress: Selectors.getFollowingInProgress(state)
  }
}

export default connect(mapStateToProps, ActionCreators)(UsersContainer);

import React from 'react';
import * as ActionCreators from '../../Redux/usersReducer';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { getUsersPage } from '../../api/api';

class UsersContainer extends React.Component {

  axiosGet(currentPage) {
    this.props.toggleIsFetching(true);
    getUsersPage(currentPage, this.props.pageSize).then(data => {
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
      this.props.toggleIsFetching(false);
    })
  }

  componentDidMount() {
    this.axiosGet(this.props.currentPage);
  }

  onPageChanged = (pageNumber) => {
    if (pageNumber === this.props.currentPage) return;
    this.props.setCurrentPage(pageNumber);
    this.axiosGet(pageNumber);
  }

  render() {
    return (
      <>
        {this.props.isFetching ?
          <Preloader /> :
          <Users
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}

            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onPageChanged={this.onPageChanged}
          />
        }
      </>
    )
  }
}

let mapStateToProps = (state) => ({
  users: state.users.users,
  pageSize: state.users.pageSize,
  totalUsersCount: state.users.totalUsersCount,
  currentPage: state.users.currentPage,
  isFetching: state.users.isFetching
})

export default connect(mapStateToProps, ActionCreators)(UsersContainer);

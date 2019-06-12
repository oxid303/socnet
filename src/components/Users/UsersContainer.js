import React from 'react';
import * as ActionCreators from '../../Redux/usersReducer';
import * as axios from 'axios';
import { connect } from 'react-redux';
import Users from './Users/Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

  axiosGet(currentPage) {
    this.props.toggleIsFetching(true);
    this.props.setUsers([]);
    this.props.setTotalUsersCount(0);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(responce => {
      let items = responce.data.items || [];
      this.props.setUsers(items);
      this.props.setTotalUsersCount(responce.data.totalCount);
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
        {this.props.isFetching ? <Preloader /> : undefined}
        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}

          followed={this.props.followed}
          onPageChanged={this.onPageChanged}
        />
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching
  }
}

let dispatch = {};
for (const key in ActionCreators) {
  dispatch[key] = ActionCreators[key];
}

export default connect(mapStateToProps, dispatch)(UsersContainer);

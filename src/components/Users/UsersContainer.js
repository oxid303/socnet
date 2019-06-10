import Users from './Users/UsersC';
import { followCreator, unfollowCreator, setUsersCreator, setTotalUsersCountCreator, setCurrentPageCreator } from '../../Redux/usersReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => {
      dispatch(followCreator(id));
    },
    unfollow: (id) => {
      dispatch(unfollowCreator(id));
    },
    setUsers: (users) => {
      dispatch(setUsersCreator(users));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountCreator(totalUsersCount));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageCreator(pageNumber));
    }
  }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

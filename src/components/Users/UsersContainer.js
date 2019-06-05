import Users from './Users/Users';
import {followCreator, unfollowCreator, setUsersCreator} from '../../Redux/usersReducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    users: state.users.users,
    showUsersNumber: state.users.showUsersNumber
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
    }
  }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

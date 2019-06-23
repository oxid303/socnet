import { APIgetUsersPage, APIfollowUser, APIunfollowUser } from '../api/api';

const FOLLOW = 'USERS-FOLLOW';
const UNFOLLOW = 'USERS-UNFOLLOW';
const SET_USERS = 'USERS-SET-USERS';
const SET_TOTAL_USERS_COUNT = 'USERS-SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'USERS-SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'USERS-TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'USERS-TOGGLE-FOLLOWING-IN-PROGRESS';

export const follow = (id) => ({ type: FOLLOW, id });
export const unfollow = (id) => ({ type: UNFOLLOW, id });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingInProgress = (id, isProgress) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, id, isProgress });

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    APIgetUsersPage(currentPage, pageSize).then(data => {
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(toggleIsFetching(false));
    })
  }
}
export const followUser = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(id, true));
    APIfollowUser(id)
      .then(resultCode => {
        if (resultCode === 0) dispatch(follow(id));
        dispatch(toggleFollowingInProgress(id, false));
      })
  }
}
export const unfollowUser = (id) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(id, true));
    APIunfollowUser(id)
      .then(resultCode => {
        if (resultCode === 0) dispatch(unfollow(id));
        dispatch(toggleFollowingInProgress(id, false));
      })
  }
}

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.id) {
            return {
              ...u,
              followed: true
            }
          }
          return u;
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.id) {
            return {
              ...u,
              followed: false
            }
          }
          return u;
        })
      }

    case SET_USERS:
      return { ...state, users: action.users }

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount }

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }

    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isProgress
          ? [...state.followingInProgress, action.id]
          : state.followingInProgress.filter(id => id !== action.id)
      }

    default:
      return state;
  }
}

export default usersReducer;

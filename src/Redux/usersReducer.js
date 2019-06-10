const FOLLOW = 'USERS-FOLLOW';
const UNFOLLOW = 'USERS-UNFOLLOW';
const SET_USERS = 'USERS-SET-USERS';
const SET_TOTAL_USERS_COUNT = 'USERS-SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'USERS-SET-CURRENT-PAGE';

export let followCreator = (id) => ({ type: FOLLOW, id: id });
export let unfollowCreator = (id) => ({ type: UNFOLLOW, id: id });
export let setUsersCreator = (users) => ({ type: SET_USERS, users: users });
export let setTotalUsersCountCreator = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount });
export let setCurrentPageCreator = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1
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
      return {
        ...state,
        users: action.users
      }

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }

    default:
      return state;
  }
}

export default usersReducer;

const FOLLOWED = 'USERS-FOLLOWED';
const SET_USERS = 'USERS-SET-USERS';
const SET_TOTAL_USERS_COUNT = 'USERS-SET-TOTAL-USERS-COUNT';
const SET_CURRENT_PAGE = 'USERS-SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'USERS-TOGGLE-IS-FETCHING';

export let followed = (id) => ({ type: FOLLOWED, id: id });
export let setUsers = (users) => ({ type: SET_USERS, users: users });
export let setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalUsersCount });
export let setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export let toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true
}

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOWED:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.id) {
            return {
              ...u,
              followed: !(u.followed)
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

    default:
      return state;
  }
}

export default usersReducer;

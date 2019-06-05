const FOLLOW = 'USERS-FOLLOW';
const UNFOLLOW = 'USERS-UNFOLLOW';
const SET_USERS = 'USERS-SET-USERS';

export let followCreator = (id) => ({ type: FOLLOW, id: id });
export let unfollowCreator = (id) => ({ type: UNFOLLOW, id: id });
export let setUsersCreator = (users) => ({ type: SET_USERS, users: users });

let initialState = {
  users: [],
  showUsersNumber: 5
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
        users: [...state.users, ...action.users]
      }

    default:
      return state;
  }
}

export default usersReducer;

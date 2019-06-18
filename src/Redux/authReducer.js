const SET_AUTH_USER_DATA = 'AUTH-SET-AUTH-USER-DATA';

export let setAuthUserData = (id, email, login) => ({ type: SET_AUTH_USER_DATA, userData: {id, email, login} });

let initialState = {
  isAuth: false,
  isFetching: false,
  id: null,
  email: null,
  login: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.userData,
        isAuth: true
      };

    default:
      return state;
  }
}

export default authReducer;

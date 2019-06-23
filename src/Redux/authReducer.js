import { APIauthMe } from '../api/api';

const SET_AUTH_USER_DATA = 'AUTH-SET-AUTH-USER-DATA';

export const setAuthUserData = (id, email, login) => ({ type: SET_AUTH_USER_DATA, userData: {id, email, login} });

export const authMe = () => {
  return (dispatch) => {
    APIauthMe().then(data => {
      let {id, email, login} = data.data;
      if (data.resultCode === 0) dispatch(setAuthUserData(id, email, login));
    })
  }
}

let initialState = {
  isAuth: false,
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

import { APIauthMe, APIlogin, APIlogout } from '../api/api';

const SET_AUTH_USER_DATA = 'AUTH-SET-AUTH-USER-DATA';

export const setAuthUserData = (isAuth, id, email, login) =>
  ({ type: SET_AUTH_USER_DATA, payload: { id, email, login, isAuth } });

export const authMe = () => (dispatch) => {
  APIauthMe()
    .then(data => {
      let { id, email, login } = data.data;
      if (data.resultCode === 0) dispatch(setAuthUserData(true, id, email, login));
    })
}
export const loginMe = (email, password, rememberMe) => (dispatch) => {
  APIlogin(email, password, rememberMe)
    .then(responce => {
      if (responce.data.resultCode === 0) dispatch(authMe());
    });
}
export const logoutMe = () => (dispatch) => {
  APIlogout()
    .then(result => {
      if (result.data.resultCode === 0) dispatch(setAuthUserData(false, null, null, null))
    });
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
        ...action.payload
      };

    default:
      return state;
  }
}

export default authReducer;

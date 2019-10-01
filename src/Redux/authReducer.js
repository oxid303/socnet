import { APIauthMe, APIlogin, APIlogout } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_AUTH_USER_DATA = 'AUTH-SET-AUTH-USER-DATA';
const LOGOUT_IN_PROCESS = 'AUTH-LOGOUT-IN-PROCESS';

export const setAuthUserData = (isAuth, id, email, login) =>
  ({ type: SET_AUTH_USER_DATA, payload: { isAuth, id, email, login } });
const toggleLogoutInProcess = (logoutInProcess) => ({ type: LOGOUT_IN_PROCESS, logoutInProcess });

export const authMe = () => (dispatch) => {
  return APIauthMe()
    .then(data => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserData(true, id, email, login));
      }
    })
}
export const loginMe = (email, password, rememberMe) => (dispatch) => {
  APIlogin(email, password, rememberMe)
    .then(responce => {
      if (responce.data.resultCode === 0) {
        dispatch(authMe())
      } else {
        let message = responce.data.messages.length > 0 ? responce.data.messages[0] : 'Some error';
        // dispatch(stopSubmit('login', { email: 'email is wrong', password: 'password is wrong' }));
        dispatch(stopSubmit('login', { _error: message }));
      };
    });
}
export const logoutMe = () => (dispatch) => {
  let isConfirmLogout = window.confirm("Are you sure you want to logout?");
  if (!isConfirmLogout) return;

  dispatch(toggleLogoutInProcess(true));
  APIlogout()
    .then(result => {
      if (result.data.resultCode === 0) {
        dispatch(setAuthUserData(false, null, null, null));
        dispatch(toggleLogoutInProcess(false));
      }
    });
}

let initialState = {
  isAuth: false,
  id: null,
  email: null,
  login: null,
  logoutInProcess: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.payload
      };

    case LOGOUT_IN_PROCESS:
      return {
        ...state,
        logoutInProcess: action.logoutInProcess
      }

    default:
      return state;
  }
}

export default authReducer;

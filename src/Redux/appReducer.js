import {authMe} from './authReducer';

const INITIALIZED_SUCCESS = 'APP-INITIALIZED-SUCCESS';

export const setInitialized = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
  let authMePromise = dispatch(authMe());
  
  Promise.all([authMePromise])
    .then(() => {
      dispatch(setInitialized());
    })
}

let initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };

    default:
      return state;
  }
}

export default appReducer;

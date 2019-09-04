import { APIgetUserData, APIgetStatus, APIupdateStatus } from '../api/api';

const ADD_POST = 'PROFILE-ADD-POST';
const SET_USER_INFO = 'PROFILE-SET-USER-INFO';
const IS_FETCHING = 'PROFILE-IS-FETCHING';
const SET_STATUS = 'PROFILE-SET-STATUS';
const STATUS_IS_FETCHING = 'PROFILE-STATUS-IS-FETCHING';

export const addPost = (message) => ({ type: ADD_POST, message });
export const setUserInfo = (userInfo) => ({ type: SET_USER_INFO, userInfo });
export const toggleIsFetching = (isFetching) => ({ type: IS_FETCHING, isFetching });
export const setStatus = (status) => ({ type: SET_STATUS, status });
const statusIsFetching = (statusIsFetching) => ({ type: STATUS_IS_FETCHING, statusIsFetching });

export const getUser = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    APIgetUserData(id)
      .then(data => {
        dispatch(setUserInfo(data));
        dispatch(toggleIsFetching(false));
      })
  }
}
export const getStatus = (id) => {
  return (dispatch) => {
    APIgetStatus(id)
      .then(responce => dispatch(setStatus(responce.data)));
  }
}
export const updateStatus = (text) => {
  return (dispatch) => {
    dispatch(statusIsFetching(true));
    APIupdateStatus(text)
      .then(responce => {
        if (responce.data.resultCode === 0) {
          dispatch(setStatus(text));
          dispatch(statusIsFetching(false));
        }
      });
  }
}

let initialState = {
  posts: [],
  userInfo: {
    aboutMe: null,
    contacts: {
      facebook: null,
      github: null,
      instagram: null,
      mainLink: null,
      twitter: null,
      vk: null,
      website: null,
      youtube: null
    },
    fullName: null,
    lookingForAJob: null,
    lookingForAJobDescription: null,
    photos: {
      large: null,
      small: null
    },
    userId: null
  },
  isFetching: false,
  status: '',
  statusIsFetching: false
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      if (action.message === '') return state;

      let post = {
        id: state.posts.length + 1,
        message: action.message,
        likesCount: 0
      };
      return {
        ...state,
        posts: [post, ...state.posts]
      };

    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo
      }

    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }

    case SET_STATUS:
      return {
        ...state,
        status: action.status ? action.status : ''
      }

    case STATUS_IS_FETCHING:
      return {
        ...state,
        statusIsFetching: action.statusIsFetching
      }

    default:
      return state;
  };
};

export default profileReducer;

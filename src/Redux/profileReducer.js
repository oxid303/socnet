import { APIgetUserData, APIgetStatus, APIupdateStatus } from '../api/api';

const ADD_POST = 'PROFILE-ADD-POST';
const SET_USER_INFO = 'PROFILE-SET-USER-INFO';
const IS_FETCHING = 'PROFILE-IS-FETCHING';
const SET_STATUS = 'PROFILE-SET-STATUS';

export const addPost = (message) => ({ type: ADD_POST, message });
export const setUserInfo = (userInfo) => ({ type: SET_USER_INFO, userInfo });
export const toggleIsFetching = (isFetching) => ({ type: IS_FETCHING, isFetching });
export const setStatus = (status) => ({ type: SET_STATUS, status });

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
    APIupdateStatus(text)
      .then(responce => {
        if (responce.data.resultCode === 0) {
          dispatch(setStatus(text));
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
    fullName: 'No such user or directory',
    lookingForAJob: false,
    lookingForAJobDescription: null,
    photos: {
      large: null,
      small: null
    },
    userId: null
  },
  isFetching: false,
  status: ''
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

    default:
      return state;
  };
};

export default profileReducer;

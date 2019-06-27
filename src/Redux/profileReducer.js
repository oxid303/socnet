import { APIgetUserData, APIgetStatus, APIsetStatus } from '../api/api';

const TYPING_POST = 'PROFILE-TYPING-POST';
const ADD_POST = 'PROFILE-ADD-POST';
const SET_USER_INFO = 'PROFILE-SET-USER-INFO';
const IS_FETCHING = 'PROFILE-IS-FETCHING';
const TYPING_STATUS = 'PROFILE-TYPING-STATUS';
const VIEW_STATUS = 'PROFILE-VIEW-STATUS';

export const typingPost = (message) => ({ type: TYPING_POST, message });
export const addPost = () => ({ type: ADD_POST });
export const setUserInfo = (userInfo) => ({ type: SET_USER_INFO, userInfo });
export const toggleIsFetching = (isFetching) => ({ type: IS_FETCHING, isFetching });
export const typingStatus = (message) => ({ type: TYPING_STATUS, message });
export const viewStatus = (status) => ({ type: VIEW_STATUS, status });

export const getUser = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    APIgetUserData(id).then(data => {
      dispatch(setUserInfo(data));
      dispatch(toggleIsFetching(false));
    })
  }
}
export const getStatus = (id) => {
  return (dispatch) => {
    APIgetStatus(id).then(responce => dispatch(viewStatus(responce.data)));
  }
}
export const setStatus = (text) => {
  return (dispatch) => {
    APIsetStatus(text).then(responce => {alert(responce); console.log(responce)});
  }
}

let initialState = {
  posts: [],
  postTextArea: '',
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
    case TYPING_POST:
      return {
        ...state,
        postTextArea: action.message
      };

    case ADD_POST:
      if (state.postTextArea === '') return state;

      let newPost = {
        id: state.posts.length + 1,
        message: state.postTextArea,
        likesCount: 0
      };
      return {
        ...state,
        posts: [newPost, ...state.posts],
        postTextArea: ''
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

    case TYPING_STATUS:
      return {
        ...state,
        status: action.message
      }

    case VIEW_STATUS:
      return {
        ...state,
        status: action.status ? action.status : ''
      }

    default:
      return state;
  };
};

export default profileReducer;

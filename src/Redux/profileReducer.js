const TYPING_POST = 'PROFILE-TYPING-POST';
const ADD_POST = 'PROFILE-ADD-POST';
const SET_USER_INFO = 'PROFILE-SET-USER-INFO';
const IS_FETCHING = 'PROFILE-IS-FETCHING';

export const typingPost = (message) => ({ type: TYPING_POST, message });
export const addPost = () => ({ type: ADD_POST });
export const setUserInfo = (userInfo) => ({ type: SET_USER_INFO, userInfo });
export const toggleIsFetching = (isFetching) => ({ type: IS_FETCHING, isFetching });

let initialState = {
  posts: [],
  postTextArea: '',
  userInfo: null,
  isFetching: false
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

    default:
      return state;
  };
};

export default profileReducer;

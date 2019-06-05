const TYPING_POST = 'PROFILE-TYPING-POST';
const ADD_POST = 'PROFILE-ADD-POST';

export const typingPostCreator = (message) => ({ type: TYPING_POST, message: message });
export const addPostCreator = () => ({ type: ADD_POST });

let initialState = {
  posts: [],
  postTextArea: '',
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
        posts: [...state.posts, newPost],
        postTextArea: ''
      };

    default:
      return state;
  };
};

export default profileReducer;

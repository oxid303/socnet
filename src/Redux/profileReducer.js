const typePost = 'TYPE-POST';
const addPost = 'ADD-POST';

export const typePostCreator = (message) => ({ type: typePost, message: message });
export const addPostCreator = () => ({ type: addPost });

let initialState = {
  posts: [],
  postTextArea: '',
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case typePost:
      return {
        ...state,
        postTextArea: action.message
      };

    case addPost:
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

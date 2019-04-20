const typePost = 'type-post';
const addPost = 'add-post';

export const typePostCreator = (message) => ({ type: typePost, message: message });
export const addPostCreator = () => ({ type: addPost });

let initialState = {posts: [], postTextArea: ''};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case typePost:
      state.postTextArea = action.message;
      break;

    case addPost:
      if (state.postTextArea === '') break;

      let newPost = {
        id: state.posts.length + 1,
        message: state.postTextArea,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.postTextArea = '';
      break;

    default:
      break;
  };

  return state;
};

export default profileReducer;

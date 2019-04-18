const typePost = 'type-post';
const addPost = 'add-post';

export const typePostCreator = (message) => ({type: typePost, message: message});
export const addPostCreator = () => ({type: addPost});

const profileReducer = (state, action) => {
  if (action.type === typePost) {
    state.postTextArea = action.message;
  };

  if (action.type === addPost) {
    if (state.postTextArea === '') return;

    let newPost = {
      id: state.posts.length + 1,
      message: state.postTextArea,
      likesCount: 0
    };
    state.posts.push(newPost);
    state.postTextArea = '';
  };

  return state;
};

export default profileReducer;

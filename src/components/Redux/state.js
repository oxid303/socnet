let rerender;

let subscribe = (observer) => {
  rerender = observer;
};

let state = {
  subscribe: subscribe,
  profile: {
    posts: [
      { id: 1, message: 'Hi :)', likesCount: 15 },
      { id: 2, message: 'How are you?', likesCount: 23 }
    ],
    addPost: addPost,
    typing: typing,
    textArea: ''
  },
  dialogs: {
    users: [
      { id: 1, name: 'Ann' },
      { id: 2, name: 'Denis' },
      { id: 3, name: 'Kris' },
      { id: 4, name: 'Pasha' },
      { id: 5, name: 'Lars' }
    ],
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Test message' },
      { id: 4, message: 'What\'s new?' },
      { id: 5, message: 'Everything ok :)' }
    ]
  }
};

function addPost() {
  if (state.profile.textArea === '') return;

  let newPost = {
    id: state.profile.posts.length + 1,
    message: state.profile.textArea,
    likesCount: 0
  };
  state.profile.posts.push(newPost);
  state.profile.textArea = '';
  rerender();
};

function typing(message) {
  state.profile.textArea = message;
  rerender();
};

export default state;

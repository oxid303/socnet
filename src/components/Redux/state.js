let store = {
  _rerender() { },
  subscribe(observer) { this._rerender = observer },

  getState() {
    return this._state;
  },

  dispatch(action) {
    if (action.type === 'typing') {
      this._state.profile.textArea = action.message;
      this._rerender();
    };

    if (action.type === 'add-post') {

      if (this._state.profile.textArea === '') return;

      let newPost = {
        id: this._state.profile.posts.length + 1,
        message: this._state.profile.textArea,
        likesCount: 0
      };
      this._state.profile.posts.push(newPost);
      this._state.profile.textArea = '';
      this._rerender();
    };
  },

  _state: {
    profile: {
      posts: [
        { id: 1, message: 'Hi :)', likesCount: 15 },
        { id: 2, message: 'How are you?', likesCount: 23 }
      ],
      textArea: '',

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
  }
};

export default store;

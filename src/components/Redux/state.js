const typePost = 'type-post';
const addPost = 'add-post';
const typeMessage = 'type-message';
const addMessage = 'add-message';

export const typePostCreator = (message) => ({type: typePost, message: message});
export const addPostCreator = () => ({type: addPost});
export const typeMessageCreator = (message) => ({type: typeMessage, message: message});
export const addMessageCreator = () => ({type: addMessage});

let store = {
  _rerender() { },
  subscribe(observer) { this._rerender = observer },

  getState() {
    return this._state;
  },

  dispatch(action) {
    if (action.type === typePost) {
      this._state.profile.postTextArea = action.message;
      this._rerender(this);
    };

    if (action.type === addPost) {
      if (this._state.profile.postTextArea === '') return;

      let newPost = {
        id: this._state.profile.posts.length + 1,
        message: this._state.profile.postTextArea,
        likesCount: 0
      };
      this._state.profile.posts.push(newPost);
      this._state.profile.postTextArea = '';
      this._rerender(this);
    };

    if (action.type === typeMessage) {
      this._state.dialogs.messageTextArea = action.message;
      this._rerender(this);
    };

    if (action.type === addMessage) {
      if (this._state.dialogs.messageTextArea === '') return;

      let newMessage = {
        id: this._state.dialogs.messages.length + 1,
        message: this._state.dialogs.messageTextArea
      }
      this._state.dialogs.messages.push(newMessage);
      this._state.dialogs.messageTextArea = '';
      this._rerender(this);
    };
  },

  _state: {
    profile: {
      posts: [
        { id: 1, message: 'Hi :)', likesCount: 15 },
        { id: 2, message: 'How are you?', likesCount: 23 }
      ],
      postTextArea: ''
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
      ],
      messageTextArea: ''
    }
  }
};

export default store;

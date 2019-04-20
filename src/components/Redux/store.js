import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';

let store = {
  _callSubscriber() { },
  subscribe(observer) { this._callSubscriber = observer },

  getState() {
    return this._state;
  },

  dispatch(action) {

    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);
    this._callSubscriber(this._state);
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

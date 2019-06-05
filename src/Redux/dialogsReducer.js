const TYPING_MESSAGE = 'DIALOGS-TYPING-MESSAGE';
const ADD_MESSAGE = 'DIALOGS-ADD-MESSAGE';

export const typingMessageCreator = (message) => ({ type: TYPING_MESSAGE, message: message });
export const addMessageCreator = () => ({ type: ADD_MESSAGE });

let initialState = {
  users: [
    {id: 1, name: 'Ann'},
    {id: 2, name: 'Denis'},
    {id: 3, name: 'Someone'},
  ],
  messages: [],
  messageTextArea: '',
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case TYPING_MESSAGE:
      return {
        ...state,
        messageTextArea: action.message
      };

    case ADD_MESSAGE:
      if (state.messageTextArea === '') return state;

      let newMessage = {
        id: state.messages.length + 1,
        message: state.messageTextArea
      }
      return {
        ...state,
        messages: [...state.messages, newMessage],
        messageTextArea: ''
      };

    default:
      return state;
  };
};

export default dialogsReducer;

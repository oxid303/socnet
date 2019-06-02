const typeMessage = 'TYPE-MESSAGE';
const addMessage = 'ADD-MESSAGE';

export const typeMessageCreator = (message) => ({ type: typeMessage, message: message });
export const addMessageCreator = () => ({ type: addMessage });

let initialState = {
  users: [],
  messages: [],
  messageTextArea: '',
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case typeMessage:
      return {
        ...state,
        messageTextArea: action.message
      };

    case addMessage:
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

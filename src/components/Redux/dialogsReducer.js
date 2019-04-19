const typeMessage = 'type-message';
const addMessage = 'add-message';

export const typeMessageCreator = (message) => ({ type: typeMessage, message: message });
export const addMessageCreator = () => ({ type: addMessage });

const dialogsReducer = (state, action) => {

  switch (action.type) {
    case typeMessage:
      state.messageTextArea = action.message;
      break;

    case addMessage:
      if (state.messageTextArea === '') return;

      let newMessage = {
        id: state.messages.length + 1,
        message: state.messageTextArea
      }
      state.messages.push(newMessage);
      state.messageTextArea = '';
      break;

    default:
      break;
  };

  return state;
};

export default dialogsReducer;
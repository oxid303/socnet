const typeMessage = 'type-message';
const addMessage = 'add-message';

export const typeMessageCreator = (message) => ({type: typeMessage, message: message});
export const addMessageCreator = () => ({type: addMessage});

const dialogsReducer = (state, action) => {
  if (action.type === typeMessage) {
    state.messageTextArea = action.message;
  };

  if (action.type === addMessage) {
    if (state.messageTextArea === '') return;

    let newMessage = {
      id: state.messages.length + 1,
      message: state.messageTextArea
    }
    state.messages.push(newMessage);
    state.messageTextArea = '';
  };

  return state;
};

export default dialogsReducer;

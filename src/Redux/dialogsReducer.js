const ADD_MESSAGE = 'DIALOGS-ADD-MESSAGE';

export const addMessageCreator = (message) => ({ type: ADD_MESSAGE, message });

let initialState = {
  users: [
    {id: 1, name: 'Ann'},
    {id: 2, name: 'Denis'},
    {id: 3, name: 'Someone'},
  ],
  messages: []
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      if (action.message === '') return state;

      const message = {
        id: state.messages.length + 1,
        message: action.message
      }
      return {
        ...state,
        messages: [...state.messages, message]
      };

    default:
      return state;
  };
};

export default dialogsReducer;

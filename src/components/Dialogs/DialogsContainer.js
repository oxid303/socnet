import React from 'react';
import Dialogs from './Dialogs/Dialogs';
import { addMessageCreator, typeMessageCreator } from '../Redux/dialogsReducer';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogs;

  let typeMessage = (text) => {
    props.store.dispatch(typeMessageCreator(text));
  };

  let addMessage = () => {
    props.store.dispatch(addMessageCreator());
  };

  return (<Dialogs
    users={state.users}
    messages={state.messages}
    messageTextArea={state.messageTextArea}
    typeMessage={typeMessage}
    addMessage={addMessage} />)
}

export default DialogsContainer;

import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog.js';
import { addMessageCreator, typeMessageCreator } from '../Redux/state';

const Dialogs = (props) => {

  let dialogs = props.state.users.map(item => <Dialog name={item.name} id={item.id} />);
  let messages = props.state.messages.map(item => <div className={s.message}>{item.message}</div>);

  let typeMessage = (e) => {
    let text = e.target.value;
    props.dispatch(typeMessageCreator(text));
  };

  let addMessage = () => {
    props.dispatch(addMessageCreator());
  };

  return (
    <div className={s.content}>
      <div className={s.dialogs}>
        {dialogs}
      </div>
      <div className={s.messages}>
        <div>
          {messages}
        </div>
        <div>
          <textarea
            value={props.state.messageTextArea} onChange={typeMessage}></textarea>
          <br />
          <button onClick={addMessage}>Send message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;

import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {

  let dialogs = props.users.map(item => <Dialog key={item.id} name={item.name} id={item.id} />);
  let messages = props.messages.map(item => <div key={item.id} className={s.message}>{item.message}</div>);

  let typingMessage = (textArea) => {
    let text = textArea.target.value;
    props.typingMessage(text);
  };

  let addMessage = () => {
    props.addMessage();
  };

  if (!props.isAuth) return <Redirect to="/login" />

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
          <textarea value={props.messageTextArea} onChange={typingMessage}></textarea>
          <br />
          <button onClick={addMessage}>Send message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;

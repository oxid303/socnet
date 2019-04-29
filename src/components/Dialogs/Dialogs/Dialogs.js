import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog.js';

const Dialogs = (props) => {

  let dialogs = props.users.map(item => <Dialog key={item.id} name={item.name} id={item.id} />);
  let messages = props.messages.map(item => <div key={item.id} className={s.message}>{item.message}</div>);

  let typeMessage = (textArea) => {
    let text = textArea.target.value;
    props.typeMessage(text);
  };

  let addMessage = () => {
    props.addMessage();
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
          <textarea value={props.messageTextArea} onChange={typeMessage}></textarea>
          <br />
          <button onClick={addMessage}>Send message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;

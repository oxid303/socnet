import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog.js';

const Dialogs = (props) => {

  let dialogs = props.dialogs.map(item => <Dialog name={item.name} id={item.id} />);
  let messages = props.messages.map(item => <div className={s.message}>{item.message}</div>)

  return (
    <div className={s.content}>
      <div className={s.dialogs}>
        {dialogs}
      </div>
      <div className={s.messages}>
        {messages}
      </div>
    </div>
  )
}

export default Dialogs;

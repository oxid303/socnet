import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import DialogForm from './DialogForm/DialogForm';

const Dialogs = (props) => {

  let dialogs = props.users.map(item => <Dialog key={item.id} name={item.name} id={item.id} />);
  let messages = props.messages.map(item => <div key={item.id} className={s.message}>{item.message}</div>);

  // let typingMessage = (textArea) => {
  //   let text = textArea.target.value;
  //   props.typingMessage(text);
  // };

  const onSubmitForm = (formData) => {
    props.addMessage(formData.dialog);
  }

  return (
    <div className={s.content}>
      <div className={s.dialogs}>
        {dialogs}
      </div>
      <div className={s.messages}>
        {messages}
        <DialogForm onSubmit={onSubmitForm} />
      </div>
    </div>
  )
}

export default Dialogs;

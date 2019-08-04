import React from 'react';
import { reduxForm, Field, reset } from 'redux-form';
import { required, maxLength } from '../../../utils/validators';
import Textarea from '../../common/FormsControls/Textarea';

const afterSubmit = (result, dispatch) => {
  dispatch(reset('dialog'));
}

const maxLength20 = maxLength(20);

const DialogForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="dialog"
        component={Textarea}
        placeholder="Enter your message"
        validate={[required, maxLength20]} />
      <br />
      <button>send message</button>
    </form>
  )
}

export default reduxForm({
  form: 'dialog',
  onSubmitSuccess: afterSubmit
})(DialogForm);

import React from 'react';
import { reduxForm, Field, reset } from 'redux-form';
import { required, maxLength } from '../../../utils/validators';
import {Textarea} from '../../common/FormsControls/FormControl';

const afterSubmit = (result, dispatch) => {
  dispatch(reset('profile'));
}

const maxLength30 = maxLength(30);

const ProfileForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="post"
        component={Textarea}
        placeholder="Enter your post"
        validate={[required, maxLength30]} />
      <br />
      <button>add post</button>
    </form>
  )
}

export default reduxForm({
  form: 'profile',
  onSubmitSuccess: afterSubmit
})(ProfileForm);

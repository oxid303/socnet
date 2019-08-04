import React from 'react';
import s from './Textarea.module.css';

const Textarea = ({
  input,
  meta: { touched, error, warning },
  placeholder,
  ...props
}) => {
  return (
    <span>
      <textarea
        placeholder={placeholder}
        className={touched && error ? s.textareaError : undefined}
        {...input} {...props} />
      {touched &&
        ((error && <span className={[s.talkBubble, s.leftBottom].join(' ')}>{error}</span>) ||
          (warning && <span className={[s.talkBubble, s.leftBottom].join(' ')}>{warning}</span>))}
    </span>
  )
}

export default Textarea;

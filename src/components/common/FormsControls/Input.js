import React from 'react';
import s from './Input.module.css';

const Input = ({
  input,
  meta: { touched, error, warning },
  placeholder,
  ...props
}) => {
  return (
    <span>
      <input
        type="text"
        placeholder={placeholder}
        className={touched && error ? s.inputError : undefined}
        {...input} {...props} />
      {(touched &&
        ((error && <span className={[s.talkBubble, s.leftBottom].join(' ')}>{error}</span>) ||
          (warning && <span className={[s.talkBubble, s.leftBottom].join(' ')}>{warning}</span>)))}
    </span>
  )
}

export default Input;

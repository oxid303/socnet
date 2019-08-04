import React from 'react';
import s from './Textarea.module.css';

const FormControl = ({
  children,
  meta: { touched, error, warning },
  ...props
}) => {
  return (
    <span>
      {children}
      {touched &&
        ((error && <span className={[s.talkBubble, s.leftBottom].join(' ')}>{error}</span>) ||
          (warning && <span className={[s.talkBubble, s.leftBottom].join(' ')}>{warning}</span>))}
    </span>
  )
}

export const Textarea = (props) => {
  const { input, meta: { touched, error }, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea
        className={touched && error ? s.textareaError : undefined}
        {...input} {...restProps} />
    </FormControl>
  )
}

export const Input = (props) => {
  const { input, meta: { touched, error }, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input
        className={touched && error ? s.inputError : undefined}
        {...input} {...restProps} />
    </FormControl>
  )
}

export default FormControl;

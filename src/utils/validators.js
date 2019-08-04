export const required = value =>
  value && !/^\s+$/.test(value) ? undefined : 'Field is required';

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const email = value =>
  value && !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(value) ? 'Please, enter the valid email' : undefined;

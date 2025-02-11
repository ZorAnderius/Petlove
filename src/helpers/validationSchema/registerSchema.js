import * as yup from 'yup';

export const registerSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, 'Name must be at least 2 letters')
    .required('Name is required'),
  email: yup
    .string()
    .trim()
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      'Enter a valid Email',
    )
    .required('Email is required'),
  password: yup
    .string()
    .trim()
    .min(7, 'Password must be at least 7 symbols')
    .required('Password is required'),
});

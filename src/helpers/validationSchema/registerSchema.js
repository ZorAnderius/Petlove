import * as yup from 'yup';

export const registerSchema = yup.object({
  name: yup.string().trim().min(2).required('Name is required'),
  email: yup
    .string()
    .trim()
    .email()
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
    .required('Email is required'),
  password: yup.string().trim().min(7).required('Password is required'),
});

import * as yup from 'yup';

export const locationSchema = yup.object({
  location: yup
    .object({
      label: yup
        .string()
        .trim()
        .min(3, 'Enter minimum 3 letters')
        .max(48, 'Enter less than 48 characters')
        .required('Location is required'),
      value: yup.string().required(),
    })
    .nullable()
    .required('Location is required'),
});
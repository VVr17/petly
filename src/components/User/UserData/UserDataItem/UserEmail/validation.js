import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(12, 'Email should be at least 12 characters long')
    .max(63, 'Email should be up to 63 characters long')
    .matches(
      /^([a-zA-Z][\w+-]+(?:\.\w+)?)@([\w-]+(?:\.[a-zA-Z]{2,10})+)$/,
      'Please enter a valid email address, example: "mail@mail.com"'
    )
    .email('Please enter a valid email address, example: "mail@mail.com"')
    .required('Email is required'),
});

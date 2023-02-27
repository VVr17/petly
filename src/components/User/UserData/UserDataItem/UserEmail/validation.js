import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Please enter a valid email address, example: "mail@mail.com"')
    .matches(
      /^([a-zA-Z][\w+-]+(?:\.\w+)?)@([\w-]+(?:\.[a-zA-Z]{2,3})+)$/,
      'Please enter a valid email address, example: "mail@mail.com"'
    ),
});

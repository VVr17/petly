import * as Yup from 'yup';

// Values for Formik
export const initialValues = {
  email: '',
};

// Yup validation
export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address, example: "mail@mail.com"')
    .matches(
      /^(?=.{1,63}$)(?=.{2,}@)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Please enter a valid email address, example: "mail@mail.com"'
    )
    .required('Email is required')
    .min(12, 'Email should be at least 12 characters long')
    .max(63, 'Email should be up to 63 characters long'),
});

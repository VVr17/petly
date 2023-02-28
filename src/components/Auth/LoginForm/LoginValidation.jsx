import * as Yup from 'yup';

// Values for Formik

export const loginInitialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

// Yup validation

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address, example: "mail@mail.com"')
    .matches(
      /^(?=.{1,63}$)(?=.{2,}@)[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Please enter a valid email address, example: "mail@mail.com"'
    )
    .required('Email is required')
    .min(12, 'Email should be at least 12 characters long')
    .max(63, 'Email should be up to 63 characters long'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/,
      '7 characters, 1 uppercase, 1 lowercase, 1 number'
    )
    .min(7, 'Password should be at least 7 characters long')
    .max(32, 'Password should be up to 32 characters long')
    .required('Password is required'),
});

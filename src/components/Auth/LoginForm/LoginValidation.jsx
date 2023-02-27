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
    .required('Email is required')
    .email('Please enter a valid email address, example: "mail@mail.com"')
    .matches(
      /^([a-zA-Z][\w+-]+(?:\.\w+)?)@([\w-]+(?:\.[a-zA-Z]{2,3})+)$/,
      'Please enter a valid email address, example: "mail@mail.com"'
    ),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/,
      '7 characters, 1 uppercase, 1 lowercase, 1 number'
    )
    .min(7, 'Password should be at least 7 characters long')
    .max(32, 'Password should be up to 32 characters long')
    .required('Password is required'),
});

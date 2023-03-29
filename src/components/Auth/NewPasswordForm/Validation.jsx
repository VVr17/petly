import * as Yup from 'yup';

// Formik initials
export const initialValues = {
  password: '',
  confirmPassword: '',
};

// Yup Validation
export const validationNewPassword = Yup.object().shape({
  
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,}$/,
      '7 characters, 1 uppercase, 1 lowercase, 1 number'
    )
    .min(7, 'Password should be at least 7 characters long')
    .max(32, 'Password should be up to 32 characters long')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});




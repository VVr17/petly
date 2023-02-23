import { Formik } from 'formik';
import * as Yup from 'yup';


// Formik initials 
export const initialValues = {
  name: '',
  city: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: '',
};


// Yup Validation
export const validationSchemaStepOne = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .matches(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please enter a valid email address, example: "mail@mail.com"'
    )
    .required('Email is required')
    .min(10, 'Email should be at least 10 characters long')
    .max(63, 'Email should be up to 63 characters long'),
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
    .required('Please confirm your password')
});


export const validationSchemaStepTwo = Yup.object().shape({
  name: Yup.string().min(4, 'Name should have at least 4 characters').required('Name is required'),
  city: Yup.string()
    .matches(
      /^\s*(?:\w+\s*,\s*){1,}(?:\w+\s*)$/,
      'Should be at least 2 words separated by comma'
     )
    .min(3, 'City should have at least 3 characters')
    .required('City is required'),
  phone: Yup.string()
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      'Number should begin with +380 and contain 13 digits'
    )
    .min(13, 'Phone number should be 13 digits')
    .max(13, 'Phone number should be 13 digits')
    .required('Phone number is required'),
});
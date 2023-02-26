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
    .email('Please enter a valid email address, example: "mail@mail.com"')
    .matches(
      /^([a-zA-Z][\w+-]+(?:\.\w+)?)@([\w-]+(?:\.[a-zA-Z]{2,10})+)$/,
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
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

export const validationSchemaStepTwo = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name should have at least 3 characters')
    .matches(
      /^[a-zA-Zа-яА-Я]+(?: [a-zA-Zа-яА-Я]+)*$/,
      'Only letters can be accepted'
    )
    .max(12, 'Name should be up to 12 characters long')
    .required('Name is required'),
  city: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-ЯіІїЇ]+(?:[-\s]?[a-zA-Zа-яА-ЯіІїЇ]+)*,\s*[a-zA-Zа-яА-ЯіІїЇ'’\s-]+$/,
      'Should be "City, Region" separated by comma, only letters can be accepted'
    )
    .min(3, 'City should have at least 3 characters')
    .required('City is required'),
  phone: Yup.string()
    .matches(
      /^\+380\d{9}$/,
      'Number should begin with +380 and contain 13 digits'
    )
    .min(13, 'Phone number should be 13 digits')
    .max(13, 'Phone number should be 13 digits')
    .required('Phone number is required'),
});

// name without space ^[a-zA-Zа-яА-Я]+(?: [a-zA-Zа-яА-Я]+)*$

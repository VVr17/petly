
import React from 'react';
import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { Formik } from 'formik';
import * as Yup from 'yup';
import RegStepOne from './RegStepOne';
import RegStepTwo from './RegStepTwo';
import { ModalContent, ModalWrapper, FormWrapper } from './RegisterForm.styled';

import Button from 'components/Ui-Kit/Button';
import { useSignupUserMutation } from 'redux/api/userApi';



// Values for Formik

const initialValues = {
  name: '',
  city: '',
  phone: '',
  email: '',
  password: '',
  confirmPassword: '',
};



// Yup validation

const validationSchemaStepOne = Yup.object().shape({
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
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'Minimum seven characters, at least one uppercase letter, one lowercase letter and one number'
    )
    .min(7, 'Password should be at least 7 characters long')
    .max(32, 'Password should be up to 32 characters long')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password')
});


const validationSchemaStepTwo = Yup.object().shape({
  name: Yup.string().min(4, 'Name should have at least 4 characters').required('Name is required'),
  city: Yup.string()
    .matches(
      /^\s*(?:\w+\s*,\s*){1,}(?:\w+\s*)$/,
      'Should be at least two words separated by string'
     )
    .min(4, 'City should have at least 4 characters')
    .required('City is required'),
  phone: Yup.string()
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      'Phone number should begin with +380 and contain 13 digits (+380123456789)'
    )
    .min(13, 'Phone number should be 13 digits')
    .max(13, 'Phone number should be 13 digits')
    .required('Phone number is required'),
});




// main function

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [signupUser, { isError }] = useSignupUserMutation();
  const navigate = useNavigate();
  const { isAuth } = useSelector(state => state.user);
    
    const handleNextClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBackClick = () => {
    setCurrentStep(currentStep - 1);
  };

    const handleSubmit = (values, { setSubmitting }) => {
      setSubmitting(false);

    if (currentStep < 2) {
        handleNextClick();
    } else {
        const credentials = {
            name: values.name,
            city: values.city,
            phone: values.phone,
            email: values.email,
            password: values.password,
        };

        signupUser(credentials);
    }
    };

  useEffect(() => {
    if (isAuth) {
      console.log('Congratulations! You are successfully signed up!');
      navigate('/');
    }
  });

    return (
        <ModalWrapper>
            <ModalContent>
                <h1>Registration form</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={currentStep === 1 ? validationSchemaStepOne : validationSchemaStepTwo}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => {
                        
                        return (
                            <FormWrapper>
                                {currentStep === 1 && <RegStepOne />}
                                {currentStep === 2 && <RegStepTwo />}
              
                                <Button name="filled" type="submit" disabled={isSubmitting}>
                                    {currentStep < 2 ? 'Next' : 'Register'}
                                </Button>
                                {currentStep > 1 && (
                                <Button name="transparent" onClick={handleBackClick}>
                                   Back
                                </Button>
                )}
                            </FormWrapper>);
                    }}
                </Formik>
                <p>
                    Already have an account?<NavLink to="/login">Login</NavLink>
                </p>
            </ModalContent>
        </ModalWrapper>
    );
};

export default RegistrationForm;



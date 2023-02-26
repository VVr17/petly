import React from 'react';
import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useSignupUserMutation } from 'redux/api/userApi';

import { Formik } from 'formik';

import {
  initialValues,
  validationSchemaStepOne,
  validationSchemaStepTwo,
} from './Validation';
import RegStepOne from './RegStepOne';
import RegStepTwo from './RegStepTwo';
import {
  ModalContent,
  ModalWrapper,
  FormWrapper,
  ButtonWrapper,
  FormTitle,
  Paragraph,
  LoginLink,
  ErrorMessage,
} from './RegisterForm.styled';
import Button from 'components/Ui-Kit/Button';



// Main component for registration form
const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1); // Tracks the current registration step
  const [signupUser, { isError, error }] = useSignupUserMutation(); // A function to sign up the user, and some response objects from the API
  const navigate = useNavigate(); // A function to navigate to different pages
  const { isAuth } = useSelector(state => state.user); // Determines whether the user is authenticated

  // Function to move to the next registration step
  const handleNextClick = () => {
    setCurrentStep(currentStep + 1);
  };

  // Function to go back one registration step
  const handleBackClick = () => {
    setCurrentStep(currentStep - 1);
  };

  // Function to handle form submission
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

      signupUser(credentials); // Send the user's information to the server to create an account
    }
  };

  // Use an effect to navigate to the user page if the user is authenticated
  useEffect(() => {
    if (isAuth) {
      console.log('Congratulations! You are successfully signed up!');
      navigate('/user');
    }
  });

  // Render the registration form
  return (
    <ModalWrapper>
      <ModalContent>
        <FormTitle>Registration</FormTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={
            currentStep === 1
              ? validationSchemaStepOne
              : validationSchemaStepTwo
          }
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, setFieldValue }) => {
            return (
              <FormWrapper>
                {currentStep === 1 && <RegStepOne />}
                {currentStep === 2 && (
                  <RegStepTwo
                    value={values.city}
                    setFieldValue={setFieldValue}
                  />
                )}
                <ButtonWrapper>
                  <Button name="filled" type="submit" disabled={isSubmitting}>
                    {currentStep < 2 ? 'Next' : 'Register'}
                  </Button>
                  {currentStep > 1 && (
                    <Button name="transparent" onClick={handleBackClick}>
                      Back
                    </Button>
                  )}
                </ButtonWrapper>
              </FormWrapper>
            );
          }}
        </Formik>
        <Paragraph>
          Already have an account? <LoginLink to="/login">Login</LoginLink>
        </Paragraph>
        {isError && <ErrorMessage>{error.data.message}</ErrorMessage>}
      </ModalContent>
    </ModalWrapper>
  );
};

export default RegistrationForm;

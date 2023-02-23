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
} from './RegisterForm.styled';
import Button from 'components/Ui-Kit/Button';

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
      navigate('/notices');
    }
  });

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
          {({ isSubmitting }) => {
            return (
              <FormWrapper>
                {currentStep === 1 && <RegStepOne />}
                {currentStep === 2 && <RegStepTwo />}
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
      </ModalContent>
    </ModalWrapper>
  );
};

export default RegistrationForm;

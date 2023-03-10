import React, { useState } from 'react';
import {
  useLoginGoogleAuthUserMutation,
  useSignupUserMutation,
} from 'redux/api/userApi';
import { Formik } from 'formik';
import { FormattedMessage } from 'react-intl';
import { FcGoogle } from 'react-icons/fc';
import { useGoogleLogin } from '@react-oauth/google';
import {
  initialValues,
  validationSchemaStepOne,
  validationSchemaStepTwo,
} from './Validation';
import RegStepOne from './RegStepOne';
import RegStepTwo from './RegStepTwo';
import Button from 'components/Ui-Kit/Button';
import Loader from 'components/Loader';
import { getUserData } from 'api/googleAuth';
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

const RegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [signupUser, { isLoading, isError, error }] = useSignupUserMutation();
  const [
    loginGoogleUser,
    { isLoading: isGoogleLoading, isError: isGoogleError, error: googleError },
  ] = useLoginGoogleAuthUserMutation();

  const googleLogin = useGoogleLogin({
    onSuccess: async codeResponse => {
      const { user, error } = await getUserData(codeResponse.access_token);
      if (error) {
        toast.error('Oops, something went wrong. Please, try again later');
      }

      loginGoogleUser(user);
    },
    onError: error => {
      console.log('Login Failed:', error);
      toast.error('Oops, login failed. Please, try again later');
    },
  });

  const handleNextClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBackClick = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
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

      const response = await signupUser(credentials);
      console.log('response', response);
    }
  };

  return (
    <>
      {(isLoading || isGoogleLoading) && <Loader />}
      <ModalWrapper>
        <ModalContent>
          <FormTitle>
            <FormattedMessage id="registration" />
          </FormTitle>
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
                      {currentStep < 2 ? (
                        <FormattedMessage id="next" />
                      ) : (
                        <FormattedMessage id="register" />
                      )}
                    </Button>
                    {currentStep > 1 && (
                      <Button name="transparent" onClick={handleBackClick}>
                        <FormattedMessage id="back" />
                      </Button>
                    )}
                    {currentStep === 1 && (
                      <Button
                        type="button"
                        name="transparent"
                        width="100%"
                        onClick={() => {
                          googleLogin();
                        }}
                      >
                        <FcGoogle />
                        Sign in with GOOGLE
                      </Button>
                    )}
                  </ButtonWrapper>
                </FormWrapper>
              );
            }}
          </Formik>
          <Paragraph>
            <FormattedMessage id="haveAnAccount" />{' '}
            <LoginLink to="/login">
              <FormattedMessage id="login" />
            </LoginLink>
          </Paragraph>
          {isError && <ErrorMessage>{error.data.message}</ErrorMessage>}
          {isGoogleError && (
            <ErrorMessage>{googleError.data.message}</ErrorMessage>
          )}
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

export default RegistrationForm;

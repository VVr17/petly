import React from 'react';
import { Formik } from 'formik';
import { FormattedMessage } from 'react-intl';
import { FcGoogle } from 'react-icons/fc';

import { useLoginUserMutation } from 'redux/api/userApi';
import { useGoogleAuth } from 'hooks/useGoogleAuth';

import Button from 'components/Ui-Kit/Button';
import LoginInputs from './LoginInputs';
import Loader from 'components/Loader';

import {
  loginInitialValues as initialValues,
  loginValidationSchema as validationSchema,
} from './LoginValidation';

import {
  ModalContent,
  ModalWrapper,
  FormWrapper,
  ButtonWrapper,
  FormTitle,
  LoginLink,
  Paragraph,
  ErrorMessage,
} from '../RegisterForm/RegisterForm.styled';

// main function

const LoginForm = () => {
  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();
  const [googleAuth, { isGoogleLoading, isGoogleError, googleError }] =
    useGoogleAuth();

  const handleSubmit = async values => {
    const credentials = {
      email: values.email,
      password: values.password,
    };
    await loginUser(credentials);
  };

  return (
    <>
      {(isLoading || isGoogleLoading) && <Loader />}
      <ModalWrapper>
        <ModalContent>
          <FormTitle>
            <FormattedMessage id="login" />
          </FormTitle>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => {
              return (
                <FormWrapper>
                  <LoginInputs />
                  <ButtonWrapper>
                    <Button name="filled" type="submit" disabled={isSubmitting}>
                      <FormattedMessage id="submit" />
                    </Button>
                    <Button
                      type="button"
                      name="transparent"
                      width="100%"
                      onClick={() => {
                        googleAuth();
                      }}
                    >
                      <FcGoogle />
                      <FormattedMessage id="googleLogIn" />
                    </Button>
                  </ButtonWrapper>
                </FormWrapper>
              );
            }}
          </Formik>
          <Paragraph>
            <FormattedMessage id="questionHaveAnAccount" />{' '}
            <LoginLink to="/register">
              <FormattedMessage id="register" />
            </LoginLink>
          </Paragraph>
          <Paragraph>
            <LoginLink to="/forgot-password">
              <FormattedMessage id="questionForgotPassword" />
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

export default LoginForm;

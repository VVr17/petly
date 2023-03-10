import React, { useEffect, useState } from 'react';
import {
  useLoginGoogleAuthUserMutation,
  useLoginUserMutation,
} from 'redux/api/userApi';
import { Formik } from 'formik';
import { FormattedMessage } from 'react-intl';
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import LoginInputs from './LoginInputs';
import {
  loginInitialValues as initialValues,
  loginValidationSchema as validationSchema,
} from './LoginValidation';
import Button from 'components/Ui-Kit/Button';
import Loader from 'components/Loader';
import { getUserData } from 'api/googleAuth';
// styles from RegisterForm
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

  const handleSubmit = async values => {
    const credentials = {
      email: values.email,
      password: values.password,
    };
    const response = await loginUser(credentials);
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
                        googleLogin();
                      }}
                    >
                      <FcGoogle />
                      Log in with GOOGLE
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

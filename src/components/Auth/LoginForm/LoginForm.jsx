import React, { useEffect, useState } from 'react';
import {
  useLoginGoogleAuthUserMutation,
  useLoginUserMutation,
} from 'redux/api/userApi';
import { Formik } from 'formik';
import { FormattedMessage } from 'react-intl';
import LoginInputs from './LoginInputs';
import {
  loginInitialValues as initialValues,
  loginValidationSchema as validationSchema,
} from './LoginValidation';
import Button from 'components/Ui-Kit/Button';
import Loader from 'components/Loader';
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
import { useGoogleLogin } from '@react-oauth/google';
import { getUserData } from 'api/googleAuth';
import { FcGoogle } from 'react-icons/fc';

// main function

const LoginForm = () => {
  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();
  const [
    loginGoogleUser,
    { isLoading: isGoogleLoading, isError: isGoogleError, error: googleError },
  ] = useLoginGoogleAuthUserMutation();
  const [googleToken, setGoogleToken] = useState(null);

  const handleSubmit = async values => {
    const credentials = {
      email: values.email,
      password: values.password,
    };
    const response = await loginUser(credentials);
  };

  const googleLogin = useGoogleLogin({
    onSuccess: codeResponse => {
      setGoogleToken(codeResponse.access_token);
    },
    onError: error => {
      console.log('Login Failed:', error);
    },
  });

  useEffect(() => {
    const getUserInfo = async () => {
      if (googleToken) {
        const { user, error } = await getUserData(googleToken);
        loginGoogleUser(user);
      }
    };
    getUserInfo();
  }, [googleToken]);

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
                      Sign in with GOOGLE
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

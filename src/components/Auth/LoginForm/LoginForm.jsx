import React, { useEffect, useState } from 'react';
import { useLoginUserMutation } from 'redux/api/userApi';
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

// main function

const LoginForm = () => {
  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();
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
        console.log('userData', user);
      }
    };
    getUserInfo();
  }, [googleToken]);

  return (
    <>
      {isLoading && <Loader />}
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
          <button
            onClick={() => {
              googleLogin();
            }}
          >
            GOOGLE SIGN IN
          </button>
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

export default LoginForm;

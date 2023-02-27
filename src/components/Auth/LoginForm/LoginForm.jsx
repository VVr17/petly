import React from 'react';
import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useLoginUserMutation } from 'redux/api/userApi';

import { Formik } from 'formik';
import LoginInputs from './LoginInputs';
import {
  loginInitialValues as initialValues,
  loginValidationSchema as validationSchema,
} from './LoginValidation';
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

import Button from 'components/Ui-Kit/Button';
import { FormattedMessage } from 'react-intl';

// main function

const LoginForm = () => {
  const [loginUser, { isError, error }] = useLoginUserMutation();
  const navigate = useNavigate();
  const { isAuth } = useSelector(state => state.user);

  const handleSubmit = values => {
    const credentials = {
      email: values.email,
      password: values.password,
    };
    loginUser(credentials);
  };

  useEffect(() => {
    if (isAuth) {
      console.log('Congratulations! You are successfully signed up!');
      navigate('/user');
    }
  });

  return (
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
      </ModalContent>
    </ModalWrapper>
  );
};

export default LoginForm;

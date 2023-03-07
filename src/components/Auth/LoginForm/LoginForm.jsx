import React from 'react';
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

// main function

const LoginForm = () => {
  const [loginUser, { isLoading, isError, error }] = useLoginUserMutation();

  const handleSubmit = async values => {
    const credentials = {
      email: values.email,
      password: values.password,
    };
    const response = await loginUser(credentials);
  };

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
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

export default LoginForm;

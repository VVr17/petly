import React from 'react';
import { Formik } from 'formik';
import { FormattedMessage, useIntl } from 'react-intl';
import { toast } from 'react-toastify';

import { useForgotPasswordMutation } from 'redux/api/userApi';

import Button from 'components/Ui-Kit/Button';
import Loader from 'components/Loader/loader';
import InputField from 'components/Ui-Kit/Input';

import {
  ModalContent,
  ModalWrapper,
  FormWrapper,
  ButtonWrapper,
  FormTitle,
  LoginLink,
  Paragraph,
  ErrorMessage,
} from 'components/Auth/RegisterForm/RegisterForm.styled';

const ForgotPasswordForm = () => {
  const { formatMessage } = useIntl();
  const [forgotPassword, { isLoading, error, isError }] =
    useForgotPasswordMutation();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const { data } = await forgotPassword(values.email);

      if (data.message === 'Reset email sent') {
        resetForm();
        toast.success(formatMessage({ id: 'emailResetToast' }));
      }
    } catch (error) {
      console.log(error);
      toast.error(formatMessage({ id: 'toastError' }));
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <ModalWrapper>
        <ModalContent>
          <FormTitle>
            <FormattedMessage id="forgotPassword" />
          </FormTitle>
          <Formik initialValues={{ email: '' }} onSubmit={handleSubmit}>
            {({ isSubmitting, getFieldProps }) => {
              return (
                <FormWrapper>
                  <InputField
                    type="email"
                    {...getFieldProps('email')}
                    placeholder="Email"
                  />
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
            <LoginLink to="/login">
              <FormattedMessage id="backToLogin" />
            </LoginLink>
          </Paragraph>
          {isError && <ErrorMessage>{error.data.message}</ErrorMessage>}
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

export default ForgotPasswordForm;

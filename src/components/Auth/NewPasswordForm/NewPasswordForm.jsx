import React, { useState } from 'react';
import { Formik } from 'formik';
import { FormattedMessage, useIntl } from 'react-intl';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { initialValues, validationNewPassword } from './Validation';

import { useNewPasswordMutation } from 'redux/api/userApi';

import Button from 'components/Ui-Kit/Button';
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
} from '../RegisterForm/RegisterForm.styled';
import { PasswordToggle } from '../RegisterForm/RegStepOne.styled';

const NewPasswordForm = () => {
  const [newPassword, { isLoading, error, isError }] = useNewPasswordMutation();
  const [showPassword, setShowPassword] = useState(false);
  const { formatMessage } = useIntl();
  const { token } = useParams();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const result = await newPassword({
        token,
        newPassword: values.password,
      });

      console.log(result);
      if (result.message === 'Password updated successfully') {
        resetForm();
        toast.success(formatMessage({ id: 'passwordUpdateSuccessToast' }));
      }
    } catch (error) {
      console.log(error);
      toast.error(formatMessage({ id: 'toastError' }));
    }
  };

  // Function to toggle password visibility
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Determine password input type based on password visibility
  const passwordInputType = showPassword ? 'text' : 'password';

  return (
    <ModalWrapper>
      <ModalContent>
        <FormTitle>
          <FormattedMessage id="enterNewPasswordTitle" />
        </FormTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={validationNewPassword}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, getFieldProps }) => (
            <FormWrapper>
              <InputField
                type={passwordInputType}
                {...getFieldProps('password')}
                placeholder={formatMessage({ id: 'newPassword' })}
              >
                <PasswordToggle type="button" onClick={toggleShowPassword}>
                  {showPassword ? <RxEyeOpen /> : <RxEyeClosed />}
                </PasswordToggle>
              </InputField>

              <InputField
                type={passwordInputType}
                {...getFieldProps('confirmPassword')}
                placeholder={formatMessage({ id: 'confirmNewPassword' })}
              />

              <ButtonWrapper>
                <Button name="filled" type="submit" disabled={isSubmitting}>
                  <FormattedMessage id="submit" />
                </Button>
              </ButtonWrapper>
            </FormWrapper>
          )}
        </Formik>
        <Paragraph>
          <LoginLink to="/login">
            <FormattedMessage id="backToLogin" />
          </LoginLink>
        </Paragraph>
        {isError && <ErrorMessage>{error.data.message}</ErrorMessage>}
      </ModalContent>
    </ModalWrapper>
  );
};

export default NewPasswordForm;

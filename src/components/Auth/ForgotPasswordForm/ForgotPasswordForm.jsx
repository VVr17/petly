import React from 'react';
import { Formik } from 'formik';
import { FormattedMessage, useIntl } from 'react-intl';
import Button from 'components/Ui-Kit/Button';
import InputField from 'components/Ui-Kit/Input';
import { toast } from 'react-toastify';
import {
  ModalContent,
  ModalWrapper,
  FormWrapper,
  ButtonWrapper,
  FormTitle,
  LoginLink,
  Paragraph,
  ErrorMessage
} from 'components/Auth/RegisterForm/RegisterForm.styled';
import { useForgotPasswordMutation } from 'redux/api/userApi';

const ForgotPasswordForm = () => {

    const { formatMessage } = useIntl();
    const [forgotPassword, { isLoading, error, isError }] = useForgotPasswordMutation();

  const handleSubmit = async (values, {resetForm}) => {
   try {
    const result = await forgotPassword(values.email).unwrap();
    if (result.message === 'Reset email sent') {
      resetForm();
      toast.info(formatMessage({ id: 'emailResetToast' }));
    }
  } catch (error) {
     console.log(error);
  }
  };

  return (
    <ModalWrapper>
      <ModalContent>
        <FormTitle>
          <FormattedMessage id="forgotPassword" />
        </FormTitle>
        <Formik
          initialValues={{ email: '' }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, getFieldProps }) => {
            return (
              <FormWrapper>
                <InputField
                  type="email"
                  {...getFieldProps('email')}
                  placeholder="Email"
                />
                <ButtonWrapper>
                  <Button
                    name="filled"
                    type="submit"
                    disabled={isSubmitting}
                  >
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
  );
};

export default ForgotPasswordForm;

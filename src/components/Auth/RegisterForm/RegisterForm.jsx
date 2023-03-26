import React, { useState } from 'react';
import { Formik } from 'formik';
import { FormattedMessage, useIntl } from 'react-intl';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
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
  useLoginGoogleAuthUserMutation,
  useResendEmailMutation,
  useSignupUserMutation,
} from 'redux/api/userApi';
import {
  ModalContent,
  ModalWrapper,
  FormWrapper,
  ButtonWrapper,
  FormTitle,
  Paragraph,
  LoginLink,
  ErrorMessage,
  ResendEmailStyled,
} from './RegisterForm.styled';

const RegistrationForm = () => {
  const { formatMessage } = useIntl();

  const [currentStep, setCurrentStep] = useState(1);
  const [signupUser, { isLoading, isError, error }] = useSignupUserMutation();
  const [resendEmail] = useResendEmailMutation();
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

  const handleResendEmailClick = async () => {
    // console.log('resend email');
    const email = 'email';
    const response = await resendEmail(email);
    toast.info(formatMessage({ id: 'emailVerificationToast' }));
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(false);

    if (currentStep < 2) {
      handleNextClick();
    } else {
      const credentials = {
        name: values.name,
        city: values.city || null,
        phone: values.phone || null,
        email: values.email,
        password: values.password,
      };

      resetForm();
      const response = await signupUser(credentials);
      toast.info(formatMessage({ id: 'emailVerificationToast' }));
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
                        <FormattedMessage id="googleSignIn" />
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
          <Paragraph>
            <ResendEmailStyled onClick={handleResendEmailClick}>
              <FormattedMessage id="resendEmail" />
            </ResendEmailStyled>
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

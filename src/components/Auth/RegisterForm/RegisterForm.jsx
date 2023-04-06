import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Formik } from 'formik';
import { FormattedMessage, useIntl } from 'react-intl';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

import Button from 'components/Ui-Kit/Button';
import {
  initialValues,
  validationSchemaStepOne,
  validationSchemaStepTwo,
} from './Validation';
import Loader from 'components/Loader';
import ModalComponent from 'components/Modals/Modal/Modal';
import RegStepOne from './RegStepOne';
import RegStepTwo from './RegStepTwo';
import ResendEmailFrom from '../ResendEmailForm/ResendEmailForm';
import { useSignupUserMutation } from 'redux/api/userApi';
import { useGoogleAuth } from 'hooks/useGoogleAuth';

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
  const [isResendEmailOpen, setIsResendEmailOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [signupUser, { isLoading, isError, error }] = useSignupUserMutation();
  const [googleAuth, { isGoogleLoading, isGoogleError, googleError }] =
    useGoogleAuth();

  const handleNextClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBackClick = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleCloseResendEmail = () => {
    setIsResendEmailOpen(false);
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
      await signupUser(credentials);
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
                          googleAuth();
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
            <ResendEmailStyled onClick={() => setIsResendEmailOpen(true)}>
              <FormattedMessage id="resendEmail" />
            </ResendEmailStyled>
          </Paragraph>

          {isError && <ErrorMessage>{error.data.message}</ErrorMessage>}
          {isGoogleError && (
            <ErrorMessage>{googleError.data.message}</ErrorMessage>
          )}
        </ModalContent>
      </ModalWrapper>
      <AnimatePresence>
        {isResendEmailOpen && (
          <ModalComponent closeModal={handleCloseResendEmail} key="popUp">
            <ResendEmailFrom onClose={handleCloseResendEmail} />
          </ModalComponent>
        )}
      </AnimatePresence>
    </>
  );
};

export default RegistrationForm;

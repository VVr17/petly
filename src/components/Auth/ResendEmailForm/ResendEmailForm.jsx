import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { FormattedMessage, useIntl } from 'react-intl';
import { toast } from 'react-toastify';

import { useResendEmailMutation } from 'redux/api/userApi';

import Button from 'components/Ui-Kit/Button';
import InputField from 'components/Ui-Kit/Input';
import Loader from 'components/Loader';
import { initialValues, validationSchema } from './Validation';

import {
  ErrorMessage,
  FormContainerStyled,
  FormStyled,
  MessageStyled,
} from './ResendEmailForm.styled';

const ResendEmailForm = ({ onClose }) => {
  const { formatMessage } = useIntl();
  const [resendEmail, { isLoading, isError, error }] = useResendEmailMutation();

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(false);
    resetForm();
    const response = await resendEmail(values.email);

    if (!response.error) {
      toast.info(formatMessage({ id: 'emailVerificationToast' }));
      onClose();
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <FormContainerStyled>
        <MessageStyled>
          <FormattedMessage id="resendEmailMessage" />
        </MessageStyled>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => {
            return (
              <FormStyled>
                <InputField
                  name="email"
                  type="email"
                  placeholder="Email"
                  autocomplete="email"
                />
                <Button
                  name="filled"
                  type="submit"
                  disabled={isSubmitting}
                  width="100%"
                >
                  <FormattedMessage id="submit" />
                </Button>
                {isError && <ErrorMessage>{error.data.message}</ErrorMessage>}
              </FormStyled>
            );
          }}
        </Formik>
      </FormContainerStyled>
    </>
  );
};

export default ResendEmailForm;

ResendEmailForm.propTypes = {
  onClose: PropTypes.func,
};

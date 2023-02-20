import React, { useState } from 'react';
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import InputField from 'components/Ui-Kit/Input';
import Button from 'components/Ui-Kit/Button';
import { FormWrapper, ButtonsContainer } from './AddPetForm.styled';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

// Values for Formik

const initialValues = {
  title: '',
  name: '',
  birthDate: '',
  breed: '',
};

// Yup validation

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required('Name is required')
    .min(2, 'Title should be at least 2 characters long')
    .max(48, 'Title should be up to 48 characters long'),
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name should be at least 2 characters long')
    .max(16, 'Name should be up to 48 characters long'),
  birthDate: Yup.date().required('Birth date is required'),

  breed: Yup.string()
    .required('Breed is required')
    .min(2, 'Breed should be at least 2 characters long')
    .max(16, 'Breed should be up to 48 characters long'),
  location: Yup.string()
    .matches(
      /^\s*(?:\w+\s*,\s*){1,}(?:\w+\s*)$/,
      'Should be at least two words separated by string'
    )
    .required('City is required'),
  price: Yup.number().required('Name is required').min(1, 'Price can not be 0'),
  comment: Yup.string()
    .required('Comment is required')
    .min(8, 'Title should be at least 8 characters long')
    .max(120, 'Title should be up to 120 characters long'),
});

function formatDate() {
  return new Date().toLocaleDateString();
}

// Main function

const AddPetForm = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = (values, { setSubmitting }) => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log(values);
    }
    setSubmitting(false);
  };

  const goBack = () => {
    setCurrentStep(1);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormWrapper>
          {currentStep === 1 && <StepOne />}
          {currentStep === 2 && <StepTwo />}
          <ButtonsContainer>
            {currentStep === 1 && (
              <Button name="transparent" onClick={onClose}>
                Cancel
              </Button>
            )}
            {currentStep === 2 && (
              <Button name="transparent" onClick={goBack}>
                Back
              </Button>
            )}
            <Button name="filled" type="submit" disabled={isSubmitting}>
              {currentStep < 2 ? 'Next' : 'Done'}
            </Button>
          </ButtonsContainer>
        </FormWrapper>
      )}
    </Formik>
  );
};

AddPetForm.propTypes = {
  onClose: PropTypes.func,
};

export default AddPetForm;

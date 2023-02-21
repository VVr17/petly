import React, { useState } from 'react';
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import InputField from 'components/Ui-Kit/Input';
import Button from 'components/Ui-Kit/Button';
import { FormWrapper, ButtonsContainer } from './AddPetForm.styled';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import {
  RadioContainer,
  RadioButton,
  RadioLabel,
  RadioItem,
} from './AddPetForm.styled';
import Male from '../../assets/images/desktop/male.svg';
import Female from '../../assets/images/desktop/female.svg';

// Values for Formik

const initialValues = {
  title: '',
  name: '',
  birthDate: '',
  breed: '',
  sex: 'male',
  location: '',
  comment: '',
  price: '',
  photoURL: null,
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
  photoURL: Yup.mixed().required(),
  comment: Yup.string()
    .required('Comment is required')
    .min(8, 'Title should be at least 8 characters long')
    .max(200, 'Title should be up to 120 characters long'),
});

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
      // validationSchema={validationSchema}

      onSubmit={handleSubmit}
      // setFieldValue
    >
      {({ isSubmitting, values }) => (
        <FormWrapper>
          {currentStep === 1 && <StepOne />}
          {currentStep === 2 && (
            <StepTwo
              name="photoURL"
              // handleChange={e => {
              //   setFieldValue('photoURL', e.target.files[0]);
              //   // setFile(URL.createObjectURL(e.target.files[0]));
              // }}
            >
              <RadioContainer>
                <li>
                  <RadioLabel isSelected={values.sex === 'male'}>
                    <RadioButton
                      type="radio"
                      name="sex"
                      value="male"
                      checked={values.sex === 'male'}
                    />
                    <RadioItem>
                      <img src={Male} alt="Male" />
                    </RadioItem>
                    Male
                  </RadioLabel>
                </li>

                <li>
                  <RadioLabel isSelected={values.sex === 'female'}>
                    <RadioButton
                      type="radio"
                      name="sex"
                      value="female"
                      checked={values.sex === 'female'}
                    />
                    <RadioItem>
                      <img
                        src={Female}
                        alt="Female"
                        width="60px"
                        height="60px"
                      />
                    </RadioItem>
                    Female
                  </RadioLabel>
                </li>
              </RadioContainer>
            </StepTwo>
          )}
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

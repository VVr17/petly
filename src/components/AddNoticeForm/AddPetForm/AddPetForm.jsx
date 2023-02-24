import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import Button from 'components/Ui-Kit/Button';
import { FormWrapper, ButtonsContainer } from './AddPetForm.styled';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import LocationField from './StepTwo/Location';
import PriceField from './StepTwo/PriceField';
import CommentField from './StepTwo/CommentField';
import UploadImageField from 'components/UploadImage';
import FilterCategory from './FilterCategory';
import SexField from './StepTwo/Sex';
import { useAddNoticeMutation } from 'redux/api/noticesApi';
<<<<<<< Updated upstream
import {
  initialValues,
  validationSchemaStepOne,
  validationSchemaStepTwo,
} from './Validation';
import Loader from 'components/Loader';
=======
// import FormData from 'form-data';

// Values for Formik

const initialValues = {
  category: 'sell',
  title: '',
  name: '',
  birthDate: '',
  breed: '',
  sex: 'male',
  location: '',
  comment: '',
  price: 1,
  petImage: null,
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
  petImage: Yup.mixed().required(),
  comment: Yup.string()
    .required('Comment is required')
    .min(8, 'Title should be at least 8 characters long')
    .max(200, 'Title should be up to 120 characters long'),
});
>>>>>>> Stashed changes

// Main function

const AddPetForm = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const [addNotice, { isLoading }] = useAddNoticeMutation();

  // effect to make an url from file to render in preview
  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = e => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  // function to to fool day and month (01, 02...)
  function getFullMonth(date) {
    return date < 10 ? '0' + date : date;
  }

  // form submit

  const handleSubmit = (values, { setSubmitting }) => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log(values);
      // Date converting to string

      const dateMDY = `${getFullMonth(
        values.birthDate.getDate()
      )}.${getFullMonth(
        values.birthDate.getMonth() + 1
      )}.${values.birthDate.getFullYear()}`;

      // define category

      const categoryName = values.category;
<<<<<<< Updated upstream

      // create formData

      const data = new FormData();

=======
      const data = new FormData();
      // for (let value in values) {
      //   data.append(value, values[value]);
      // }

      // data.set('petImage', file);
>>>>>>> Stashed changes
      data.append('title', values.title);
      data.append('name', values.name);
      data.append('birthDate', dateMDY);
      data.append('breed', values.breed);
      data.append('sex', values.sex);
<<<<<<< Updated upstream
      if (categoryName === 'sell') {
        data.append('price', values.price);
      }
      data.append('location', values.location);
      data.append('petImage', values.petImage);
      data.append('comments', values.comments);

      // send FormData to Backend

      addNotice({ categoryName, noticeData: data });

      // close Modal
      onClose();
=======
      data.append('price', values.price);
      data.append('location', values.location);
      // data.append('petImage', values.imageFile);
      data.append('comment', values.comment);

      // {
      //   title: values.title,
      //   name: values.name,
      //   birthDate: values.birthDate,
      //   breed: values.breed,
      //   sex: values.sex,
      //   location: values.location,
      //   price: parseInt(values.price),
      //   petImage: values.imageFile,
      //   comment: values.comment,
      // };
      // addNotice({ categoryName, data });
      addNotice({ categoryName, noticeData: data });
      console.log(data);
      console.log(values);
>>>>>>> Stashed changes
    }
    setSubmitting(false);
  };

  const goBack = () => {
    setCurrentStep(1);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Formik
        initialValues={initialValues}
        validationSchema={
          currentStep === 1 ? validationSchemaStepOne : validationSchemaStepTwo
        }
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <FormWrapper>
            {currentStep === 1 && (
              <StepOne>
                <FilterCategory value={values.category} />
              </StepOne>
            )}
            {currentStep === 2 && (
              <StepTwo>
                <SexField value={values.sex} />
                <LocationField />

                {values.category === 'sell' && <PriceField />}

                <UploadImageField
                  name="petImage"
                  fileDataURL={fileDataURL}
                  handleChange={e => {
                    setFile(e.currentTarget.files[0]);
                    setFieldValue('petImage', e.currentTarget.files[0]);
                  }}
                />

                <CommentField name="comments" />
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
    </>
  );
};

AddPetForm.propTypes = {
  onClose: PropTypes.func,
};

export default AddPetForm;

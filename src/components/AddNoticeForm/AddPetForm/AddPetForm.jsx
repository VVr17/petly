import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import Button from 'components/Ui-Kit/Button';
import { toast } from 'react-toastify';
import {
  FormWrapper,
  ButtonsContainer,
  ErrorMess,
  CustomCont,
} from './AddPetForm.styled';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import LocationField from './StepTwo/Location';
import PriceField from './StepTwo/PriceField';
import CommentField from './StepTwo/CommentField';
import UploadImageField from 'components/Ui-Kit/UploadImage';
import FilterCategory from './FilterCategory';
import SexField from './StepTwo/Sex';
import { useAddNoticeMutation } from 'redux/api/noticesApi';
import {
  initialValues,
  validationSchemaStepOne,
  validationSchemaStepTwo,
} from './Validation';
import Loader from 'components/Loader';
import { convertDateToString } from '../../../helpers/date';

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

  // form submit

  const handleSubmit = (values, { setSubmitting }) => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      if (!values.price) {
        toast.error('All the fields must be filled');
        return;
      }
      // Date converting to string
      const dateMDY = convertDateToString(values.birthDate);

      // define category
      const categoryName = values.category;

      // create formData
      const data = new FormData();

      data.append('title', values.title);
      data.append('name', values.name);
      data.append('birthDate', dateMDY);
      data.append('breed', values.breed);
      data.append('sex', values.sex);
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
        {({
          isSubmitting,
          values,
          setFieldValue,
          handleBlur,
          touched,
          errors,
        }) => (
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

                {values.category === 'sell' && (
                  <CustomCont>
                    <PriceField errors={errors} touched={touched} />
                    {touched.price && values.price === '' && (
                      <ErrorMess>Price is required</ErrorMess>
                    )}
                  </CustomCont>
                )}
                <CustomCont>
                  <UploadImageField
                    name="petImage"
                    label="Load the pet’s image:"
                    fileDataURL={fileDataURL}
                    handleChange={e => {
                      setFile(e.currentTarget.files[0]);
                      setFieldValue('petImage', e.currentTarget.files[0]);
                    }}
                  />
                  {values.petImage === null && (
                    <ErrorMess component="div">Image is required</ErrorMess>
                  )}
                </CustomCont>

                <CommentField name="comments" />
              </StepTwo>
            )}

            <ButtonsContainer>
              {currentStep === 1 && (
                <Button name="transparent" width="100%" onClick={onClose}>
                  Cancel
                </Button>
              )}
              {currentStep === 2 && (
                <Button name="transparent" width="100%" onClick={goBack}>
                  Back
                </Button>
              )}
              <Button
                name="filled"
                type="submit"
                width="100%"
                disabled={isSubmitting}
              >
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

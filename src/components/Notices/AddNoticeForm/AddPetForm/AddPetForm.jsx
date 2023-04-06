import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { useIntl } from 'react-intl';
import { toast } from 'react-toastify';

import Button from 'components/Ui-Kit/Button';
import CommentField from './StepTwo/CommentField';
import FilterCategory from './FilterCategory';
import Loader from 'components/Loader';
import LocationField from './StepTwo/Location';
import PriceField from './StepTwo/PriceField';
import SexField from './StepTwo/Sex';
import StepOne from './StepOne/StepOne';
import StepTwo from './StepTwo/StepTwo';
import UploadImageField from 'components/Ui-Kit/UploadImage';

import { convertToFormData } from 'helpers/convertToFormData';
import { useAddNoticeMutation } from 'redux/api/noticesApi';

import {
  initialValues,
  validationSchemaStepOne,
  validationSchemaStepTwo,
} from './Validation';
import {
  FormWrapper,
  ButtonsContainer,
  ErrorMess,
  CustomCont,
} from './AddPetForm.styled';

// Main function

const AddPetForm = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const [addNotice, { isLoading }] = useAddNoticeMutation();
  const { formatMessage } = useIntl();

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

  const handleSubmit = async (values, { setSubmitting }) => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      if (!values.price && values.category === 'sell') {
        toast.error(formatMessage({ id: 'toastAllFieldsFil' }));
        return;
      }

      // define category
      const categoryName = values.category;

      // convert values formData
      const data = convertToFormData({
        type: 'noticeForm',
        values,
        categoryName,
      });

      // send FormData to Backend
      onClose();
      await addNotice({ categoryName, noticeData: data });
      toast.success(formatMessage({ id: 'toastAdAdded' }));
      // close Modal
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
        {({ isSubmitting, values, setFieldValue, touched, errors }) => (
          <FormWrapper>
            {currentStep === 1 && (
              <StepOne>
                <FilterCategory value={values.category} />
              </StepOne>
            )}
            {currentStep === 2 && (
              <StepTwo>
                <SexField value={values.sex} />
                <LocationField
                  valueLocation={values.location}
                  setFieldValue={setFieldValue}
                />

                {values.category === 'sell' && (
                  <CustomCont>
                    <PriceField errors={errors} touched={touched} />
                    {touched.price && values.price === '' && (
                      <ErrorMess>
                        {formatMessage({ id: 'errorPriceReq' })}
                      </ErrorMess>
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
                    <ErrorMess component="div">
                      {formatMessage({ id: 'errorImageReq' })}
                    </ErrorMess>
                  )}
                </CustomCont>

                <CommentField name="comments" />
              </StepTwo>
            )}

            <ButtonsContainer>
              {currentStep === 1 && (
                <Button name="transparent" width="100%" onClick={onClose}>
                  {formatMessage({ id: 'cancel' })}
                </Button>
              )}
              {currentStep === 2 && (
                <Button name="transparent" width="100%" onClick={goBack}>
                  {formatMessage({ id: 'back' })}
                </Button>
              )}
              <Button
                name="filled"
                type="submit"
                width="100%"
                disabled={isSubmitting}
              >
                {currentStep < 2
                  ? formatMessage({ id: 'next' })
                  : formatMessage({ id: 'done' })}
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

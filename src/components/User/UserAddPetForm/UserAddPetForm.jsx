import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import PartFirst from './PartFirst';
import PartSecond from './PartSecond';
import Button from 'components/Ui-Kit/Button';
import { useAddPetMutation } from 'redux/api/petsApi';
import Loader from 'components/Loader';
import { convertDateToString } from 'helpers/date';
import {
  initialValues,
  validationSchemaPartOne,
  validationSchemaPartTwo,
} from './Validation';
import UploadImageField from 'components/Ui-Kit/UploadImage/UploadImage';
import CommentField from 'components/Notices/AddNoticeForm/AddPetForm/StepTwo/CommentField';
import {
  Container,
  Title,
  FormStyled,
  ControlBox,
  Span,
} from './UserAddPetForm.styled';

const UserAddPetForm = ({ closeModal }) => {
  const [currentPart, setCurrentPart] = useState(1);
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);
  const [addPetMutation, { isLoading }] = useAddPetMutation();
  const { formatMessage } = useIntl();

  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      console.log('file in pet', file);
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

  function getFullMonth(date) {
    return date < 10 ? '0' + date : date;
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    if (currentPart < 2) {
      setCurrentPart(currentPart + 1);
    } else {
      const dateMDY = convertDateToString(values.birthDate);

      const data = new FormData();
      data.append('name', values.name);
      data.append('birthDate', dateMDY);
      data.append('breed', values.breed);
      data.append('petImage', values.petImage);
      data.append('comments', values.comments);
      try {
        const response = await addPetMutation(data);
        toast.success(formatMessage({ id: 'toastAddedPet' }));
      } catch (error) {
        console.error('Failed to add pet:', error);
        toast.error(formatMessage({ id: 'toastError' }));
      }
      closeModal();
    }
    setSubmitting(false);
  };

  const handleNext = () => {
    setCurrentPart(2);
  };

  const handleBack = () => {
    setCurrentPart(1);
  };

  return (
    <Container>
      {isLoading && <Loader />}
      <Title>{formatMessage({ id: 'addPet' })}</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={
          currentPart === 1 ? validationSchemaPartOne : validationSchemaPartTwo
        }
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <FormStyled>
            {currentPart === 1 && (
              <PartFirst handleNext={handleNext} closeModal={closeModal} />
            )}
            {currentPart === 2 && (
              <PartSecond>
                <>
                  <UploadImageField
                    name="petImage"
                    form="userPet"
                    label={formatMessage({ id: 'addPhotoComment' })}
                    fileDataURL={fileDataURL}
                    handleChange={e => {
                      setFile(e.currentTarget.files[0]);
                      setFieldValue('petImage', e.currentTarget.files[0]);
                    }}
                  />
                  <CommentField name="comments" form="userPet" />
                </>
              </PartSecond>
            )}
            <ControlBox>
              {currentPart === 1 && (
                <Button
                  name="transparent"
                  type="button"
                  width="100%"
                  onClick={closeModal}
                >
                  <Span>{formatMessage({ id: 'cancel' })}</Span>
                </Button>
              )}
              {currentPart === 2 && (
                <Button
                  name="transparent"
                  type="button"
                  width="100%"
                  onClick={handleBack}
                >
                  <Span>{formatMessage({ id: 'back' })}</Span>
                </Button>
              )}
              <Button
                name="filled"
                type="submit"
                width="100%"
                disabled={isSubmitting}
              >
                {currentPart < 2 ? (
                  <Span>{formatMessage({ id: 'next' })}</Span>
                ) : (
                  <Span>{formatMessage({ id: 'done' })}</Span>
                )}
              </Button>
            </ControlBox>
          </FormStyled>
        )}
      </Formik>
    </Container>
  );
};

UserAddPetForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default UserAddPetForm;

/* <LabelStyled htmlFor="petImage">
                    Add photo and some comments
                    <PetUploadImg
                      name="petImage"
                      id="petImage"
                      fileDataURL={fileDataURL}
                      handleChange={e => {
                        setFile(e.currentTarget.files[0]);
                        setFieldValue('petImage', e.currentTarget.files[0]);
                        console.log('values', values);
                      }}
                    />
                  </LabelStyled> */

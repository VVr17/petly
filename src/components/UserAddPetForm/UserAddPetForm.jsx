import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import {
  Container,
  Title,
  FormStyled,
  LabelStyled,
  ControlBox,
  Span,
  Label, 
  FieldStyled,
  CommentsBox,
  ErrorStyle
} from "./UserAddPetForm.styled";
import PropTypes from 'prop-types';
import PartFirst from "./PartFirst";
import PartSecond from "./PartSecond";
import UserUploadImg from "components/UserUploadImg";
import Button from "components/Ui-Kit/Button";
import { petsApi } from 'redux/api/petsApi';
import Loader from 'components/Loader';

import { initialValues, validationSchemaPartOne, validationSchemaPartTwo} from './Validation';

const UserAddPetForm = ({ closeModal }) => {
    const [currentPart, setCurrentPart] = useState(1);
    const [image, setImage] = useState(null);
    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);
    const [addPetMutation, { isLoading }] = petsApi.useAddPetMutation();

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
  
   function getFullMonth(date) {
    return date < 10 ? '0' + date : date;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    if (currentPart < 2) {
      setCurrentPart(2);
    } else {

      const dateMDY = `${getFullMonth(
        values.birthDate.getDate()
      )}.${getFullMonth(
        values.birthDate.getMonth() + 1
      )}.${values.birthDate.getFullYear()}`;

      const data = new FormData();
      data.append('name', values.name);
      data.append('birthDate', dateMDY);
      data.append('breed', values.breed);
      data.append('petImage', values.imageFile);
      data.append('comments', values.comments);
      console.log(data);
      try {
        const response = await addPetMutation(data);
      } catch (error) {
        console.error('Failed to add pet:', error);
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
      <Title>Add pet</Title>
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
          {currentPart === 1 && <PartFirst handleNext={handleNext} closeModal={closeModal} />}
          {currentPart === 2 &&
            <PartSecond>
              <>
                <LabelStyled htmlFor="imageFile">Add photo and some comments</LabelStyled>
                <UserUploadImg
                  name="imageFile"
                  fileDataURL={fileDataURL}
                  handleChange={e => {
                  setFile(e.currentTarget.files[0]);
                  setFieldValue('imageFile', e.currentTarget.files[0]);
                  }}
                />
                <CommentsBox>
                  <Label htmlFor="comments">Comments</Label>
                  <FieldStyled
                    id="comments"
                    name="comments"
                    type="text"
                    as="textarea"
                    placeholder="Type comments"
                    onChange={e => {
                      setFieldValue('comments', e.target.value);
                    }}                   
                  />
                  <ErrorStyle name="comments" component="div" />
                </CommentsBox>
              </>
            </PartSecond>}
            <ControlBox>
              {currentPart === 1 &&
                <Button name="transparent" type="button" width="100%" onClick={closeModal}>
                  <Span>Cancel</Span>
                </Button>
              }
              {currentPart === 2 &&
                <Button name="transparent" type="button" width="100%" onClick={handleBack}>
                  <Span>Back</Span>
                </Button>
              }
              <Button name="filled" type="submit" width="100%" disabled={isSubmitting}>
                {currentPart < 2 ? <Span>Next</Span> : <Span>Done</Span>}
              </Button>
            </ControlBox>
          </FormStyled>
        )}
      </Formik>
    </Container>
  );
};

UserAddPetForm.propTypes = {
    closeModal: PropTypes.func.isRequired
};

export default UserAddPetForm;

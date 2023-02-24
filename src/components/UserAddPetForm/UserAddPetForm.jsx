import React, { useState, useEffect } from "react";
import { Formik  } from "formik";
import {
    Container,
    Title,
    FormStyled,
    InputFile,
    LabelStyled,
    ControlBox,
    Span,
    Box
} from "./UserAddPetForm.styled";
import PropTypes from 'prop-types';
import PartFirst from "./PartFirst";
import PartSecond from "./PartSecond";
import UserUploadImg from "components/UserUploadImg";
import Button from "components/Ui-Kit/Button";
import CommentField from "components/AddNoticeForm/AddPetForm/StepTwo/CommentField";

import { useGetCurrentUserQuery } from 'redux/api/userApi';
import { petsApi } from 'redux/api/petsApi';
import { breakpoints } from "constants/theme";

const initialValues = {
    name: "",
    birthDate: "",
    breed: "",
    imageFile: null,
    comments: ""
}

const UserAddPetForm = ({ closeModal }) => {
    const [currentPart, setCurrentPart] = useState(1);
    const [image, setImage] = useState(null);
    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);
    const [addPetMutation] = petsApi.useAddPetMutation();
    const { refetch: refetchCurrentUser } = useGetCurrentUserQuery()

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

    const handleSubmit = async (values, { setSubmitting }) => {
        setSubmitting(false);
        closeModal();
        const data = new FormData();
        data.append('name', values.name);
        data.append('birthDate', values.birthDate);
        data.append('breed', values.breed);
        data.append('petImage', values.imageFile);
        data.append('comments', values.comments);
        try {
            const response = await addPetMutation(data);
            await refetchCurrentUser();
        }   catch (error) {
            console.error('Failed to add pet:', error);
        } 
    };

    const handleNext = () => {
        setCurrentPart(2);
    };

    const handleBack = () => {
        setCurrentPart(1);
    }

    return (
        <Container>
            <Title>Add pet</Title>
            <Formik
                initialValues={initialValues}
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
                                    <InputFile hidden id="imageFile" name="imageFile" type="file" />
                                    <UserUploadImg
                                        fileDataURL={fileDataURL}
                                        handleChange={e => {
                                        setFile(e.currentTarget.files[0]);
                                        setFieldValue('imageFile', e.currentTarget.files[0]);
                                        }}
                                    />
                                    <CommentField name="comments" height="115px"/>
                                    {/* <Label htmlFor="comments">Comments</Label>
                                    <FieldStyled
                                        id="comments"
                                        name="comments"
                                        type="text"
                                        as="textarea"
                                        placeholder="Type comments"
                                        style={{ minHeight: "100px", borderRadius: "20px" }}
                                        onChange={e => {
                                            setFieldValue('comments', e.target.value);
                                        }}
                                    /> */}
                                    <ControlBox>
                                        <Button name="filled" type="button" width="100%" onClick={handleSubmit}>
                                            <Span>Done</Span>
                                        </Button>
                                        <Box></Box>
                                        <Button name="transparent" type="button" width="100%" onClick={handleBack}>
                                            <Span>Back</Span>
                                        </Button>
                                    </ControlBox>
                                </>
                            </PartSecond>}
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
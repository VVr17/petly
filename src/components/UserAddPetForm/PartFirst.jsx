import React from "react";
import { ControlBox, Span, Box } from "./UserAddPetForm.styled";
import PropTypes from 'prop-types';
import InputField from "components/Ui-Kit/Input/Input";
import Button from "components/Ui-Kit/Button";

const PartFirst = ({handleNext, closeModal}) => {
    return (
        <>
            <InputField label="Name pet" id="name" type="text" name="name" placeholder="Type pet name" span="*"/>
            <InputField label="Date of birth" id="birthDate" type="text" name="birthDate" placeholder="Type date of birth" span="*"/>
            <InputField label="Breed" id="breed" type="text" name="breed" placeholder="Type breed" span="*"/>
            <ControlBox>
                <Button name="filled" type="button" width="100%" onClick={handleNext}>
                    <Span>Next</Span>
                </Button>
                <Box></Box>
                <Button name="transparent" type="button" width="100%" onClick={closeModal}>
                    <Span>Cancel</Span>
                </Button>
            </ControlBox>
        </>
    );
};

export default PartFirst;

PartFirst.propTypes = {
    handleNext: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired
};

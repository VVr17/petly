import React from "react";
import { Label, FieldStyled, Button, ControlBox } from "./UserAddPetForm.styled";
import PropTypes from 'prop-types';

const PartFirst = ({handleNext, closeModal}) => {
    return (
        <>
            <Label htmlFor="name">Name pet</Label>
            <FieldStyled id="name" name="name" type="text" placeholder="Type pet name" />
            <Label htmlFor="birthDate">Date of birth</Label>
            <FieldStyled id="birthDate" name="birthDate" placeholder="Type date of birth" />
            <Label htmlFor="breed">Breed</Label>
            <FieldStyled id="breed" name="breed" type="text" placeholder="Type breed" />
            <ControlBox>
                <Button type="button" onClick={handleNext}>Next</Button>
                <Button type="button" onClick={closeModal}>Cancel</Button>
            </ControlBox>
        </>
    );
};

export default PartFirst;

PartFirst.propTypes = {
    handleNext: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired
};

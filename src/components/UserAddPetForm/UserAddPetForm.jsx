import React, { useState } from "react";
import { Formik,  } from "formik";
import { Container, Title, FormStyled } from "./UserAddPetForm.styled";
import PropTypes from 'prop-types';
import PartFirst from "./PartFirst";
import PartSecond from "./PartSecond";

const initialValues = {
    name: "",
    birthDate: "",
    breed: "",
    photoURL: "",
    comments: ""
}

const UserAddPetForm = ({closeModal}) => {
    const [currentPart, setCurrentPart] = useState(1);

    const handleSubmit = (values) => {
        console.log(values);
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
            >
                <FormStyled>
                    {currentPart === 1 && <PartFirst handleNext={handleNext} closeModal={closeModal} />}
                    {currentPart===2 && <PartSecond handleBack={handleBack}/>}
                </FormStyled>
            </Formik>
        </Container>
    );
};

UserAddPetForm.propTypes = {
  closeModal: PropTypes.func.isRequired
};

export default UserAddPetForm;
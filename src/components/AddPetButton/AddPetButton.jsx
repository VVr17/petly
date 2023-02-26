import React from 'react';
import { VscAdd } from "react-icons/vsc";
import {ButtonContainer, Button, ButtonTitle, ReactIcon, Title } from './AddPetButton.styled';

// eslint-disable-next-line react/prop-types
const AddPetButton = ({ handleClick }) => {
  return (
    <ButtonContainer>
      <Title>Add pet</Title>
      <Button whileTap={{ scale: 0.95 }} onClick={handleClick}>
        <ButtonTitle>Add pet</ButtonTitle>
        <VscAdd style={ReactIcon}/>
      </Button>
    </ButtonContainer>
  );
};

export default AddPetButton;

import React from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { Button, ButtonTitle, ReactIcon } from './AddPetButton.styled';

// eslint-disable-next-line react/prop-types
const AddPetButton = ({ handleClick }) => {
  return (
    <Button whileTap={{ scale: 0.95 }} onClick={handleClick}>
      <ButtonTitle>Add pet</ButtonTitle>
      <ReactIcon>
        <BsPlusCircleFill size="44px" />
      </ReactIcon>
    </Button>
  );
};

export default AddPetButton;

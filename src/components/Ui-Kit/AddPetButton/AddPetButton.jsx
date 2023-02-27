import React from 'react';
import PropTypes from 'prop-types';
import { VscAdd } from 'react-icons/vsc';
import {
  ButtonContainer,
  Button,
  ButtonTitle,
  ReactIcon,
  Title,
} from './AddPetButton.styled';

const AddPetButton = ({ handleClick }) => {
  return (
    <ButtonContainer>
      <Title>Add pet</Title>
      <Button whileTap={{ scale: 0.95 }} onClick={handleClick}>
        <ButtonTitle>Add pet</ButtonTitle>
        <VscAdd style={ReactIcon} />
      </Button>
    </ButtonContainer>
  );
};

AddPetButton.propTypes = {
  handleClick: PropTypes.func,
};

export default AddPetButton;

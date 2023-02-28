import React from 'react';
import { VscAdd } from 'react-icons/vsc';
import {
  ButtonContainer,
  Button,
  ButtonTitle,
  ReactIcon,
  Title,
} from './AddPetButton.styled';
import { FormattedMessage } from 'react-intl';

const AddPetButton = ({ handleClick }) => {
  return (
    <ButtonContainer>
      <Title>
        <FormattedMessage id="addPetBtn" />
      </Title>
      <Button whileTap={{ scale: 0.95 }} onClick={handleClick}>
        <ButtonTitle>
          <FormattedMessage id="addPetBtn" />
        </ButtonTitle>
        <VscAdd style={ReactIcon}  />
      </Button>
    </ButtonContainer>
  );
};

AddPetButton.propTypes = {
  handleClick: PropTypes.func,
};

export default AddPetButton;

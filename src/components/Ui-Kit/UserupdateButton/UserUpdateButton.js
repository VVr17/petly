import React from 'react';
import PropTypes from 'prop-types';
import { Button, Check, Pencil } from './UserupdateButton.styled';

const UserUpdateButton = ({
  isInputDisabled,
  type = 'button',
  onClick,
  disabled,
}) => {
  return (
    <Button type={type} onClick={onClick} disabled={disabled}>
      {isInputDisabled ? <Pencil /> : <Check />}
    </Button>
  );
};

UserUpdateButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  isInputDisabled: PropTypes.bool,
  disabled: PropTypes.bool,
};
export default UserUpdateButton;

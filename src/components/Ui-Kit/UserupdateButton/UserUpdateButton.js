import React from 'react';
import PropTypes from 'prop-types';
import { Button, Check, Pencil } from './UserupdateButton.styled';

const UserUpdateButton = ({ isdisabled, type = 'button', onClick }) => {
  return (
    <Button type={type} onClick={onClick}>
      {isdisabled ? <Pencil /> : <Check />}
    </Button>
  );
};

UserUpdateButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  isdisabled: PropTypes.bool,
};
export default UserUpdateButton;

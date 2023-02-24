import React from 'react';
import { Button, Check, Pencil } from './UserupdateButton.styled';
import PropTypes from 'prop-types';

const UserUpdateButton = ({ isdisabled, type = 'button', onClick }) => {
  // console.log('disabled in button', disabled);
  return (
    <Button type={type} onClick={onClick}>
      {isdisabled ? <Pencil /> : <Check />}
    </Button>
  );
};

UserUpdateButton.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  isdisabled: PropTypes.bool,
};
export default UserUpdateButton;

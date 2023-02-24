import React from 'react';
import { Button, Pencil } from './UserupdateButton.styled';

// eslint-disable-next-line react/prop-types
const UserUpdateButton = ({ isDisabled, type = 'button', onClick }) => {
  return (
    <Button type={type} onClick={onClick}>
      {isDisabled ? <Pencil /> : <p>submit</p>}
    </Button>
  );
};

export default UserUpdateButton;

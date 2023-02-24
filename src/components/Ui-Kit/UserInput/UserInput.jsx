import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { ErrorStyle, Input, Label, Title } from './UserInput.styled';

const UserInput = ({
  label,
  name,
  type,
  placeholder,
  id,
  span,
  // autocomplete,
  children,
  as,
  disabled,
}) => {
  return (
    <Label>
      <Title>{label}</Title>
      <Input
        name={name}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
      />
      {children}
      <ErrorStyle name={name} component="div" />
    </Label>
  );
};

UserInput.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  span: PropTypes.string,
  autocomplete: PropTypes.string,
  children: PropTypes.node,
  as: PropTypes.string,
};

export default UserInput;

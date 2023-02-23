import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import {
  ErrorStyle,
  FieldStyle,
  StyledSpan,
  StyledLabel,
  Label,
} from './Input.styled';

const InputField = ({
  label,
  name,
  type,
  placeholder,
  id,
  span,
  autocomplete,
}) => {
  return (
    <>
      <Label htmlFor={name}>
        {label}
        <StyledSpan>{span}</StyledSpan>
        <ErrorStyle name={name} component="div" />
      </Label>
      <FieldStyle
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        autoComplete={autocomplete}
      />
    </>
  );
};

export default InputField;

InputField.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  span: PropTypes.string,
  autocomplete: PropTypes.string,
};

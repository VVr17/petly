import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import {
  ErrorStyle,
  FieldStyle,
  StyledSpan,
  StyledLabel,
} from './Input.styled';

const InputField = ({ label, name, type, placeholder, id, span }) => {
  return (
    <>
      <label htmlFor={name}>
        {label}
        <StyledSpan>{span}</StyledSpan>
      </label>
      <FieldStyle type={type} name={name} id={id} placeholder={placeholder} />
      <ErrorStyle name={name} component="div" />
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
};

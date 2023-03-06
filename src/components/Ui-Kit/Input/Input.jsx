import React from 'react';
import PropTypes from 'prop-types';
import {
  ErrorStyle,
  FieldStyle,
  StyledSpan,
  Label,
  FieldWrapper,
} from './Input.styled';

const InputField = ({
  label,
  name,
  type,
  placeholder,
  id,
  span,
  autocomplete,
  children,
  as,
  onBlur,
  onFocus
}) => {
  return (
    <FieldWrapper>
      <Label htmlFor={name}>
        {label}
        <StyledSpan>{span}</StyledSpan>
      </Label>
      <FieldStyle
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        autoComplete={autocomplete}
        as={as}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      <ErrorStyle name={name} component="div" />
      {children}
    </FieldWrapper>
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
  children: PropTypes.node,
  as: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

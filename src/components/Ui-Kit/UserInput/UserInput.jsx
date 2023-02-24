import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { ErrorStyle, Input } from './UserInput.styled';

const UserInput = ({
  label,
  name,
  type,
  placeholder,
  id,
  span,
  autocomplete,
  children,
  as,
  isDisabled,
}) => {
  return (
    <label>
      {label}
      <Input
        name={name}
        type={type}
        autocomplete={autocomplete}
        isDisabled={isDisabled}
        placeholder={placeholder}
      />
      {children}
      <ErrorStyle name={name} component="div" />
    </label>
  );
};

// <FieldWrapper>
//   <Label htmlFor={name}>
//     {label}
//     <StyledSpan>{span}</StyledSpan>
//   </Label>
//   <FieldStyle
//     type={type}
//     name={name}
//     id={id}
//     placeholder={placeholder}
//     autoComplete={autocomplete}
//     as={as}
//   />
//   <ErrorStyle name={name} component="div" />
//   {children}
// </FieldWrapper>

export default UserInput;

UserInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  span: PropTypes.string,
  autocomplete: PropTypes.string,
  children: PropTypes.node,
  as: PropTypes.string,
  isDisabled: PropTypes.bool,
};

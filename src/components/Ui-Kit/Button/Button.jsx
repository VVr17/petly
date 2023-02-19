import React from 'react';
import { ButtonStyled } from './Button.styled';
import PropTypes from 'prop-types';

// name: 'transparent' | 'filled' | 'learnMore'
const Button = ({ type = 'button', onClick, children, name, width }) => {
  return (
    <ButtonStyled name={name} type={type} onClick={onClick} width={width}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  width: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  type: PropTypes.string,
};

export default Button;

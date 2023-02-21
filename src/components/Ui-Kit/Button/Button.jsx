import React from 'react';
import { ButtonStyled } from './Button.styled';
import PropTypes from 'prop-types';

// name: 'transparent' | 'filled' | 'learnMore'
const Button = ({
  type = 'button',
  onClick,
  children,
  name,
  width,
  selected,
}) => {
  return (
    <ButtonStyled
      name={name}
      type={type}
      onClick={onClick}
      width={width}
      selected={selected}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  width: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.string,
  selected: PropTypes.bool,
};

export default Button;

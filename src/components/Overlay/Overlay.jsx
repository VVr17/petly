import React from 'react';
import PropTypes from 'prop-types';
import { OverlayStyled } from './Overlay.styled';

const Overlay = ({ children, closeHandler }) => {
  const handleClick = e => closeHandler(e);
  return <OverlayStyled onClick={handleClick}>{children}</OverlayStyled>;
};

Overlay.propTypes = {
  children: PropTypes.node,
  closeHandler: PropTypes.func,
};

export default Overlay;

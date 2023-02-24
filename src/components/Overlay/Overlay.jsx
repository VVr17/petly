import React from 'react';
import PropTypes from 'prop-types';
import { OverlayStyled } from './Overlay.styled';
import { pageAnimation } from 'constants/animation';

const Overlay = ({ children, closeHandler }) => {
  const handleClick = e => closeHandler(e);
  return (
    <OverlayStyled
      onClick={handleClick}
      {...pageAnimation}
      transition={{ duration: 0.3 }}
    >
      {children}
    </OverlayStyled>
  );
};

Overlay.propTypes = {
  children: PropTypes.node,
  closeHandler: PropTypes.func,
};

export default Overlay;

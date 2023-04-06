import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { pageAnimation } from 'constants/animation';
import { OverlayStyled } from './Overlay.styled';

const modalRoot = document.querySelector('#modal');

const Overlay = ({ children, closeHandler }) => {
  const handleClick = e => closeHandler(e);

  return createPortal(
    <OverlayStyled
      onClick={handleClick}
      {...pageAnimation}
      transition={{ duration: 0.3 }}
    >
      {children}
    </OverlayStyled>,
    modalRoot
  );
};

Overlay.propTypes = {
  children: PropTypes.node,
  closeHandler: PropTypes.func,
};

export default Overlay;

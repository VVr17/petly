import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';
import Overlay from 'components/Modals/Overlay';
import { popUpMenuAnimation } from 'constants/animation';
import { StyledModal, ButtonCloseModal } from './Modal.styled';

const ModalComponent = ({ closeModal, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <Overlay closeHandler={handleBackdropClick}>
      <StyledModal
        key="popUp"
        {...popUpMenuAnimation}
        transition={{ duration: 0.3 }}
      >
        <ButtonCloseModal onClick={closeModal}>
          <AiOutlineClose size={24} />
        </ButtonCloseModal>
        {children}
      </StyledModal>
    </Overlay>
  );
};

ModalComponent.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default ModalComponent;

import React, { useState, useEffect } from 'react';
import { StyledModal, ButtonCloseModal } from './Modal.styled';
import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';
import Overlay from 'components/Overlay';
import { popUpMenuAnimation } from 'constants/animation';

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

// const ModalComponent = ({ isOpen, toggleModal, children }) => {
//   const [isOpen, setIsOpen] = useState(false)

// function toggleModal(e) {
//   setIsOpen(!isOpen)
// }

//   return (
//     <StyledModal
//       isOpen={isOpen}
//       onBackgroundClick={toggleModal}
//       onEscapeKeydown={toggleModal}
//     >
//       <ButtonCloseModal onClick={toggleModal}>
//         <AiOutlineClose size={36} />
//       </ButtonCloseModal>
//       {children}
//       {/* <AddNoticeFormFirst /> */}
//       <div>Modal2</div>
//     </StyledModal>
//   );
// };

ModalComponent.propTypes = {
  closeModal: PropTypes.func.isRequired,
  // isOpen: PropTypes.bool.isRequired,
  // toggleModal: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default ModalComponent;

import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Ui-Kit/Button';
import {Container, Title, ContainerButton} from './ModalDelete.styled'
    

const ModalDelete = ({ closeModal, onDelete }) => {
  
  return (
    <Container>
      <Title>Do you want delete the ad?</Title>
      <ContainerButton>
      <Button
        name='filter'  
        type="button"      
        onClick={onDelete}        
        whileTap={{ scale: 0.95 }}
      >
        Yes
      </Button>
      <Button
        autofocus='autofocus'
        name='filter'  
        type="button"        
        onClick={closeModal}             
        whileTap={{ scale: 0.95 }}
      >
        No
      </Button>
      </ContainerButton>
    </Container>
  );
};

ModalDelete.propTypes = {   
    onDelete: PropTypes.func,
    closeModal: PropTypes.func,}

export default ModalDelete;

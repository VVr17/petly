import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Button from 'components/Ui-Kit/Button';
import { Container, Title, ContainerButton } from './ModalDelete.styled';

const ModalDelete = ({ closeModal, onDelete }) => {
  return (
    <Container>
      <Title>
        <FormattedMessage id="questionOnDelete" />
      </Title>
      <ContainerButton>
        <Button
          name="filter"
          type="button"
          onClick={onDelete}
          whileTap={{ scale: 0.95 }}
        >
          <FormattedMessage id="yes" />
        </Button>
        <Button
          autofocus="autofocus"
          name="filter"
          type="button"
          onClick={closeModal}
          whileTap={{ scale: 0.95 }}
        >
          <FormattedMessage id="no" />
        </Button>
      </ContainerButton>
    </Container>
  );
};

ModalDelete.propTypes = {
  onDelete: PropTypes.func,
  closeModal: PropTypes.func,
};

export default ModalDelete;

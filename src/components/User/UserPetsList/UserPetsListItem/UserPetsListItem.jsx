import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Item,
  InfoBox,
  Image,
  Text,
  Span,
  TextComments,
  Button,
  iconStyle,
} from './UserPetsListItem.styled';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { useDeletePetMutation } from 'redux/api/petsApi';
import { AnimatePresence } from 'framer-motion';
import ModalDelete from 'components/Modals/ModalDelete';
import ModalComponent from 'components/Modals/Modal';

const UserPetsListItem = ({ pet }) => {
  const { name, birthDate, breed, comments, photoURL } = pet;
  const [deletePetMutation, { isLoading }] = useDeletePetMutation();
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async petId => {
    try {
      setIsOpen(false);
      document.body.classList.remove('modal-open');
      const response = await deletePetMutation(petId);
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = () => {
    document.body.classList.add('modal-open');
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <>
      <Item>
        <Image src={photoURL} alt="photo" />
        <InfoBox>
          <Button onClick={openModal}>
            <RiDeleteBin6Fill style={iconStyle} />
          </Button>
          <Text>
            <Span>Name: </Span>
            {name}
          </Text>
          <Text>
            <Span>Date of birth: </Span>
            {birthDate}
          </Text>
          <Text>
            <Span>Breed: </Span>
            {breed}
          </Text>
          <TextComments>
            <Span>Comments: </Span>
            {comments}
          </TextComments>
        </InfoBox>
      </Item>
      <AnimatePresence>
        {isOpen && (
          <ModalComponent closeModal={closeModal}>
            <ModalDelete
              closeModal={closeModal}
              onDelete={() => handleDelete(pet._id)}
            />
          </ModalComponent>
        )}
      </AnimatePresence>
    </>
  );
};

UserPetsListItem.propTypes = {
  pet: PropTypes.object.isRequired,
};

export default UserPetsListItem;

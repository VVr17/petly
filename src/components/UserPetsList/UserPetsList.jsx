import React from 'react';
import { useState } from 'react';
import {
  Container,
  Title,
  Box,
  List,
  ImageBox,
  Image,
  ImageSpan,
} from './UserPetsList.styled';
import { useGetCurrentUserQuery } from 'redux/api/userApi';
import UserAddPetForm from 'components/UserAddPetForm';
import UserPetsListItem from './UserPetsListItem';
import Modal from 'components/Modal';
import { AnimatePresence } from 'framer-motion';
import AddPetButton from 'components/AddPetButton';
import Pets from '../../assets/images/desktop/pet.jpg';

const UserPetsList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useGetCurrentUserQuery();

  const handleIsOpen = () => {
    setIsOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <Container>
      <Box>
        <Title>My pets:</Title>
        <AddPetButton handleClick={handleIsOpen} />
      </Box>
      {data?.pets.length > 0 ? (
        <List>
          {data?.pets.map(pet => {
            return <UserPetsListItem key={pet._id} pet={pet} />;
          })}
        </List>
      ) : (
        <ImageBox>
          <Title>You have not added your pets yet.</Title>
          <Image src={Pets} alt="pets"></Image>
        </ImageBox>
      )}
      <AnimatePresence>
        {isOpen && (
          <Modal closeModal={closeModal} key="popUp">
            <UserAddPetForm closeModal={closeModal} />
          </Modal>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default UserPetsList;

import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Title, Box, List } from './UserPetsList.styled';
import { useGetCurrentUserQuery } from 'redux/api/userApi';
import { petsApi } from 'redux/api/petsApi';
import UserAddPetForm from 'components/UserAddPetForm';

import UserPetsListItem from './UserPetsListItem';
import Modal from 'components/Modal';
import { AnimatePresence } from 'framer-motion';
import AddPetButton from 'components/AddPetButton';

const UserPetsList = () => {
  const [pets, setPets] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [deletePetMutation] = petsApi.useDeletePetMutation();
  const { data: currentUserData, refetch: refetchCurrentUser } =
    useGetCurrentUserQuery();
  let dataPets = currentUserData ? currentUserData : [];

  useEffect(() => {
    if (dataPets) {
      setPets(dataPets.pets);
    }
  }, [dataPets]);

  const handleDelete = async petId => {
    window.alert('Pet has been deleted?');
    try {
      const response = await deletePetMutation(petId);
      await refetchCurrentUser();
      console.log('Pet deleted!');
    } catch (error) {
      console.log(error);
    }
  };

  const handleIsOpen = () => {
    setIsOpen(true);
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
      {pets && (
        <List>
          {pets.map(pet => {
            return (
              <UserPetsListItem
                key={pet._id}
                pet={pet}
                handleDelete={handleDelete}
              />
            );
          })}
        </List>
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

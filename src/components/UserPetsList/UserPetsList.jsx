import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  Container,
  Box,
  Title,
  Text,
  Button,
  List,
  iconStyle,
} from './UserPetsList.styled';
import { VscAdd } from 'react-icons/vsc';
import { useGetCurrentUserQuery } from 'redux/api/userApi';
import { petsApi } from 'redux/api/petsApi';
import UserAddPetForm from 'components/UserAddPetForm';

import UserPetsListItem from './UserPetsListItem';
import Modal from 'components/Modal';
import { AnimatePresence } from 'framer-motion';

const UserPetsList = () => {
  const { useAddPetMutation, useDeletePetMutation } = petsApi;
  const [deletePetMutation] = useDeletePetMutation();
  const { data: currentUserData, refetch: refetchCurrentUser } =
    useGetCurrentUserQuery();
  const [addPetMutation] = useAddPetMutation();

  let dataPets = currentUserData ? currentUserData : [];
  const [pets, setPets] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (dataPets) {
      setPets(dataPets.pets);
    }
  }, [dataPets]);

  const handleDelete = async petId => {
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
  };

  const handleSubmit = async data => {
    console.log('Completed!', data);
    try {
      const response = await addPetMutation(data);
      await refetchCurrentUser();
    } catch (error) {
      console.error('Failed to add pet:', error);
    }
  };

  return (
    <Container>
      <Box>
        <Title>My pets:</Title>
        <Text>Add pet:</Text>
        <Button onClick={handleIsOpen}>
          <VscAdd style={iconStyle} />
        </Button>
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
            <UserAddPetForm closeModal={closeModal} onSubmit={handleSubmit} />
          </Modal>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default UserPetsList;

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
import { useGetCurrentUserQuery } from "redux/api/userApi";
import { petsApi } from 'redux/api/petsApi';
import UserAddPetForm from 'components/UserAddPetForm';

import UserPetsListItem from './UserPetsListItem';
import Modal from 'components/Modal';

const UserPetsList = () => {
  const { useAddPetMutation, useDeletePetMutation } = petsApi;
  const [deletePetMutation] = useDeletePetMutation();
  const { data: currentUserData, refetch: refetchCurrentUser } = useGetCurrentUserQuery();

  let dataPets = currentUserData ? currentUserData : [];
  const [pets, setPets] = useState();
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    if (dataPets) {
      setPets(dataPets.pets);
      console.log(dataPets);
    }
  }, [dataPets]);

  const handleDelete = async (petId) => {
    try {
      const response = await deletePetMutation(petId);
      await refetchCurrentUser();
      console.log("Pet deleted!")
    } catch (error) {
      console.log(error);
    };
  };

  const handleIsOpen = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    console.log("Completed!");
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
            return <UserPetsListItem key={pet._id} pet={pet} handleDelete={handleDelete} />;
          })}
        </List>
      )}
      {isOpen ?
      <Modal closeModal={closeModal}>
          <UserAddPetForm closeModal={closeModal}/>
      </Modal>
      : null}
    </Container>
  );
};

export default UserPetsList;

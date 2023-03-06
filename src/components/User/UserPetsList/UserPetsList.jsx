import React from 'react';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { AnimatePresence } from 'framer-motion';
import { BsPlusCircleFill } from 'react-icons/bs';
import { useGetCurrentUserQuery } from 'redux/api/userApi';
import UserAddPetForm from 'components/User/UserAddPetForm';
import UserPetsListItem from './UserPetsListItem';
import Modal from 'components/Modals/Modal';
import Pets from 'assets/images/desktop/pet.jpg';
import Loader from 'components/Loader';
import {
  Container,
  Title,
  Box,
  List,
  ImageBox,
  Image,
  Button,
  ButtonTitle,
  ReactIcon,
} from './UserPetsList.styled';

const UserPetsList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useGetCurrentUserQuery();

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
        <Title>
          <FormattedMessage id="myPet" />:
        </Title>
        <ButtonTitle>
          <FormattedMessage id="addPetBtn" />
        </ButtonTitle>
        <Button whileTap={{ scale: 0.95 }} onClick={handleIsOpen}>
          <ReactIcon>
            <BsPlusCircleFill size="44px" />
          </ReactIcon>
        </Button>
      </Box>
      {isLoading && <Loader />}
      {!isLoading && data?.pets.length === 0 && (
        <ImageBox>
          <Title>
            <FormattedMessage id="notAddedPet" />
          </Title>
          <Image src={Pets} alt="pets"></Image>
        </ImageBox>
      )}
      {!isLoading && data?.pets.length > 0 && (
        <List>
          {data?.pets.map(pet => {
            return <UserPetsListItem key={pet._id} pet={pet} />;
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

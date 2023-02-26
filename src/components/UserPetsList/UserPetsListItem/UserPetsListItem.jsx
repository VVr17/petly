import React from 'react';
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
import { useGetCurrentUserQuery } from 'redux/api/userApi';
import { toast } from 'react-toastify';

const UserPetsListItem = ({ pet }) => {
  const { name, birthDate, breed, comments, photoURL } = pet;
  const [deletePetMutation, { isLoading }] = useDeletePetMutation();

  const handleDelete = async petId => {
    if (confirm('Do you want to delete your pet')) {
      try {
        const response = await deletePetMutation(petId);
        toast.info(`Pet has been deleted`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Item>
      <Image src={photoURL} alt="photo" />
      <InfoBox>
        <Button onClick={() => handleDelete(pet._id)}>
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
  );
};

UserPetsListItem.propTypes = {
  pet: PropTypes.object.isRequired,
  // handleDelete: PropTypes.func.isRequired,
};

export default UserPetsListItem;

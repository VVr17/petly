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

const UserPetsListItem = ({ pet, handleDelete }) => {
  const { name, birthDate, breed, comments, photoURL } = pet;

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
  handleDelete: PropTypes.func.isRequired,
};

export default UserPetsListItem;

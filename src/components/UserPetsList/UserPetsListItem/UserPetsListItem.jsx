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

const UserPetsListItem = ({ pet }) => {
  const { name, dateOfBirth, breed, comments } = pet;

  return (
    <Item>
      <Image></Image>
      <InfoBox>
        <Button>
          <RiDeleteBin6Fill style={iconStyle} />
        </Button>
        <Text>
          <Span>Name: </Span>
          {name}
        </Text>
        <Text>
          <Span>Date of birth: </Span>
          {dateOfBirth}
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
};

export default UserPetsListItem;

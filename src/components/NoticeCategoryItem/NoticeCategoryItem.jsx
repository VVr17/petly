import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Ui-Kit/Button';
import {
  CardNotice,
  Title,
  Thead,
  Text,
  ContainerInfo,
  CategoryBox,
  CategoryName,
  ContainerButton,
} from './NoticeCategoryItem.styled';

const onOpenModal = () => {};
const addToFavorite = () => {};
const deleteNotice = () => {};

const NoticeCategoryItem = ({
  photoURL,
  category,
  title,
  breed,
  location,
  birthDate,
  price,
}) => {
  const age = 25 - 22;
  const altPosterUrl = `https://via.placeholder.com/280x288.png?text=No+photo`;
  return (
    <CardNotice>
      <img
        src={photoURL ? photoURL : altPosterUrl}
        alt={title}
        loading="lazy"
      />
      <CategoryBox>
        <CategoryName>{category}</CategoryName>
      </CategoryBox>      
      <ContainerInfo>
        <Title>{title}</Title>
        <table>
          <tbody>
            <tr>
              <Thead>Breed:</Thead>
              <Text>{breed}</Text>
            </tr>
            <tr>
              <Thead>Place:</Thead>
              <Text>{location}</Text>
            </tr>
            <tr>
              <Thead>Age:</Thead>
              <Text>{age}</Text>
            </tr>

            {category === 'sell' && (
              <tr>
                <Thead>Price:</Thead>
                <Text>{price} $</Text>
              </tr>
            )}
          </tbody>
        </table>
        <ContainerButton>
        <Button
          name="learnMore"
          type="button"
          width="100%"
          onClick={onOpenModal}
        >
          Learn more
        </Button>
        <Button
          name="learnMore"
          type="button"
          width="100%"
          onClick={deleteNotice}
        >
          Delete
        </Button>
      </ContainerButton>
      </ContainerInfo>
      
    </CardNotice>
  );
};

NoticeCategoryItem.propTypes = {
  photoURL: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
  price: PropTypes.number,
};

export default NoticeCategoryItem;

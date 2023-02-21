import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Ui-Kit/Button';
import { IoTrashSharp } from 'react-icons/io5';
import {
  CardNotice,
  ImageBox,
  Image,
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
  const place = location.split(',');
  const city = place[0];

  const age = birthDate => {
    let today = new Date();
    let d = birthDate.split('.');
    let date = d[2] + '.' + d[1] + '.' + d[0];
    let birthDateFormat = new Date(date);
    let age = today.getFullYear() - birthDateFormat.getFullYear();
    let m = today.getMonth() - birthDateFormat.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDateFormat.getDate())) {
      age--;
    }
    if (age === 0 && m < 0) {
      m = 12 + m;
      if (d < 0 || (d === 0 && today.getDate() < birthDateFormat.getDate())) {
        m--;
      }
    }

    return age ? age + ' ' + 'years' : m + ' ' + 'months';
  };

  const altPosterUrl = `https://via.placeholder.com/280x288.png?text=No+photo`;
  return (
    <CardNotice>
      <ImageBox>
        <Image
          src={photoURL ? photoURL : altPosterUrl}
          alt={title}
          loading="lazy"
        />
      </ImageBox>
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
              <Text>{city}</Text>
            </tr>
            <tr>
              <Thead>Age:</Thead>
              <Text>{age(birthDate)}</Text>
            </tr>

            {category === 'sell' && (
              <tr>
                <Thead>Price:</Thead>
                <Text>{price} $</Text>
              </tr>
            )}
          </tbody>
        </table>
      </ContainerInfo>
      <ContainerButton>
        <Button
          name="learnMore"
          type="button"
          width="248px"
          onClick={onOpenModal}
        >
          Learn more
        </Button>
        <Button
          name="learnMore"
          type="button"
          width="248px"
          onClick={deleteNotice}
        >
          Delete
          <IoTrashSharp style={{ marginLeft: '15px' }} />
        </Button>
      </ContainerButton>
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

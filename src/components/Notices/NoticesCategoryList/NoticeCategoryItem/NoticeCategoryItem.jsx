import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { IoTrashSharp } from 'react-icons/io5';
import { IoIosHeart } from 'react-icons/io';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';

import getAge from 'js';
import { selectUserState } from 'redux/user/userSelectors';
import { selectFavoritesState } from 'redux/favorites/favoritesSelector';
import { useDeleteNoticeMutation } from 'redux/api/noticesApi';
import { useToggleFavorites } from 'hooks/useToggleFavorites';
import { useGetCategory } from 'hooks/useGetCategory';

import Button from 'components/Ui-Kit/Button';
import Loader from 'components/Loader';
import ModalNotice from 'components/Notices/ModalNotice';
import ModalComponent from 'components/Modals/Modal';
import ModalDelete from 'components/Modals/ModalDelete/ModalDelete';
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
  ToggleFavoriteButton,
} from './NoticeCategoryItem.styled';

const NoticeCategoryItem = ({
  _id,
  photoURL,
  category,
  title,
  breed,
  location,
  birthDate,
  price,
  owner,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [delModalIsOpen, setDelModalIsOpen] = useState(false);
  const favorites = useSelector(selectFavoritesState);
  const { formatMessage } = useIntl();
  const noticeCategory = useGetCategory(category);
  const user = useSelector(selectUserState);
  const showButtonDelete = user ? owner === user._id : false;

  const place = location.split(',');
  const city = place[0];
  const altPosterUrl = `https://via.placeholder.com/280x288.png?text=No+photo`;
  const isFavorite = favorites?.includes(_id);

  const [deleteNotice, { isLoading: deleting }] = useDeleteNoticeMutation();
  const [toggleFavorites, { isFavoritesLoading }] = useToggleFavorites();
  const isLoading = deleting || isFavoritesLoading;

  const closeModal = () => {
    setModalIsOpen(false);
    setDelModalIsOpen(false);
    document.body.classList.remove('modal-open');
  };

  const onDelete = async () => {
    setDelModalIsOpen(false);
    setModalIsOpen(false);
    await deleteNotice(_id);
    toast.success(formatMessage({ id: 'toastAdRemoved' }));
    document.body.classList.remove('modal-open');
  };

  return (
    <>
      {isLoading && <Loader />}
      <CardNotice>
        <ImageBox>
          <Image
            src={photoURL ? photoURL : altPosterUrl}
            alt={title}
            loading="lazy"
          />
        </ImageBox>
        <ToggleFavoriteButton
          isFavorite={isFavorite}
          type="button"
          onClick={() => toggleFavorites({ noticeId: _id })}
        >
          {<IoIosHeart size="28px" />}
        </ToggleFavoriteButton>
        <CategoryBox>
          <CategoryName>{noticeCategory}</CategoryName>
        </CategoryBox>
        <ContainerInfo>
          <Title>{title}</Title>
          <table>
            <tbody>
              <tr>
                <Thead>{formatMessage({ id: 'breed' })}:</Thead>
                <Text>{breed}</Text>
              </tr>
              <tr>
                <Thead>{formatMessage({ id: 'place' })}:</Thead>
                <Text>{city}</Text>
              </tr>
              <tr>
                <Thead>{formatMessage({ id: 'age' })}:</Thead>
                <Text>{getAge(birthDate)}</Text>
              </tr>

              {category === 'sell' && (
                <tr>
                  <Thead>{formatMessage({ id: 'price' })}:</Thead>
                  <Text>{price} $</Text>
                </tr>
              )}
            </tbody>
          </table>
        </ContainerInfo>
        <ContainerButton>
          <Button
            id={_id}
            name="learnMore"
            type="button"
            width="248px"
            onClick={() => {
              setModalIsOpen(true);
              document.body.classList.add('modal-open');
            }}
          >
            {formatMessage({ id: 'learnMore' })}
          </Button>
          {showButtonDelete && (
            <Button
              name="learnMore"
              type="button"
              width="248px"
              onClick={() => {
                setDelModalIsOpen(true);
                document.body.classList.add('modal-open');
              }}
            >
              {formatMessage({ id: 'delete' })}
              <IoTrashSharp style={{ marginLeft: '12px' }} />
            </Button>
          )}
        </ContainerButton>
      </CardNotice>
      <AnimatePresence>
        {modalIsOpen && (
          <ModalComponent closeModal={closeModal} key="popUp">
            <ModalNotice id={_id} onClose={closeModal} />
          </ModalComponent>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {delModalIsOpen && (
          <ModalComponent closeModal={closeModal} key="popUp">
            <ModalDelete closeModal={closeModal} onDelete={onDelete} />
          </ModalComponent>
        )}
      </AnimatePresence>
    </>
  );
};

NoticeCategoryItem.propTypes = {
  _id: PropTypes.string.isRequired,
  photoURL: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  price: PropTypes.string,
};

export default NoticeCategoryItem;

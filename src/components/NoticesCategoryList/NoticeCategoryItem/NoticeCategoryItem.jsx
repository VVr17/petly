import { useState, React } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  useDeleteNoticeMutation,
  useAddNoticeToFavoriteMutation,
  useRemoveNoticeFromFavoriteMutation,
  useGetUserNoticesQuery,
  useGetFavoritesNoticesQuery,
} from 'redux/api/noticesApi';
import { selectIsAuthState, selectUserState } from 'redux/user/userSelectors';
import { selectStatusFilter } from 'redux/filter/filterSelectors';
import getAge from '../../../js';
import Button from 'components/Ui-Kit/Button';
import ModalNotice from 'components/ModalNotice';
import ModalComponent from 'components/Modal';
import { AnimatePresence } from 'framer-motion';
import { IoTrashSharp } from 'react-icons/io5';
import { IoIosHeart } from 'react-icons/io';
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
import { useGetCurrentUserQuery } from 'redux/api/userApi';
import { theme } from 'constants/theme';
import Loader from 'components/Loader';
import { selectFavoritesState } from 'redux/favorites/favoritesSelector';

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
  const isAuth = useSelector(selectIsAuthState);
  const status = useSelector(selectStatusFilter);
  const user = useSelector(selectUserState);
  const showButtonDelete = owner === user._id;
  console.log('owner:', owner);
  console.log('user:', user._id);
  const favorites = useSelector(selectFavoritesState);
  const place = location.split(',');
  const city = place[0];
  const altPosterUrl = `https://via.placeholder.com/280x288.png?text=No+photo`;
  const isFavorite = favorites.includes(_id);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteNotice, { isLoading: deleting }] = useDeleteNoticeMutation();
  const [addNoticeToFavorite, { isLoading: adding }] =
    useAddNoticeToFavoriteMutation();
  const [deleteNoticeFromFavorite, { isLoading: removing }] =
    useRemoveNoticeFromFavoriteMutation();

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const toggleFavorite = async noticeId => {
    if (!isAuth) {
      toast.warn('Please, register or login to add notice to favorite');
      return;
    }

    if (isFavorite) {
      await deleteNoticeFromFavorite(noticeId);
      toast.info(`Notice with ID ${_id} has been remove from favorites`);
      return;
    }
    await addNoticeToFavorite(noticeId);
    toast.info(`Notice with ID ${_id} has been added to favorites`);
  };

  const onDelete = () => {
    const confirmed = confirm('Are you sure you want to delete this file?');
    if (confirmed) {
      deleteNotice(_id);
    } else {
      return;
    }
  };

  const isLoading = deleting || adding || removing;

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
          onClick={() => toggleFavorite(_id)}
        >
          {<IoIosHeart size="28px" />}
        </ToggleFavoriteButton>
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
                <Text>{getAge(birthDate)}</Text>
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
            id={_id}
            name="learnMore"
            type="button"
            width="248px"
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            Learn more
          </Button>
          {showButtonDelete && (
            <Button
              name="learnMore"
              type="button"
              width="248px"
              onClick={() => onDelete()}
            >
              Delete
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

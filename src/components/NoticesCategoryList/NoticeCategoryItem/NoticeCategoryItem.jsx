import { useState, React } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import {
  useDeleteNoticeMutation,
  useAddNoticeToFavoriteMutation,
  useRemoveNoticeFromFavoriteMutation,
  useGetUserNoticesQuery,
  useGetFavoritesNoticesQuery,
} from 'redux/api/noticesApi';
import { selectIsAuthState } from 'redux/user/userSelectors';
import { selectStatusFilter } from 'redux/filter/filterSelectors';
import getAge from '../../../js';
import Button from 'components/Ui-Kit/Button';
import ModalNotice from 'components/ModalNotice';
import ModalComponent from 'components/Modal';
import { AnimatePresence } from 'framer-motion';
import { IoTrashSharp } from 'react-icons/io5';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
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
}) => {
  const isAuth = useSelector(selectIsAuthState);
  const status = useSelector(selectStatusFilter);
  const showButtonDelete = status === 'user';
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

  const toggleFavorite = noticeId => {
    if (!isAuth) {
      toast.info('Please, register or login to add notice to favorite');
      return;
    }

    if (isFavorite) {
      deleteNoticeFromFavorite(noticeId);
      return;
    }
    addNoticeToFavorite(noticeId);
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
              onClick={() => deleteNotice(_id)}
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
  price: PropTypes.string,
};

export default NoticeCategoryItem;

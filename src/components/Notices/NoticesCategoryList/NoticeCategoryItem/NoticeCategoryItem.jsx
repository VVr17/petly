import { useState, React } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import { AnimatePresence } from 'framer-motion';
import { IoTrashSharp } from 'react-icons/io5';
import { IoIosHeart } from 'react-icons/io';
import {
  useDeleteNoticeMutation,
  useAddNoticeToFavoriteMutation,
  useRemoveNoticeFromFavoriteMutation,
} from 'redux/api/noticesApi';
import { selectIsAuthState, selectUserState } from 'redux/user/userSelectors';
import getAge from 'js';
import Button from 'components/Ui-Kit/Button';
import ModalNotice from 'components/Notices/ModalNotice';
import ModalComponent from 'components/Modals/Modal';
import Loader from 'components/Loader';
import { selectFavoritesState } from 'redux/favorites/favoritesSelector';
import ModalDelete from 'components/Modals/ModalDelete/ModalDelete';
import { useGetCategory } from 'hooks/useGetCategory';
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
  const noticeCategory = useGetCategory(category);
  const isAuth = useSelector(selectIsAuthState);
  const user = useSelector(selectUserState);
  const favorites = useSelector(selectFavoritesState);
  const showButtonDelete = user ? owner === user._id : false;
  const { formatMessage } = useIntl();

  const place = location.split(',');
  const city = place[0];
  const altPosterUrl = `https://via.placeholder.com/280x288.png?text=No+photo`;
  const isFavorite = favorites?.includes(_id);

  const [deleteNotice, { isLoading: deleting }] = useDeleteNoticeMutation();
  const [addNoticeToFavorite, { isLoading: adding }] =
    useAddNoticeToFavoriteMutation();

  const [deleteNoticeFromFavorite, { isLoading: removing }] =
    useRemoveNoticeFromFavoriteMutation();

  const closeModal = () => {
    setModalIsOpen(false);
    setDelModalIsOpen(false);
    document.body.classList.remove('modal-open');
  };

  const toggleFavorite = async noticeId => {
    if (!isAuth) {
      toast(formatMessage({ id: 'toastRegisterLogin' }));
      return;
    }
    if (isFavorite) {
      await deleteNoticeFromFavorite(noticeId);
      toast.info(formatMessage({ id: 'toastRemovedNotice' }));
      return;
    }
    await addNoticeToFavorite(noticeId);
    toast.info(formatMessage({ id: 'toastAddedNotice' }));
  };

  const onDelete = async () => {
    setDelModalIsOpen(false);
    setModalIsOpen(false);
    await deleteNotice(_id);
    toast.success(formatMessage({ id: 'toastAdRemoved' }));
    document.body.classList.remove('modal-open');
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

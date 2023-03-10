import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { IoIosHeart } from 'react-icons/io';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import {
  useAddNoticeToFavoriteMutation,
  useRemoveNoticeFromFavoriteMutation,
} from 'redux/api/noticesApi';
import { selectFavoritesState } from 'redux/favorites/favoritesSelector';
import { selectIsAuthState } from 'redux/user/userSelectors';
import { selectStatusFilter } from 'redux/filter/filterSelectors';
import { statusFilter } from 'redux/filter/filterConstans';
import { useGetNoticeInfo } from 'hooks/useGetNoticeInfo';
import Button from 'components/Ui-Kit/Button';
import Loader from 'components/Loader';
import { noImageFallback } from 'constants/noImageFallback';
import { noDataFallback } from 'constants/noDataFallback';
import {
  ImgWrapper,
  PetsImg,
  Category,
  CategoryName,
  TextContent,
  PetInfo,
  Title,
  PetData,
  Comments,
  CommentsTitle,
  NoticeContainer,
  Buttons,
  Plug,
  LinkModal,
} from './ModalNotice.styled';

const ModalNotice = ({ id, onClose }) => {
  const { noticeInfo, ownerInfo, isFetching, isError, error, generalInfo } =
    useGetNoticeInfo(id);
  const currentCategory = useSelector(selectStatusFilter);
  const { formatMessage } = useIntl();

  const onRedirect = () => {
    window.location = `${ownerInfo[1].href}`;
  };

  const isAuth = useSelector(selectIsAuthState);
  const favorites = useSelector(selectFavoritesState);
  const isFavorite = favorites.includes(id);
  const [addNoticeToFavorite, { isLoading: adding }] =
    useAddNoticeToFavoriteMutation();
  const [deleteNoticeFromFavorite, { isLoading: removing }] =
    useRemoveNoticeFromFavoriteMutation();

  const toggleFavorite = async noticeId => {
    if (!isAuth) {
      toast.info(formatMessage({ id: 'toastRegisterLogin' }));
      return;
    }
    if (isFavorite) {
      await deleteNoticeFromFavorite(noticeId);
      toast.info(formatMessage({ id: 'toastRemovedNotice' }));
      if (currentCategory === statusFilter.favoriteAds) {
        document.body.classList.remove('modal-open');
      }
      return;
    }
    await addNoticeToFavorite(noticeId);
    toast.info(formatMessage({ id: 'toastAddedNotice' }));
    if (currentCategory === statusFilter.favoriteAds) {
      document.body.classList.remove('modal-open');
    }
  };

  const isLoading = adding || removing;

  return (
    <>
      <NoticeContainer>
        {(isLoading || isFetching) && <Loader />}
        {isFetching && <Plug />}
        {isError && <div>{isError.message}</div>}

        {noticeInfo && ownerInfo && (
          <>
            <PetInfo>
              <ImgWrapper>
                <PetsImg src={generalInfo.photoURL || noImageFallback} />
                <Category>
                  <CategoryName>{generalInfo.category}</CategoryName>
                </Category>
              </ImgWrapper>

              <TextContent>
                <Title>{generalInfo.title}</Title>
                <PetData>
                  <table>
                    <tbody>
                      {noticeInfo.map(({ field, value }) => (
                        <tr key={field}>
                          <th>{field}:</th>
                          <td>{value}</td>
                        </tr>
                      ))}
                      {ownerInfo.map(({ field, value, href }) => (
                        <tr key={field}>
                          <th>{field}:</th>
                          <td>
                            {value ? (
                              <LinkModal href={href}>{value}</LinkModal>
                            ) : (
                              noDataFallback
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </PetData>
              </TextContent>
            </PetInfo>
            <Comments>
              <CommentsTitle>
                {formatMessage({ id: 'comment' })}:{' '}
              </CommentsTitle>
              {generalInfo.comments}
            </Comments>

            <Buttons>
              <Button onClick={onRedirect} name="contacts" type="button">
                {formatMessage({ id: 'contact' })}
              </Button>

              <Button
                name="addToFavorite"
                type="button"
                isFavorite={isFavorite}
                onClick={() => toggleFavorite(id)}
              >
                {!isFavorite
                  ? formatMessage({ id: 'addTo' })
                  : formatMessage({ id: 'removeFrom' })}
                {<IoIosHeart fill="#F59256" size="20px" margin-left="10px" />}
              </Button>
            </Buttons>
          </>
        )}
      </NoticeContainer>
    </>
  );
};

ModalNotice.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default ModalNotice;

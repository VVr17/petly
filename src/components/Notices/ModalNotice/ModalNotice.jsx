import React from 'react';
import { IoIosHeart } from 'react-icons/io';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';

import { noDataFallback } from 'constants/noDataFallback';
import { noImageFallback } from 'constants/noImageFallback';
import { selectFavoritesState } from 'redux/favorites/favoritesSelector';
import { useGetNoticeInfo } from 'hooks/useGetNoticeInfo';
import { useToggleFavorites } from 'hooks/useToggleFavorites';

import Button from 'components/Ui-Kit/Button';
import Loader from 'components/Loader';
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

const ModalNotice = ({ id }) => {
  const { noticeInfo, ownerInfo, isFetching, isError, generalInfo } =
    useGetNoticeInfo(id);
  const { formatMessage } = useIntl();
  const favorites = useSelector(selectFavoritesState);
  const isFavorite = favorites.includes(id);
  const [toggleFavorites, { isFavoritesLoading }] = useToggleFavorites();

  const onRedirect = () => {
    window.location = `${ownerInfo[1].href}`;
  };

  return (
    <>
      <NoticeContainer>
        {(isFavoritesLoading || isFetching) && <Loader />}
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
                onClick={() =>
                  toggleFavorites({ noticeId: id, modalLearnMoreIsOpen: true })
                }
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

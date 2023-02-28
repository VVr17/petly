import Container from 'components/Container';
import  React  from 'react';
import { useSelector } from 'react-redux';
import {
  useAddNoticeToFavoriteMutation,
  useRemoveNoticeFromFavoriteMutation,
  useGetNoticeByIdQuery,
} from 'redux/api/noticesApi';
import { selectFavoritesState } from 'redux/favorites/favoritesSelector';
import { toast } from 'react-toastify';
import { selectIsAuthState } from 'redux/user/userSelectors';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import { IoIosHeart } from 'react-icons/io';
import {
  ImgWrapper,
  PetsImg,
  Category,
  CategoryName,
  TextContent,
  PetInfo,
  Title,
  PetData,
  CategoryData,
  DataItem,
  CategoryText,
  ValueData,
  ValueText,
  Comments,
  CommentsTitle,
  NoticeContainer,
  Buttons,
  Plug,
  LinkModal,
} from './ModalNotice.styled';
import Button from 'components/Ui-Kit/Button';
import { selectStatusFilter } from 'redux/filter/filterSelectors';
import { statusFilter } from 'redux/filter/filterConstans';

const altPosterUrl = `https://via.placeholder.com/280x288.png?text=No+photo`;

const ModalNotice = ({ id, onClose }) => {
  const { data, isFetching, isError } = useGetNoticeByIdQuery(id);
  const currentCategory = useSelector(selectStatusFilter);
  const noItem = '-----------';

  const onRedirect = () => {
    window.location = `tel:${data.owner.phone}`;
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
      toast.info('Please, register or login to add notice to favorite');
      return;
    }
    if (isFavorite) {
      await deleteNoticeFromFavorite(noticeId);
      toast.info(`Notice has been removed from favorites`);
      if (currentCategory === statusFilter.favoriteAds) {
        document.body.classList.remove('modal-open');
      }
      return;
    }
    await addNoticeToFavorite(noticeId);
    toast.info(`Notice has been added to favorites`);
    if (currentCategory === statusFilter.favoriteAds) {
      document.body.classList.remove('modal-open');
    }
  };

  const isLoading = adding || removing;

  return (
    <>
      <NoticeContainer>
        {isLoading && <Loader />}
        {isFetching && <Loader />}
        {isFetching && <Plug />}
        {isError && <div>{isError.message}</div>}

        {data && (
          <>
            <PetInfo>
              <ImgWrapper>
                <PetsImg src={data.photoURL || altPosterUrl} />
                <Category>
                  <CategoryName>
                    {(data && data.category === 'sell' && 'sell') ||
                      (data.category === 'lost-found' && 'lost/found') ||
                      (data.category === 'in-good-hands' && 'in good hands')}
                  </CategoryName>
                </Category>
              </ImgWrapper>

              <TextContent>
                <Title>{data.title}</Title>
                <PetData>
                  <CategoryData>
                    <DataItem>
                      <CategoryText>Name:</CategoryText>
                    </DataItem>
                    <DataItem>
                      <CategoryText>Birthday:</CategoryText>
                    </DataItem>
                    <DataItem>
                      <CategoryText>Breed:</CategoryText>
                    </DataItem>
                    <DataItem>
                      <CategoryText>Location:</CategoryText>
                    </DataItem>
                    <DataItem>
                      <CategoryText>The sex:</CategoryText>
                    </DataItem>
                    <DataItem>
                      <CategoryText>Email:</CategoryText>
                    </DataItem>
                    <DataItem>
                      <CategoryText>Phone:</CategoryText>
                    </DataItem>
                    {data.category === 'sell' && (
                      <DataItem>
                        <CategoryText>Price:</CategoryText>
                      </DataItem>
                    )}
                  </CategoryData>
                  <ValueData>
                    <DataItem>
                      <ValueText>{data.name}</ValueText>
                    </DataItem>
                    <DataItem>
                      <ValueText>{data.birthDate}</ValueText>
                    </DataItem>
                    <DataItem>
                      {data.breed === 'Unknown' ? (
                        <ValueText>{noItem}</ValueText>
                      ) : (
                        <ValueText>{data.breed}</ValueText>
                      )}
                    </DataItem>
                    <DataItem>
                      <ValueText>
                        {data && data.location.split(',')[0]}
                      </ValueText>
                    </DataItem>
                    <DataItem>
                      <ValueText>{data.sex}</ValueText>
                    </DataItem>
                    <DataItem>
                      <ValueText>
                        <LinkModal href={`mailto:${data.owner.email}`}>
                          {data.owner.email}
                        </LinkModal>
                      </ValueText>
                    </DataItem>
                    <DataItem>
                      <ValueText>
                        <LinkModal href={`tel:${data.owner.phone}`}>
                          {data.owner.phone}
                        </LinkModal>
                      </ValueText>
                    </DataItem>

                    {data.category === 'sell' && (
                      <DataItem>
                        <ValueText>{data.price} $</ValueText>
                      </DataItem>
                    )}
                  </ValueData>
                </PetData>
              </TextContent>
            </PetInfo>
            <Comments>
              <CommentsTitle>Comments: </CommentsTitle>
              {data.comments}
            </Comments>

            <Buttons>
              <Button onClick={onRedirect} name="contacts" type="button">
                Contact
              </Button>

              <Button
                name="addToFavorite"
                type="button"
                isFavorite={isFavorite}
                onClick={() => toggleFavorite(id)}
              >
                {!isFavorite ? 'Add to' : 'Remove from'}
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

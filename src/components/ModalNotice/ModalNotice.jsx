import Container from 'components/Container';
import React from 'react';
import { useGetNoticeByIdQuery } from 'redux/api/noticesApi';
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
} from './ModalNotice.styled';
import Button from 'components/Ui-Kit/Button';

const altPosterUrl = `https://via.placeholder.com/280x288.png?text=No+photo`;

const ModalNotice = () => {
  // const {
  //    _id,
  //    avatarURL,
  //    favorite,
  //    title,
  //    category,
  //    name,
  //    birthday,
  //    breed,
  //    location,
  //    sex,
  //    owner,
  //    comments,
  //    price,
  //    own,
  //  } = notice;

  const { data } = useGetNoticeByIdQuery(_id);
  console.log(data);
  const noItem = '-------------';
  const noPrice = '0';

  const onRedirect = () => {
    window.location = `tel:+380971234567`;
  };

  return (
    <NoticeContainer>
      <PetInfo>
        <ImgWrapper>
          <PetsImg src={altPosterUrl} />
          <Category>
            <CategoryName>Sell</CategoryName>
          </Category>
        </ImgWrapper>

        <TextContent>
          <Title>Сute dog looking for a home</Title>
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
              <DataItem>
                <CategoryText>Price:</CategoryText>
              </DataItem>
            </CategoryData>
            <ValueData>
              <DataItem>
                <ValueText>Rich</ValueText>
              </DataItem>
              <DataItem>
                <ValueText>21.09.2020</ValueText>
              </DataItem>
              <DataItem>
                <ValueText>Pomeranian</ValueText>
              </DataItem>
              <DataItem>
                <ValueText>Lviv</ValueText>
              </DataItem>
              <DataItem>
                <ValueText>male</ValueText>
              </DataItem>
              <DataItem>
                <ValueText>user@mail.com</ValueText>
              </DataItem>
              <DataItem>
                <ValueText>+380971234567</ValueText>
              </DataItem>
              <DataItem>
                <ValueText>150$</ValueText>
              </DataItem>
            </ValueData>
          </PetData>
        </TextContent>
      </PetInfo>
      <Comments>
        <CommentsTitle>Comments: </CommentsTitle>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis vero
        ipsa est ipsum repudiandae assumenda aliquam atque ut quidem autem
        illum, vitae in omnis quis amet, accusamus facilis doloribus fuga.
      </Comments>

      <Buttons>
        <Button name="addToFavorite" type="button">
          Add to favorite
        </Button>

        <Button onClick={onRedirect} name="contacts" type="button">
          Contacts
        </Button>
      </Buttons>
    </NoticeContainer>
  );
};

export default ModalNotice;

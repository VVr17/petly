import React, { useState, useEffect } from 'react';
import NoticesCategoryList from 'components/NoticesCategoryList';
import Section from 'components/Section';
import TitlePage from 'components/Ui-Kit/TitlePage';
import FindPetFilter from 'components/FindPetFilter/FindPetFilter';
import SearchForm from 'components/Ui-Kit/SearchForm/SearchForm';
import { NavContainer } from './Notices.styled';
import AddPetButton from 'components/AddPetButton/AddPetButton';
import ModalComponent from 'components/Modal';
import AddNoticeFormFirst from 'components/AddNoticeForm';
import {
  useAddNoticeToFavoriteMutation,
  useDeleteNoticeMutation,
  useGetFavoritesNoticesQuery,
  useGetNoticeByIdQuery,
  useRemoveNoticeFromFavoriteMutation,
} from 'redux/api/noticesApi';

const Notices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  // function toggleModal(e) {
  //   setIsOpen(!isOpen);
  // }

  const notices = useGetFavoritesNoticesQuery();
  const [removeFavorite] = useRemoveNoticeFromFavoriteMutation();
  return (
    <Section>
      <button
        onClick={() => {
          removeFavorite('63f0c5dbc349391aaa988bbe');
        }}
      >
        Test me
      </button>
      <TitlePage name={'Find your favorite pet'} />
      <SearchForm />
      <NavContainer>
        <FindPetFilter />
        <AddPetButton handleClick={handleClick} />
      </NavContainer>
      {isOpen && (
        <ModalComponent closeModal={closeModal}>
          <AddNoticeFormFirst />
        </ModalComponent>
      )}

      <NoticesCategoryList />
    </Section>
  );
};

export default Notices;

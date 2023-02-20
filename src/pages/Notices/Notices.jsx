import React, { useState, useEffect } from 'react';
import NoticesCategoryList from 'components/NoticesCategoryList';
import Section from 'components/Section';
import TitlePage from 'components/Ui-Kit/TitlePage';
import FindPetFilter from 'components/FindPetFilter/FindPetFilter';
import SearchForm from 'components/Ui-Kit/SearchForm/SearchForm';
import { NavContainer } from './Notices.styled';
import AddPetButton from 'components/AddPetButton/AddPetButton';
import ModalComponent from 'components/Modal';
import AddNoticeFormHeader from 'components/AddNoticeForm';
import AddPetForm from 'components/AddNoticeForm/AddPetForm/index.js';

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
  return (
    <Section>
      <TitlePage name={'Find your favorite pet'} />
      <SearchForm />
      <NavContainer>
        <FindPetFilter />
        <AddPetButton handleClick={handleClick} />
      </NavContainer>
      {isOpen && (
        <ModalComponent closeModal={closeModal}>
          <AddNoticeFormHeader />
          <AddPetForm onClose={closeModal} />
        </ModalComponent>
      )}

      <NoticesCategoryList />
    </Section>
  );
};

export default Notices;

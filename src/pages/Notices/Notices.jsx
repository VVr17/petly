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
      <NoticesCategoryList />
      {isOpen && (
        <ModalComponent closeModal={closeModal}>
          <AddNoticeFormFirst />
        </ModalComponent>
      )}
    </Section>
  );
};

export default Notices;

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectStatusFilter } from 'redux/filter/filterSelectors';
import { useGetNoticeByCategoryQuery } from 'redux/api/noticesApi';
import Loader from 'components/Loader';
import NoticesCategoryList from 'components/NoticesCategoryList';
import Section from 'components/Section';
import TitlePage from 'components/Ui-Kit/TitlePage';
import FindPetFilter from 'components/FindPetFilter';
import SearchForm from 'components/Ui-Kit/SearchForm';
import { NavContainer } from './Notices.styled';
import AddPetButton from 'components/AddPetButton';
import ModalComponent from 'components/Modal';
import AddNoticeFormHeader from 'components/AddNoticeForm';


import AddPetForm from 'components/AddNoticeForm/AddPetForm';

import { AnimatePresence } from 'framer-motion';

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

  const category = useSelector(selectStatusFilter);
  const {
    data: noticesByCategory,
    error,
    isLoading,
    isFetching,
  } = useGetNoticeByCategoryQuery(category, { skip: !category });

  if (!noticesByCategory) return;
  const showNotices = noticesByCategory && !error && !isLoading;
  console.log(noticesByCategory);

  return (
    <Section>
      <TitlePage name={'Find your favorite pet'} />

      <SearchForm />

      <NavContainer>
        <FindPetFilter />
        <AddPetButton handleClick={handleClick} />
      </NavContainer>

      {isFetching && <Loader />}
      {showNotices && <NoticesCategoryList notices={noticesByCategory} />}

      <AnimatePresence>
        {isOpen && (
          <ModalComponent closeModal={closeModal} key="popUp">
            <AddNoticeFormHeader />
            <AddPetForm onClose={closeModal} />
          </ModalComponent>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Notices;

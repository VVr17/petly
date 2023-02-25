import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { selectIsAuthState } from 'redux/user/userSelectors';
import { selectStatusFilter } from 'redux/filter/filterSelectors';
import { useGetNoticeByCategoryQuery } from 'redux/api/noticesApi';
import Loader from 'components/Loader';
import NoticesCategoryList from 'components/NoticesCategoryList';
import Section from 'components/Section';
import TitlePage from 'components/Ui-Kit/TitlePage';
import FindPetFilter from 'components/FindPetFilter';
import SearchForm from 'components/Ui-Kit/SearchForm';
import { NavContainer, FormContainer } from './Notices.styled';
import AddPetButton from 'components/AddPetButton';
import ModalComponent from 'components/Modal';
import AddNoticeFormHeader from 'components/AddNoticeForm';
import NotificationAddNotice from 'components/NotificationAddNotice';
import AddPetForm from 'components/AddNoticeForm/AddPetForm';
import { AnimatePresence } from 'framer-motion';

const Notices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleNotices, setvisibleNotices] = useState([]);

  const isAuth = useSelector(selectIsAuthState);
  const handleClick = () => {
    if (isAuth) {
      setIsOpen(true);
      document.body.classList.add('modal-open');
    } else {
      toast('You have to register or login to add Pet');
    }
  };
  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove('modal-open');
  };

  const category = useSelector(selectStatusFilter);

  const {
    data: notices,
    error,
    isLoading,
    isFetching,
  } = useGetNoticeByCategoryQuery(category, { skip: !category });
  console.log(notices);

  useEffect(() => {
    if (notices) {
      setvisibleNotices(notices);
    }
  }, [notices]);

  const searchQuery = (e, value) => {
    e.preventDefault();
    const query = value.toLowerCase();

    const noticesByQuery = notices.filter(notice =>
      notice.title.toLowerCase().includes(query)
    );

    if (noticesByQuery.length === 0) {
      toast.info('Not found any ad');
    }
    setvisibleNotices(noticesByQuery);
  };

  const showNotices = visibleNotices && !error && !isFetching;

  return (
    <Section>
      <TitlePage name={'Find your favorite pet'} />

      <SearchForm handleSubmit={searchQuery} />

      <NavContainer>
        <FindPetFilter />
        <AddPetButton handleClick={handleClick} />
      </NavContainer>

      {isFetching && <Loader />}
      {showNotices && <NoticesCategoryList notices={visibleNotices} />}

      <AnimatePresence>
        {isOpen && (
          <>
            (
            {isAuth ? (
              <ModalComponent closeModal={closeModal} key="popUp">
                <FormContainer>
                  <AddNoticeFormHeader />
                  <AddPetForm onClose={closeModal} />
                </FormContainer>
              </ModalComponent>
            ) : (
              <>{toast('You have to register or login to add Pet')}</>
            )}
            )
          </>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Notices;

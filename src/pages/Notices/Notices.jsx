import React, { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { selectIsAuthState } from 'redux/user/userSelectors';
import { selectStatusFilter } from 'redux/filter/filterSelectors';
import {
  useGetFavoritesNoticesQuery,
  useGetNoticeByCategoryQuery,
  useGetUserNoticesQuery,
} from 'redux/api/noticesApi';
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
import throttle from 'lodash.throttle';
import { statusFilter } from 'redux/filter/filterConstans';

const Notices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleNotices, setvisibleNotices] = useState([]);
  const [filter, setFilter] = useState('');

  const category = useSelector(selectStatusFilter);
  const {
    data: notices,
    error: noticeError,
    isFetching: fetchingNotices,
  } = useGetNoticeByCategoryQuery(category, {
    skip:
      !category ||
      category === statusFilter.favoriteAds ||
      category === statusFilter.myAds,
  });
  const {
    data: favoriteNotices,
    error: favoriteError,
    isFetching: fetchingFavorites,
  } = useGetFavoritesNoticesQuery();
  /**
   * null, {
    skip: category !== statusFilter.favoriteAds,
  }
   */
  const {
    data: myNotices,
    error: myError,
    isFetching: fetchingMy,
  } = useGetUserNoticesQuery(null, {
    skip: category !== statusFilter.myAds,
  });

  const chooseNotices = () => {
    if (category === statusFilter.favoriteAds) {
      return favoriteNotices;
    }
    if (category === statusFilter.myAds) {
      return myNotices;
    }
    return notices;
  };

  const chosenNotices = chooseNotices();

  const filterUpdate = e => {
    const value = e.target.value;
    setFilter(value ? value.toLowerCase() : value);
  };

  const filterNotices = notices => {
    const filteredNotices = notices.filter(notice => {
      return notice.title.toLowerCase().includes(filter);
    });
    return filteredNotices;
  };

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

  // const notify = () => {
  //   toast.info('Not found any ad');
  // };

  // const throttledNotify = useCallback(throttle(notify, 3000), []);

  useEffect(() => {
    if (chosenNotices) {
      const filteredNotices = filterNotices(chosenNotices);
      setvisibleNotices(filteredNotices);
      // visibleNotices.length === 0 && throttledNotify();
    }
  }, [chosenNotices, filter]);

  const isFetching = fetchingNotices || fetchingFavorites || fetchingMy;
  const error = noticeError || favoriteError || myError;
  const showNotices = visibleNotices && !error && !isFetching;

  return (
    <Section>
      <TitlePage name={'Find your favorite pet'} />

      <SearchForm onChange={filterUpdate} />

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

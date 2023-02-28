import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import Paginate from 'components/Pagination/Pagination';
import { selectIsAuthState } from 'redux/user/userSelectors';
import Loader from 'components/Loader';
import NoticesCategoryList from 'components/Notices/NoticesCategoryList';
import Section from 'components/Section';
import TitlePage from 'components/Ui-Kit/TitlePage';
import FindPetFilter from 'components/Notices/FindPetFilter';
import SearchForm from 'components/Ui-Kit/SearchForm';
import { NavContainer, FormContainer } from './NoticesPage.styled';
import AddPetButton from 'components/Ui-Kit/AddPetButton';
import AddNoticeFormHeader from 'components/Notices/AddNoticeForm';
import AddPetForm from 'components/Notices/AddNoticeForm/AddPetForm';
import { AnimatePresence } from 'framer-motion';
import { useGetNotices } from 'hooks/useGetNotices';
import { useIntl } from 'react-intl';
import ModalComponent from 'components/Modals/Modal/Modal';

const NoticesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') ?? 1);
  const [total, setTotal] = useState(0);
  // const query = searchParams.get('search') ?? '';
  const { notices, isFetching, error, totalItems } = useGetNotices({
    filter,
    page,
  });
  const [visibleNotices, setvisibleNotices] = useState([]);
  const { formatMessage } = useIntl();

  const filterNotices = notices => {
    const filteredNotices = notices.filter(notice => {
      return notice.title.toLowerCase().includes(filter);
    });
    if (filteredNotices.length === 0) {
      toast.info(formatMessage({ id: 'toastNotFoundAd' }));
      toast.clearWaitingQueue();
    }
    return filteredNotices;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isSearch) {
      setIsSearch(false);
      setFilter('');
      setSearchParams('');
      e.currentTarget.reset();
    } else {
      setIsSearch(true);
      const searchForm = e.currentTarget.elements.search.value.toLowerCase();
      if (searchForm === '') {
        toast.error('Please, enter your request');
      }
      setSearchParams(searchForm !== '' ? { search: searchForm } : '');
      setFilter(searchForm);

      // onSubmit(e);
    }
  };

  const isAuth = useSelector(selectIsAuthState);
  const handleClick = () => {
    if (isAuth) {
      setIsOpen(true);
      document.body.classList.add('modal-open');
    } else {
      toast(formatMessage({ id: 'toastNotRegister' }));
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove('modal-open');
  };

  useEffect(() => {
    if (notices) {
      const filteredNotices = filterNotices(notices);
      if (page > 1) {
        setvisibleNotices(prevNotices => [...prevNotices, filteredNotices]);
      }
      setvisibleNotices(filteredNotices);
      setTotal(Math.round(totalItems / 12));
      setSearchParams({ page: page });
    }
  }, [notices, filter, page]);

  const handlePageClick = e => {
    setSearchParams({ page: e.selected + 1 });
  };

  const showNotices = visibleNotices && !error && !isFetching;

  return (
    <Section>
      <TitlePage name={formatMessage({ id: 'findFavoritePet' })} />
      <SearchForm isSearch={isSearch} handleSubmit={handleSubmit} />

      <NavContainer>
        <FindPetFilter />
        <AddPetButton handleClick={handleClick} />
      </NavContainer>

      {isFetching && <Loader />}
      {showNotices && <NoticesCategoryList notices={visibleNotices} />}
      {total > 1 && (
        <Paginate total={total} handlePageClock={handlePageClick} page={page} />
      )}

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
              <>{toast(formatMessage({ id: 'toastNotRegister' }))}</>
            )}
            )
          </>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default NoticesPage;

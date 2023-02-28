import React, { useState, useEffect } from 'react';
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
import {
  NavContainer,
  FormContainer,
  ImageBox,
  Title,
  Image,
} from './NoticesPage.styled';
import AddPetButton from 'components/Ui-Kit/AddPetButton';
import AddNoticeFormHeader from 'components/Notices/AddNoticeForm';
import AddPetForm from 'components/Notices/AddNoticeForm/AddPetForm';
import { AnimatePresence } from 'framer-motion';
import { useGetNotices } from 'hooks/useGetNotices';
import { FormattedMessage, useIntl } from 'react-intl';
import ModalComponent from 'components/Modals/Modal/Modal';
import Pets from 'assets/images/desktop/pet.jpg';

const NoticesPage = () => {
  const isAuth = useSelector(selectIsAuthState);
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

      {!isFetching && visibleNotices.length !== 0 && (
        <NoticesCategoryList notices={visibleNotices} />
      )}

      {!isFetching && !isLoading && notices.length !== 0 && (
        <NoticesCategoryList notices={notices} />
      )}
      {!isFetching && notices.length === 0 && (
        <ImageBox>
          <Title>
            <FormattedMessage id="notAddedFavorite" />
          </Title>
          <Image src={Pets} alt="pets"></Image>
        </ImageBox>
      )}
      {total > 1 && (
        <Paginate total={total} handlePageClick={handlePageClick} page={page} />
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

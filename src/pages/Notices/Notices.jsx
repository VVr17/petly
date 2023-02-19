import React from 'react';
import NoticesCategoryList from 'components/NoticesCategoryList';
import Section from 'components/Section';
import TitlePage from 'components/Ui-Kit/TitlePage';
import FindPetFilter from 'components/FindPetFilter/FindPetFilter';
import SearchForm from 'components/Ui-Kit/SearchForm/SearchForm';
import NoticesHeader from 'components/Notices/NoticesHeader.jsx';

const Notices = () => {
  return (
    <Section>
      <TitlePage name={'Find your favorite pet'} />
      <SearchForm />
      <FindPetFilter />
      <NoticesCategoryList />
    </Section>
  );
};

export default Notices;

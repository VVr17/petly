import NewsCard from 'components/NewsCard/NewsCard';
import Section from 'components/Section';
import SearchForm from 'components/Ui-Kit/SearchForm/SearchForm';
import React from 'react';
import { Title, WrapperTitle } from './News.styled';

const News = () => {
  return (
    <Section>
      <WrapperTitle>
        <Title>News</Title>
        <SearchForm></SearchForm>
      </WrapperTitle>

      <NewsCard />
    </Section>
  );
};

export default News;

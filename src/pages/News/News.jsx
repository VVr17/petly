import NewsCard from 'components/NewsCard/NewsCard';
import Section from 'components/Section';
import React from 'react';
import { marginBottom } from 'styled-system';
import { Title, WrapperTitle } from './News.styled';

const styles = {
  search: { backgroundColor: 'red', width: 280, height: 48 },
};

const News = () => {
  return (
    <Section>
      <WrapperTitle>
        <Title>News</Title>
        <div style={styles.search}></div>
      </WrapperTitle>

      <NewsCard />
    </Section>
  );
};

export default News;

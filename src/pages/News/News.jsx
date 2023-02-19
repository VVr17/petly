import NewsCard from 'components/NewsCard/NewsCard';
import Section from 'components/Section';
import SearchForm from 'components/Ui-Kit/SearchForm/SearchForm';
import React from 'react';
import { Title, WrapperTitle } from './News.styled';
import { useGetNewsQuery } from '../../redux/api/newsApi';

const News = () => {
  const { data, error, isLoading } = useGetNewsQuery();
  console.log(data);
  let news = data ? data.data : [];
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Section>
      <WrapperTitle>
        <Title>News</Title>
        <SearchForm></SearchForm>
      </WrapperTitle>
      <div>
        {news.map(item => (
          <NewsCard
            key={item._id}
            title={item.title}
            url={item.url}
            description={item.description}
            date={item.date}
          />
        ))}
      </div>
    </Section>
  );
};

export default News;

import NewsCard from 'components/NewsCard/NewsCard';
import Section from 'components/Section';
import SearchForm from 'components/Ui-Kit/SearchForm/SearchForm';
import React from 'react';
import { Title, WrapperTitle } from './News.styled';
import { useGetNewsQuery } from '../../redux/api/newsApi';
import TitlePage from 'components/Ui-Kit/TitlePage';

const News = () => {
  const { data, error, isLoading } = useGetNewsQuery();
  console.log(data);
  let news = data ? data.data : [];

  return (
    <Section>
      <WrapperTitle>
        <TitlePage name={'News'} />
        <SearchForm />
      </WrapperTitle>
      <div>
        {isLoading && <p>Loading...</p>}
        {error && <div>{error.message}</div>}
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

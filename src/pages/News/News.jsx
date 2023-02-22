import NewsCard from 'components/NewsCard/NewsCard';
import Section from 'components/Section';
import SearchForm from 'components/Ui-Kit/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { CardList, Title, WrapperTitle } from './News.styled';
import { useGetNewsQuery } from '../../redux/api/newsApi';
import TitlePage from 'components/Ui-Kit/TitlePage';
import Loader from 'components/Loader';

const News = () => {
  const { data, error, isLoading } = useGetNewsQuery();
  let news = data ? data : [];
  const [filteredNews, setFilteredNews] = useState([]);

  const searchQuery = (e, value) => {
    e.preventDefault();
    const newsFilter = news.filter(el =>
      el.title.concat(el.description).toLowerCase().includes(value)
    );
    setFilteredNews(newsFilter);
  };

  useEffect(() => {
    if (data) {
      setFilteredNews(data);
    }
  }, [data]);

  return (
    <Section>
      <WrapperTitle>
        <TitlePage name={'News'} />
        <SearchForm handleSubmit={searchQuery} />
      </WrapperTitle>
      <CardList>
        {isLoading && <Loader />}
        {error && <div>{error.message}</div>}
        {filteredNews &&
          filteredNews.map(item => (
            <NewsCard
              key={item._id}
              title={item.title}
              url={item.url}
              description={item.description}
              date={item.date}
            />
          ))}
      </CardList>
    </Section>
  );
};

export default News;

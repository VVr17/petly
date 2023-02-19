import NewsCard from 'components/NewsCard/NewsCard';
import Section from 'components/Section';
import SearchForm from 'components/Ui-Kit/SearchForm/SearchForm';
import React, { useEffect, useState } from 'react';
import { CardList, Title, WrapperTitle } from './News.styled';
import { useGetNewsQuery } from '../../redux/api/newsApi';
import TitlePage from 'components/Ui-Kit/TitlePage';

const News = () => {
  const { data, error, isLoading } = useGetNewsQuery();
  let news = data ? data.data : [];
  const [filteredNews, setFilteredNews] = useState([]);

  const searchQuery = e => {
    e.preventDefault();
    const newsFilter = news.filter(el =>
      el.title.concat(el.description).toLowerCase().includes(e.target[0].value)
    );
    setFilteredNews(newsFilter);
  };

  useEffect(() => {
    if (data) {
      setFilteredNews(data.data);
    }
  }, [data]);

  return (
    <Section>
      <WrapperTitle>
        <TitlePage name={'News'} />
        <SearchForm handleSubmit={searchQuery} />
      </WrapperTitle>
      <CardList>
        {isLoading && <p>Loading...</p>}
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

import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { toast } from 'react-toastify';
import NewsCard from 'components/NewsCard';
import Section from 'components/Section';
import SearchForm from 'components/Ui-Kit/SearchForm';
import { useGetNewsQuery } from 'redux/api/newsApi';
import TitlePage from 'components/Ui-Kit/TitlePage';
import Loader from 'components/Loader';
import { sortArrayByDate } from 'helpers/sortNewsByDate';
import { CardList, WrapperTitle } from './News.styled';

const NewsPage = () => {
  const { data: news, error, isLoading } = useGetNewsQuery();
  const [filter, setFilter] = useState('');
  const [filteredNews, setFilteredNews] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const { formatMessage } = useIntl();

  const searchQuery = news => {
    const newsFilter = news.filter(el =>
      el.title.concat(el.description).toLowerCase().includes(filter)
    );
    if (newsFilter.length === 0) {
      toast.info(formatMessage({ id: 'toastNotFoundNews' }));
      toast.clearWaitingQueue();
    }
    return newsFilter;
  };

  const handleChange = e => {
    const value = e.currentTarget.value;
    if (value === '') {
      setIsSearch(false);
      setFilter('');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isSearch) {
      setIsSearch(false);
      setFilter('');
      e.currentTarget.reset();
    } else {
      setIsSearch(true);
      const searchForm = e.currentTarget.elements.search.value.toLowerCase();
      if (searchForm === '') {
        toast.error(formatMessage({ id: 'toastEnterRequest' }));
        setIsSearch(false);
      }
      setFilter(searchForm);

      // onSubmit(e);
    }
  };

  useEffect(() => {
    if (news) {
      const newsSortedByDate = sortArrayByDate(news);
      const visibleNews = searchQuery(newsSortedByDate);
      setFilteredNews(visibleNews);
    }
  }, [news, filter]);

  return (
    <Section>
      <WrapperTitle>
        <TitlePage name={formatMessage({ id: 'news' })} />
        <SearchForm
          isSearch={isSearch}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </WrapperTitle>
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      <CardList>
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

export default NewsPage;

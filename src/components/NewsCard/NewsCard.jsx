import React from 'react';
import PropTypes from 'prop-types';
import {
  Date,
  LinearGradient,
  Link,
  LinkMore,
  Text,
  Title,
  WrapperCard,
  WrapperSignature,
} from './NewsCard.styled';

const NewsCard = ({ title, url, description, date }) => {
  const trimTitle = title.length > 38 ? title.slice(0, 34) + '...' : title;

  return (
    <WrapperCard>
      <LinearGradient></LinearGradient>
      <Title>{trimTitle}</Title>
      <Text>{description}</Text>
      <WrapperSignature>
        <Date>{date}</Date>
        <Link to={url} end>
          Read more
        </Link>
      </WrapperSignature>
    </WrapperCard>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string,
};

export default NewsCard;

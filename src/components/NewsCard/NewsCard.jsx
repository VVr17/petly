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
  return (
    <WrapperCard>
      <LinearGradient></LinearGradient>
      <Title>{title}</Title>
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

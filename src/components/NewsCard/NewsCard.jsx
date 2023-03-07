import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { truncateString } from 'helpers/truncateString';
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
  const trimTitle = truncateString(title);

  return (
    <WrapperCard>
      <LinearGradient></LinearGradient>
      <Title>{trimTitle}</Title>
      <Text>{description}</Text>
      <WrapperSignature>
        <Date>{date}</Date>
        <Link to={url} target="_blank" rel="noopener noreferrer">
          <FormattedMessage id="readMore" />
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

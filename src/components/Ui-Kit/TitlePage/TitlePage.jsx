import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './TitlePage.styled';

const TitlePage = ({ name }) => {
  return <Title>{name}</Title>;
};

TitlePage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TitlePage;

import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { ContainerStyled } from './Container.styled';

const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;

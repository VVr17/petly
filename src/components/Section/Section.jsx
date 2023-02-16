import React from 'react';
import Container from 'components/Container';
import PropTypes from 'prop-types';
import { SectionStyled } from './Section.styled';

const Section = ({ children }) => {
  return (
    <SectionStyled>
      <Container>{children}</Container>
    </SectionStyled>
  );
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;

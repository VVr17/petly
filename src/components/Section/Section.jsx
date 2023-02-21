import React from 'react';
import Container from 'components/Container';
import PropTypes from 'prop-types';
import { SectionStyled } from './Section.styled';
import { pageAnimation } from 'constants/animation';

const Section = ({ children }) => {
  return (
    <SectionStyled {...pageAnimation} transition={{ duration: 0.3 }}>
      <Container>{children}</Container>
    </SectionStyled>
  );
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;

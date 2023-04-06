import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/Container';
import { pageAnimation } from 'constants/animation';
import { SectionStyled } from './Section.styled';

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

import React from 'react';
import PropTypes from 'prop-types';
import { pageAnimation } from 'constants/animation';
import { Wrapper } from './AuthPageContainer.styled';

const AuthPageContainer = ({ children }) => {
  return (
    <Wrapper {...pageAnimation} transition={{ duration: 0.3 }}>
      {children}
    </Wrapper>
  );
};

AuthPageContainer.propTypes = {
  children: PropTypes.node,
};

export default AuthPageContainer;

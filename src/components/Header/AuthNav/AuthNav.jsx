import React from 'react';
import { Container, AuthLink, Link } from './AuthNav.styled';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const AuthNav = ({ closeMenu, loginIsActive, closeMenuRegister }) => {
  return (
    <Container>
      {loginIsActive ? (
        <AuthLink to="/login" onClick={closeMenu}>
          <FormattedMessage id="login" />
        </AuthLink>
      ) : (
        <Link to="/login" onClick={closeMenu}>
          <FormattedMessage id="login" />
        </Link>
      )}
      <Link to="/register" onClick={closeMenuRegister}>
        <FormattedMessage id="register" />
      </Link>
    </Container>
  );
};

export default AuthNav;

AuthNav.propTypes = {
  closeMenu: PropTypes.func,
  loginIsActive: PropTypes.bool.isRequired,
  closeMenuRegister: PropTypes.func.isRequired,
};

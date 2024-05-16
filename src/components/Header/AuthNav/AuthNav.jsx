import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useLocation } from 'react-router-dom';
import { getLoginFilled } from 'constants/loginIsFilled';
import { Container, Link } from './AuthNav.styled';

const AuthNav = ({ closeMenu }) => {
  const location = useLocation();
  const loginIsFilled = getLoginFilled(location.pathname);

  return (
    <Container>
      <Link
        to="/login"
        onClick={closeMenu}
        isactive={loginIsFilled ? 1 : 0}
        classNama="plausible-event-name=login_click"
      >
        <FormattedMessage id="login" />
      </Link>
      <Link
        to="/register"
        onClick={closeMenu}
        classNama="plausible-event-name=registration_click"
      >
        <FormattedMessage id="registration" />
      </Link>
    </Container>
  );
};

export default AuthNav;

AuthNav.propTypes = {
  closeMenu: PropTypes.func,
};

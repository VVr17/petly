import React from 'react';
import { Container, Link } from './Nav.styled';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const Nav = ({ closeMenu }) => {
  return (
    <Container>
      <Link to="/news" onClick={closeMenu}>
        <FormattedMessage id="news" />
      </Link>
      <Link to="/notices" onClick={closeMenu}>
        <FormattedMessage id="findPet" />
      </Link>
      <Link to="/friends" onClick={closeMenu}>
        <FormattedMessage id="ourFriends" />
      </Link>
    </Container>
  );
};

export default Nav;

Nav.propTypes = {
  closeMenu: PropTypes.func,
};

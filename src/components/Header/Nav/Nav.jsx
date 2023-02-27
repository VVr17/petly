import React from 'react';
import { Container, Link } from './Nav.styled';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { mainNav } from 'helpers/nav';

const Nav = ({ closeMenu }) => {
  return (
    <Container>
      {mainNav.map(({ href, labelId }) => (
        <Link key={href} to={href} onClick={closeMenu}>
          <FormattedMessage id={labelId} />
        </Link>
      ))}
    </Container>
  );
};

export default Nav;

Nav.propTypes = {
  closeMenu: PropTypes.func,
};

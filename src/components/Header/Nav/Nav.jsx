import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { mainNav } from 'constants/nav';
import { Container, Link } from './Nav.styled';

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

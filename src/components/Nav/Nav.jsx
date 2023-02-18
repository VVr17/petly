import React from 'react';
import { Container, Link } from './Nav.styled';
import PropTypes from 'prop-types';

const Nav = ({closeMenu}) => {
  return (
    <Container>
        <Link to="/news" onClick={closeMenu}>News</Link>
        <Link to="/notices" onClick={closeMenu}>Find pet</Link>
        <Link to="/friends" onClick={closeMenu}>Our friends</Link>
    </Container>
  );
};

export default Nav;

Nav.propTypes = {
    closeMenu: PropTypes.func,
};

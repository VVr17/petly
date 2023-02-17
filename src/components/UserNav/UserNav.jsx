import React from 'react';
import { Container, Link, iconStyle } from './UserNav.styled';
import { BsFillPersonFill } from 'react-icons/bs';
import PropTypes from 'prop-types';

const UserNav = ({closeMenu}) => {
  return (
    <Container>
      <Link to="/user" onClick={closeMenu}>
        <BsFillPersonFill
          style={iconStyle}
        />
        Account
      </Link>
    </Container>
  );
};

export default UserNav;

UserNav.propTypes = {
    closeMenu: PropTypes.func,
};

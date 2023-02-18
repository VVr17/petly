import React from "react";
import { Container, Link } from "./AuthNav.styled";
import PropTypes from 'prop-types';

const AuthNav = ({closeMenu}) => {
    return (
        <Container>
                <Link to="/login" onClick={closeMenu}>Login</Link>
                <Link to="/register" onClick={closeMenu}>Registration</Link>
        </Container>
    );
};

export default AuthNav;

AuthNav.propTypes = {
    closeMenu: PropTypes.func,
};

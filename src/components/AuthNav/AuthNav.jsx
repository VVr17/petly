import React from "react";
import { Container, AuthLink, Link } from "./AuthNav.styled";
import PropTypes from 'prop-types';

const AuthNav = ({closeMenu}) => {
    return (
        <Container>
                <AuthLink to="/login" onClick={closeMenu}>Login</AuthLink>
                <Link to="/register" onClick={closeMenu}>Registration</Link>
        </Container>
    );
};

export default AuthNav;

AuthNav.propTypes = {
    closeMenu: PropTypes.func,
};

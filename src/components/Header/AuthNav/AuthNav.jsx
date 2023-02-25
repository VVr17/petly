import React from "react";
import { Container, AuthLink, Link } from "./AuthNav.styled";
import PropTypes from 'prop-types';

const AuthNav = ({ closeMenu, loginIsActive, closeMenuRegister }) => {

    return (
        <Container>
            {loginIsActive?<AuthLink to="/login" onClick={closeMenu}>Login</AuthLink>:<Link to="/login" onClick={closeMenu}>Login</Link>} 
            <Link to="/register" onClick={closeMenuRegister}>Registration</Link>
        </Container>
    );
};

export default AuthNav;

AuthNav.propTypes = {
    closeMenu: PropTypes.func,
    loginIsActive: PropTypes.bool.isRequired,
    closeMenuRegister: PropTypes.func.isRequired
};

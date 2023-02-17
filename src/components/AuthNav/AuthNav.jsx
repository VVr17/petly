import React from "react";
import { Container, Link } from "./AuthNav.styled";

const AuthNav = () => {
    return (
        <Container>
                <Link to="/login">Login</Link>
                <Link to="/register">Registration</Link>
        </Container>
    );
};

export default AuthNav;

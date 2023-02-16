import React from "react";
import { Container, Link } from "./AuthNav.styled";

const AuthNav = () => {
    return (
        <Container>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/register">Registration</Link>
            </nav>
        </Container>
    );
};

export default AuthNav;

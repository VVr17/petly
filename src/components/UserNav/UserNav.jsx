import React from "react";
import { Container, Link } from "./UserNav.styled";
import { BsFillPersonFill } from "react-icons/bs";
import { theme } from '../../constants/theme';
import { borderRadius } from "styled-system";

const UserNav = () => {
    return (
        <Container>
                <Link to="/user"><BsFillPersonFill style={{
                    height: "24px",
                    width: "24px",
                    padding: "2px",
                    marginRight: "14px",
                    backgroundColor: theme.colors.lightText,
                    fill: theme.colors.accent,
                    borderRadius: "50%"}} />Account</Link>
        </Container>
    );
};

export default UserNav;
import React from 'react';
import { Container, Link } from './Nav.styled';

const Nav = () => {
  return (
    <Container>
        <Link to="/news">News</Link>
        <Link to="/notices">Find pet</Link>
        <Link to="/friends">Our friends</Link>
    </Container>
  );
};

export default Nav;
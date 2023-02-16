import React from 'react';
import { Container, Link } from './Nav.styled';

const Nav = () => {
  return (
    <Container>
      <nav>
        <Link to="/news">News</Link>
        <Link to="/notices">Find pet</Link>
        <Link to="/friends">Our friends</Link>
      </nav>
    </Container>
  );
};

export default Nav;
import React from 'react';
import { useState } from 'react';
import { Container, Navigation, Link, Span } from './Header.styled';
import Nav from 'components/Nav/Nav';
import AuthNav from 'components/AuthNav/AuthNav';
import UserNav from 'components/UserNav/UserNav';

const Header = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <header>
      <Container>
        <Navigation>
          <Link to="/" end>
            pe<Span>t</Span>ly
          </Link>
          <Nav />
          {isAuth ? <UserNav /> : <AuthNav />}
        </Navigation>
      </Container>
    </header>
  );
};

export default Header;

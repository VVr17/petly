import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useState } from 'react';
import { Container, Link, Span } from './Header.styled';
import Nav from 'components/Nav/Nav';
import AuthNav from 'components/AuthNav/AuthNav';
import UserNav from 'components/UserNav/UserNav';

const Header = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <Container>
        <Link to="/" end>
          pe<Span>t</Span>ly
        </Link>
        <Nav />
        {isAuth ? <UserNav /> : <AuthNav />}
      </Container>

      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;

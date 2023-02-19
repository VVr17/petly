import React from 'react';
import { useState } from 'react';
import {
  Navigation,
  PagesBox,
  AuthBox,
  MenuBox,
  Link,
  Span,
  MenuButton,
  iconStyle,
  HeaderStyled,
} from './Header.styled';
import { VscMenu } from 'react-icons/vsc';

import Nav from 'components/Nav/Nav';
import AuthNav from 'components/AuthNav/AuthNav';
import UserNav from 'components/UserNav/UserNav';
import { MobMenu } from 'components/MobMenu/MobMenu';
import Container from 'components/Container';

const Header = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [menuIsActive, setMenuIsActive] = useState(false);

  const openMenu = () => {
    setMenuIsActive(true);
  };

  const closeMenu = () => {
    setMenuIsActive(false);
  };

  return (
    <>
      <HeaderStyled>
        <Container>
          <Navigation>
            <Link to="/" end>
              pe<Span>t</Span>ly
            </Link>
            <PagesBox>
              <Nav />
            </PagesBox>
            <AuthBox>{isAuth ? <UserNav /> : <AuthNav />}</AuthBox>
            <MenuBox>
              <MenuButton onClick={openMenu}>
                <VscMenu style={iconStyle} />
              </MenuButton>
            </MenuBox>
          </Navigation>
        </Container>
      </HeaderStyled>
      {menuIsActive ? <MobMenu closeMenu={closeMenu} isAuth={isAuth} /> : null}
    </>
  );
};

export default Header;

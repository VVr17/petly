import React from 'react';
import { useState } from 'react';
import {
  Container,
  Navigation,
  PagesBox,
  AuthBox,
  MenuBox,
  Link,
  Span,
  MenuButton,
  iconStyle,
} from './Header.styled';
import { VscMenu } from 'react-icons/vsc';

import Nav from 'components/Nav/Nav';
import AuthNav from 'components/AuthNav/AuthNav';
import UserNav from 'components/UserNav/UserNav';
import { MobMenu } from 'components/MobMenu/MobMenu';

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
    <div>
      <header>
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
      </header>
      {menuIsActive ? <MobMenu closeMenu={closeMenu} isAuth={isAuth} /> : null}
    </div>
  );
};

export default Header;

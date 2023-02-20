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
import { useSelector } from 'react-redux';
import { selectIsAuthState } from 'redux/user/userSelectors';

import Nav from 'components/Nav/Nav';
import AuthNav from 'components/AuthNav/AuthNav';
import UserNav from 'components/UserNav/UserNav';
import { MobMenu } from 'components/MobMenu/MobMenu';

const Header = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const isAuth = useSelector(selectIsAuthState);

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

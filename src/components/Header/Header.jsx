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
import { useSelector } from 'react-redux';
import { selectIsAuthState } from 'redux/user/userSelectors';

import Nav from 'components/Nav';
import AuthNav from 'components/AuthNav';
import UserNav from 'components/UserNav';
import MobMenu from 'components/MobMenu';
import Container from 'components/Container';
import { pageAnimation } from 'constants/animation';
import { AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [loginIsActive, setLoginIsActive] = useState(true);
  const isAuth = useSelector(selectIsAuthState);

  const openMenu = () => {
    setMenuIsActive(true);
  };

  const closeMenu = () => {
    setMenuIsActive(false);
    if (!loginIsActive) {
      setLoginIsActive(true);
    }
  };

  const closeMenuRegister = () => {
    setMenuIsActive(false);
    setLoginIsActive(false);
  }

  return (
    <>
      <HeaderStyled {...pageAnimation} transition={{ duration: 0.3 }}>
        <Container>
          <Navigation>
            <Link to="/" end>
              pe<Span>t</Span>ly
            </Link>
            <PagesBox>
              <Nav closeMenu={closeMenu} />
            </PagesBox>
            <AuthBox>{isAuth ? <UserNav /> : <AuthNav closeMenu={closeMenu} loginIsActive={loginIsActive} closeMenuRegister={closeMenuRegister} />}</AuthBox>
            <MenuBox>
              <MenuButton onClick={openMenu}>
                <VscMenu style={iconStyle} />
              </MenuButton>
            </MenuBox>
          </Navigation>
        </Container>
      </HeaderStyled>

      <AnimatePresence>
        {menuIsActive ? (
          <MobMenu closeMenu={closeMenu} isAuth={isAuth} loginIsActive={loginIsActive} closeMenuRegister={closeMenuRegister} key="mobile" />
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Header;

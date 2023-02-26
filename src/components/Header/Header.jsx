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
  LogoTitle
  WrapSelector,
  Selector,
  BtnFlag,
} from './Header.styled';
import { VscMenu } from 'react-icons/vsc';
import { useSelector } from 'react-redux';
import { selectIsAuthState } from 'redux/user/userSelectors';

import Nav from 'components/Header/Nav';
import AuthNav from 'components/Header/AuthNav';
import UserNav from 'components/Header/UserNav';
import MobMenu from 'components/Header/MobMenu';
import Container from 'components/Container';
import { pageAnimation } from 'constants/animation';
import { AnimatePresence } from 'framer-motion';
import Uk from '../../assets/icons/ukraine.svg';
import En from '../../assets/icons/united.svg';

// eslint-disable-next-line react/prop-types
const Header = ({ locale, handleLocaleChange }) => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [loginIsActive, setLoginIsActive] = useState(true);
  const isAuth = useSelector(selectIsAuthState);

  const openMenu = () => {
    setMenuIsActive(true);
    document.body.classList.add('modal-open');
  };

  const closeMenu = () => {
    setMenuIsActive(false);
    if (!loginIsActive) {
      setLoginIsActive(true);
    }
    document.body.classList.remove('modal-open');
  };

  const closeMenuRegister = () => {
    setMenuIsActive(false);
    setLoginIsActive(false);
  };

  return (
    <>
      <HeaderStyled {...pageAnimation} transition={{ duration: 0.3 }}>
        <Container>
          <Navigation>
            <Link to="/" end >
              <LogoTitle>
                pe<Span>t</Span>ly
              </LogoTitle>
            </Link>

            <PagesBox>
              <Nav closeMenu={closeMenu} />
            </PagesBox>
            <WrapSelector>
              <Selector value={locale} onChange={handleLocaleChange}>
                <option value="en">En</option>
                <option value="uk">Uk</option>
              </Selector>
              <BtnFlag>
                <img src={Uk} alt="Ukraine" width="60px" height="40px" />
              </BtnFlag>
              <BtnFlag>
                <img src={En} alt="Ukraine" width="60px" height="40px" />
              </BtnFlag>
            </WrapSelector>
            <AuthBox>
              {isAuth ? (
                <UserNav />
              ) : (
                <AuthNav
                  closeMenu={closeMenu}
                  loginIsActive={loginIsActive}
                  closeMenuRegister={closeMenuRegister}
                />
              )}
            </AuthBox>
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
          <MobMenu
            closeMenu={closeMenu}
            isAuth={isAuth}
            loginIsActive={loginIsActive}
            closeMenuRegister={closeMenuRegister}
            key="mobile"
          />
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Header;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { VscMenu } from 'react-icons/vsc';
import { selectIsAuthState } from 'redux/user/userSelectors';
import Nav from 'components/Header/Nav';
import AuthNav from 'components/Header/AuthNav';
import UserNav from 'components/Header/UserNav';
import MobMenu from 'components/Header/MobMenu';
import Container from 'components/Container';
import { pageAnimation } from 'constants/animation';
import Uk from 'assets/icons/ukraine.svg';
import En from 'assets/icons/united.svg';
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
  LogoTitle,
  WrapSelector,
  BtnFlag,
} from './Header.styled';

const Header = ({ handleLocaleChange }) => {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const isAuth = useSelector(selectIsAuthState);

  const openMenu = () => {
    setMenuIsActive(true);
    document.body.classList.add('modal-open');
  };

  const closeMenu = () => {
    setMenuIsActive(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <>
      <HeaderStyled {...pageAnimation} transition={{ duration: 0.3 }}>
        <Container>
          <Navigation>
            <Link to="/" end>
              <LogoTitle>
                pe<Span>t</Span>ly
              </LogoTitle>
            </Link>

            <PagesBox>
              <Nav closeMenu={closeMenu} />
            </PagesBox>
            <WrapSelector>
              <BtnFlag onClick={() => handleLocaleChange('uk')}>
                <img src={Uk} alt="Ukraine" width="60px" height="40px" />
              </BtnFlag>
              <BtnFlag onClick={() => handleLocaleChange('en')}>
                <img src={En} alt="Ukraine" width="60px" height="40px" />
              </BtnFlag>
            </WrapSelector>
            <AuthBox>
              {isAuth ? (
                <UserNav closeMenu={closeMenu} />
              ) : (
                <AuthNav closeMenu={closeMenu} />
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
        {menuIsActive ? <MobMenu closeMenu={closeMenu} key="mobile" /> : null}
      </AnimatePresence>
    </>
  );
};

Header.propTypes = {
  handleLocaleChange: PropTypes.func.isRequired,
};

export default Header;

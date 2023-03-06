import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { VscChromeClose } from 'react-icons/vsc';
import Nav from 'components/Header/Nav';
import AuthNav from 'components/Header/AuthNav';
import UserNav from 'components/Header/UserNav';
import Overlay from 'components/Modals/Overlay';
import { mobileMenuAnimation } from 'constants/animation';
import { selectIsAuthState } from 'redux/user/userSelectors';
import {
  Modal,
  Container,
  AuthBox,
  iconStyle,
  Button,
  Link,
  Span,
} from './MobMenu.styled';

const MobMenu = ({ closeMenu }) => {
  const isAuth = useSelector(selectIsAuthState);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      closeMenu();
    }
  };

  return (
    <Overlay closeHandler={handleBackdropClick}>
      <Modal
        key="mobile"
        {...mobileMenuAnimation}
        transition={{ duration: 0.3 }}
      >
        <Container>
          <Link to="/" end onClick={closeMenu}>
            pe<Span>t</Span>ly
          </Link>
          <Button onClick={closeMenu}>
            <VscChromeClose style={iconStyle} />
          </Button>
        </Container>
        <AuthBox>
          {isAuth ? (
            <UserNav closeMenu={closeMenu} />
          ) : (
            <AuthNav closeMenu={closeMenu} />
          )}
        </AuthBox>
        <Nav closeMenu={closeMenu} />
      </Modal>
    </Overlay>
  );
};

MobMenu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default MobMenu;

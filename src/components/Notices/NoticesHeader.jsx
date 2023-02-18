import React from 'react';
import { Outlet } from 'react-router-dom';
import { Formik } from 'formik';
import { BsPlusCircleFill } from 'react-icons/bs';
// import { theme, breakpoints } from '../../constants/theme';
import SearchForm from '../Ui-Kit/SearchForm/SearchForm';
import {
  Container,
  Title,
  NavContainer,
  Navigation,
  Navlink,
  NavItem,
  NavDiv,
  Button,
  ButtonTitle,
  ReactIcon,
} from './NoticesHeader';

const NoticesHeader = () => {
  const onSubmitHandler = e => {
    e.preventDefault();
    console.log('search');
  };

  return (
    <>
      <Container>
        <Title>Find your favorite pet</Title>
        <SearchForm handleSubmit={onSubmitHandler} />
        <NavContainer>
          <NavDiv>
            <Navigation>
              <NavItem>
                <Navlink to="sell">sell</Navlink>
              </NavItem>

              <NavItem>
                <Navlink to="lost-found">lost/found</Navlink>
              </NavItem>

              <NavItem>
                <Navlink to="in-good-hands">in good hands</Navlink>
              </NavItem>
            </Navigation>
            <Navigation>
              <NavItem>
                <Navlink to="favorite-aids">favorite ads</Navlink>
              </NavItem>

              <NavItem>
                <Navlink to="my-aids">my ads</Navlink>
              </NavItem>
            </Navigation>
          </NavDiv>

          <Button>
            <ButtonTitle>Add pet</ButtonTitle>
            <ReactIcon>
              <BsPlusCircleFill size="44px" />
            </ReactIcon>
          </Button>
        </NavContainer>
      </Container>
      <Outlet />
    </>
  );
};
export default NoticesHeader;

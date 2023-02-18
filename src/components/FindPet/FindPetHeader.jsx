import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik } from 'formik';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchForm from '../Ui-Kit/SearchForm/SearchForm';
import {
  Container,
  Title,
  FormWrapper,
  FormField,
  Button,
  NavContainer,
  Navigation,
  Navlink,
} from './FindPet.styled';

const FindPetHeader = () => {
  const onSubmitHandler = e => {
    e.preventDefault();
    console.log('search');
  };

  return (
    <Container>
      <Title>Find your favorite pet</Title>
      {/* <FormWrapper onSubmit={handleSubmit}>
        <FormField name="search" type="text" placeholder="Search" />

        <Button type="submit">
          <AiOutlineSearch />
        </Button>
      </FormWrapper> */}

      <SearchForm handleSubmit={onSubmitHandler} />

      <NavContainer>
        <Navigation>
          <div>
            <Navlink>sell</Navlink>
            <Navlink>lost/found</Navlink>
            <Navlink>in good hands</Navlink>
          </div>
          <div>
            <Navlink>favorite ads</Navlink>
            <Navlink>my ads</Navlink>
          </div>
        </Navigation>
        <button>Add pet</button>
      </NavContainer>
    </Container>
  );
};
export default FindPetHeader;

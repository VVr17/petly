import Container from 'components/Container';
import React from 'react';
import { useGetNoticeByCategoryQuery } from 'redux/api/noticesApi';
import { useAddPetMutation } from 'redux/api/petsApi';
import { useGetServicesQuery } from 'redux/api/servicesApi';
import { Title, WrapContainer } from './Home.styled';

const Home = () => {
  return (
    <Container>
      <WrapContainer>
        <Title>
          Take good care of <br />
          your small pets
        </Title>
      </WrapContainer>
    </Container>
  );
};

export default Home;

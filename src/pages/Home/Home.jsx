import { ContainerStyled } from 'components/Container/Container.styled';
// import Section from 'components/Section';
import React from 'react';
// import { Link } from 'react-router-dom';
import { Title, WrapContainer } from './Home.styled';
import portrait from 'assets/images/mobile/portrait-and-favorite-pet.png';

const Home = () => {
  return (
    <WrapContainer>
      <ContainerStyled>
        <Title>Take good care of your small pets</Title>
      </ContainerStyled>
    </WrapContainer>
  );
};

export default Home;

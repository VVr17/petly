import { Box } from 'components/Box/Box';
import Container from 'components/Container';
import React from 'react';
import { Title, WrapContainer } from './Home.styled';

const Home = () => {
  return (
    <WrapContainer>
      <Title>
        Take good care of <br />
        your small pets
      </Title>
    </WrapContainer>
  );
};

export default Home;

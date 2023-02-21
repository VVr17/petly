import { Box } from 'components/Box/Box';
import Container from 'components/Container';
import { pageAnimation } from 'constants/animation';
import React from 'react';
import { Title, WrapContainer } from './Home.styled';

const Home = () => {
  return (
    <WrapContainer {...pageAnimation} transition={{ duration: 0.3 }}>
      <Title>
        Take good care of <br />
        your small pets
      </Title>
    </WrapContainer>
  );
};

export default Home;

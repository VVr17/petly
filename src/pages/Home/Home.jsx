import Container from 'components/Container';
import React from 'react';
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

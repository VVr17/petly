import { ContainerStyled } from 'components/Container/Container.styled';
import React from 'react';
import { Title, WrapContainer } from './Home.styled';

const Home = () => {
  return (
    <WrapContainer>
      <ContainerStyled>
        <Title>
          Take good care of <br />
          your small pets
        </Title>
      </ContainerStyled>
    </WrapContainer>
  );
};

export default Home;

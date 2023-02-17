import { ContainerStyled } from 'components/Container/Container.styled';
import Button from 'components/Ui-Kit/Button';
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
        <Button>button</Button>
      </ContainerStyled>
    </WrapContainer>
  );
};

export default Home;

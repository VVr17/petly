import Container from 'components/Container';
import { ContainerStyled } from 'components/Container/Container.styled';
import { SectionStyled } from 'components/Section/Section.styled';
import Button from 'components/Ui-Kit/Button';
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
        {/* <Button>button</Button> */}
      </WrapContainer>
    </Container>
  );
};

export default Home;

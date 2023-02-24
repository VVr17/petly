import React from 'react';
import UserPetsList from 'components/UserPetsList';
import { Section, ContainerStyled } from './User.styled';
import { pageAnimation } from 'constants/animation';
import { UserData } from 'components/UserData/UserData.jsx';
import Container from 'components/Container';

const User = () => {
  return (
    <Section {...pageAnimation} transition={{ duration: 0.3 }}>
      <Container>
        <ContainerStyled>
          <UserData />
          <UserPetsList />
        </ContainerStyled>
      </Container>
    </Section>
  );
};

export default User;

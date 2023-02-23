import React from 'react';
import UserPetsList from 'components/UserPetsList';
import { Section, Container } from './User.styled';
import { pageAnimation } from 'constants/animation';
import { UserData } from 'components/UserData/UserData.jsx';

const User = () => {
  return (
    <Section {...pageAnimation} transition={{ duration: 0.3 }}>
      <Container>
        <UserData></UserData>
        <UserPetsList />
      </Container>
    </Section>
  );
};

export default User;

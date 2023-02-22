import React from 'react';
import UserPetsList from 'components/UserPetsList';
import { Section, Container } from './User.styled';
import { pageAnimation } from 'constants/animation';

const User = () => {
  return (
    <Section {...pageAnimation} transition={{ duration: 0.3 }}>
      <Container>
        <UserPetsList />
      </Container>
    </Section>
  );
};

export default User;

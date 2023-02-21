import React from 'react';
import UserPetsList from 'components/UserPetsList';
import { Section, Container } from './User.styled';

const User = () => {
  return (
    <Section>
      <Container>
        <UserPetsList />
      </Container>
    </Section>
  );
};

export default User;

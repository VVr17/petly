import React from 'react';
import UserPetsList from 'components/UserPetsList';
// import { Section, UserWrapper } from './User.styled';
import { pageAnimation } from 'constants/animation';
import { UserData } from 'components/UserData/UserData.jsx';
import Container from 'components/Container';
import Section from 'components/Section';
import { UserWrapper } from './User.styled';

const User = () => {
  return (
    <Section>
      <UserWrapper>
        <UserData></UserData>
        <UserPetsList />
      </UserWrapper>
    </Section>
  );
};

export default User;

import React from 'react';
import UserPetsList from 'components/UserPetsList';
// import { Section, Container } from './User.styled';
import { pageAnimation } from 'constants/animation';
import { UserData } from 'components/UserData/UserData.jsx';
import Section from 'components/Section';
import { UserWrapper } from './User.styled';
import UserPhone from 'components/UserData/UserPhone/UserPhone';

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

import React from 'react';
import { pageAnimation } from 'constants/animation';
import Section from 'components/Section';
import { UserWrapper } from './User.styled';
import UserData from 'components/UserData/UserData';
import UserPetsList from 'components/UserPetsList';

const User = () => {
  return (
    <Section>
      <UserWrapper>
        <UserData />
        <UserPetsList />
      </UserWrapper>
    </Section>
  );
};

export default User;

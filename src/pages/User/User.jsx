import React from 'react';
import UserPetsList from 'components/UserPetsList';
// import { Section, Container } from './User.styled';
import { pageAnimation } from 'constants/animation';
import Section from 'components/Section';
import { UserWrapper } from './User.styled';

import UserPhone from 'components/UserData/UserPhone/UserPhone';
import UserBirthday from 'components/UserData/UserBirthday/UserBirthday';
import UserData from 'components/UserData/UserData';

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

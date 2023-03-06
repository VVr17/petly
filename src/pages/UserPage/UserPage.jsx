import React from 'react';
import Section from 'components/Section';
import UserData from 'components/User/UserData';
import UserPetsList from 'components/User/UserPetsList';
import { UserWrapper } from './UserPage.styled';

const UserPage = () => {
  return (
    <Section>
      <UserWrapper>
        <UserData />
        <UserPetsList />
      </UserWrapper>
    </Section>
  );
};

export default UserPage;

import React from 'react';
import Section from 'components/Section';
import { UserWrapper } from './UserPage.styled';
import UserData from 'components/User/UserData';
import UserPetsList from 'components/User/UserPetsList';

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

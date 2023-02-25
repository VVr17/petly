import React from 'react';
import { pageAnimation } from 'constants/animation';
import Section from 'components/Section';
import { UserWrapper } from './User.styled';
import UserData from 'components/UserData/UserData';
import UserPetsList from 'components/UserPetsList';
import UserUploadImg from 'components/UserUploadImg/UserUploadImg';

const User = () => {
  return (
    <Section>
      {/* <UserUploadImg></UserUploadImg> */}
      <UserWrapper>
        <UserData />
        <UserPetsList />
      </UserWrapper>
    </Section>
  );
};

export default User;

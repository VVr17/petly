import React from 'react';
import UserPetsList from 'components/UserPetsList';
// import { Section, Container } from './User.styled';
import { pageAnimation } from 'constants/animation';
import Section from 'components/Section';
import { UserWrapper } from './User.styled';

import UserPhone from 'components/UserData/UserPhone/UserPhone';
// import UserInfo from 'components/UserData/UserInfo';
import UserBirthday from 'components/UserData/UserBirthday/UserBirthday';

import UserData from 'components/UserData/UserData';

const User = () => {
  return (
    <Section>
      <UserWrapper>
        {/* <UserInfo /> */}
        {/* <UserData></UserData> */}

        {/* <UserBirthday /> */}

        <UserData />

        <UserPetsList />
      </UserWrapper>
    </Section>
  );
};

export default User;

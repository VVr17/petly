import React from 'react';
import Container from 'components/Container';
import Section from 'components/Section';
import FriendsList from 'components/Friends/FriendsList/FriendsList';
import { PageTitle } from './Friends.styled';
import TitlePage from 'components/Ui-Kit/TitlePage';

const FriendsPage = () => {
  return (
    <Section>
      <Container>
        <TitlePage name={'Our friends'} />
        <FriendsList />
      </Container>
    </Section>
  );
};

export default FriendsPage;

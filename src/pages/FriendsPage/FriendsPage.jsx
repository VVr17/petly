import React from 'react';
import Container from 'components/Container';
import Section from 'components/Section';
import FriendsList from 'components/Friends/FriendsList/FriendsList';
import { PageTitle } from './Friends.styled';

const FriendsPage = () => {
  return (
    <Section>
      <Container>
        <PageTitle>Our friends</PageTitle>
        <FriendsList />
      </Container>
    </Section>
  );
};

export default FriendsPage;

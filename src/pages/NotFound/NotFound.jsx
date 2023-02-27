import AuthPageContainer from 'components/Auth/AuthPageContainer';
import Section from 'components/Section';
import React from 'react';
import { Number, Text } from './NotFound.styled';

const NotFound = () => {
  return (
    <AuthPageContainer>
      <Section>
        <Number>404</Number>
        <Text>Oops, this page couldn’t be found</Text>
      </Section>
    </AuthPageContainer>
  );
};

export default NotFound;

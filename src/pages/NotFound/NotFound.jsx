import React from 'react';
import { FormattedMessage } from 'react-intl';
import AuthPageContainer from 'components/Auth/AuthPageContainer';
import Section from 'components/Section';
import { Number, Text } from './NotFound.styled';

const NotFound = () => {
  return (
    <AuthPageContainer>
      <Section>
        <Number>404</Number>
        <Text>
          <FormattedMessage id="errorNotFoundPage" />
        </Text>
      </Section>
    </AuthPageContainer>
  );
};

export default NotFound;

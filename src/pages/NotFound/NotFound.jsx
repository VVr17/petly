import AuthPageContainer from 'components/Auth/AuthPageContainer';
import Section from 'components/Section';
import React from 'react';
import { Number, Text } from './NotFound.styled';
import { FormattedMessage } from 'react-intl';

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

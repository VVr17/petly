import React from 'react';
import { FormattedMessage } from 'react-intl';
import AuthPageContainer from 'components/Auth/AuthPageContainer';
import Section from 'components/Section';
import { Number, Text } from './NotFound.styled';
import { Background, WrapContainer } from 'pages/Home/Home.styled';
import { Box } from 'components/Box/Box';

const NotFound = () => {
  return (
    <Background>
      <WrapContainer>
        <Box py="32px">
          <Number>404</Number>
          <Text>
            <FormattedMessage id="errorNotFoundPage" />
          </Text>
        </Box>
      </WrapContainer>
    </Background>
  );
};

export default NotFound;

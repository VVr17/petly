import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Background, WrapContainer } from 'pages/Home/Home.styled';
import { Number, Text, TextWrapper } from './NotFound.styled';

const NotFound = () => {
  return (
    <Background>
      <WrapContainer>
        <TextWrapper>
          <Number>404</Number>
          <Text>
            <FormattedMessage id="errorNotFoundPage" />
          </Text>
        </TextWrapper>
      </WrapContainer>
    </Background>
  );
};

export default NotFound;

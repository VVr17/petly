import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import Button from 'components/Ui-Kit/Button';
import { Background, WrapContainer } from 'pages/Home/Home.styled';
import { Text, TextWrapper } from 'pages/NotFound/NotFound.styled';

const EmailVerified = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <WrapContainer>
        <TextWrapper>
          <Box display="flex" flexDirection="column" gridGap="16px" mb="32px">
            <Text>
              <FormattedMessage id="emailVerifiedWelcome" />
            </Text>
            <Text>
              <FormattedMessage id="emailVerifiedText1" />
            </Text>
            <Text>
              <FormattedMessage id="emailVerifiedText2" />
            </Text>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              name="filled"
              onClick={() => {
                navigate('/login');
              }}
            >
              <FormattedMessage id="emailVerifiedLoginButton" />
            </Button>
          </Box>
        </TextWrapper>
      </WrapContainer>
    </Background>
  );
};

export default EmailVerified;

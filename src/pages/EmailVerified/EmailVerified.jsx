import AuthPageContainer from 'components/Auth/AuthPageContainer';
import { Box } from 'components/Box/Box';
import Section from 'components/Section';
import Button from 'components/Ui-Kit/Button';
import { Text } from 'pages/NotFound/NotFound.styled';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';

const EmailVerified = () => {
  const navigate = useNavigate();

  return (
    <AuthPageContainer>
      <Section>
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
      </Section>
    </AuthPageContainer>
  );
};

export default EmailVerified;

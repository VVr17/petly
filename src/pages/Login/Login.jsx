import React from 'react';
import AuthPageContainer from 'components/Auth/AuthPageContainer';
import LoginForm from 'components/Auth/LoginForm';
import Section from 'components/Section';

const Login = () => {
  return (
    <AuthPageContainer>
      <Section>
        <LoginForm />
      </Section>
    </AuthPageContainer>
  );
};

export default Login;

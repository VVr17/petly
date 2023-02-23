import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import AuthPageContainer from 'components/AuthPageContainer';
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

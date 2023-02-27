import React from 'react';
import RegistrationForm from 'components/Auth/RegisterForm/RegisterForm';
import AuthPageContainer from 'components/Auth/AuthPageContainer';
import Section from 'components/Section';

const Register = () => {
  return (
    <AuthPageContainer>
      <Section>
        <RegistrationForm />
      </Section>
    </AuthPageContainer>
  );
};

export default Register;

import React from 'react';
import RegistrationForm from 'components/RegisterForm/RegisterForm';
import AuthPageContainer from 'components/AuthPageContainer';
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

import React from 'react';
import RegistrationForm from 'components/RegisterForm/RegisterForm';
import Section from 'components/Section';
import { Wrapper } from './Register.styled';

const Register = () => {
  return (
    <Wrapper>
      <Section>
         <RegistrationForm />
      </Section>
    </Wrapper>
  );
};

export default Register;

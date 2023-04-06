import React from 'react';
import AuthPageContainer from 'components/Auth/AuthPageContainer';
import ForgotPasswordForm from 'components/Auth/ForgotPasswordForm';
import Section from 'components/Section';

const ForgotPassword = () => {
  return (
    <AuthPageContainer>
      <Section>
        <ForgotPasswordForm />
      </Section>
    </AuthPageContainer>
  );
};

export default ForgotPassword;

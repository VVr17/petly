import React from 'react';
import AuthPageContainer from 'components/Auth/AuthPageContainer';
import NewPasswordForm from 'components/Auth/NewPasswordForm';
import Section from 'components/Section';

const NewPassword = () => {
  return (
    <AuthPageContainer>
      <Section>
        <NewPasswordForm />
      </Section>
    </AuthPageContainer>
  );
};

export default NewPassword;

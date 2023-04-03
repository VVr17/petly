import React from 'react';
import AuthPageContainer from 'components/Auth/AuthPageContainer';
import Section from 'components/Section';
import NewPasswordForm from 'components/Auth/NewPasswordForm';

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

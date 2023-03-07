import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import InputField from 'components/Ui-Kit/Input';
import { PasswordToggle } from './RegStepOne.styled';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';

const RegStepOne = () => {
  // Define state variable for password visibility
  const [showPassword, setShowPassword] = useState(false);
  const { formatMessage } = useIntl();

  // Function to toggle password visibility
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Determine password input type based on password visibility
  const passwordInputType = showPassword ? 'text' : 'password';

  return (
    <>
      <InputField
        name="email"
        type="email"
        placeholder="Email"
        autocomplete="email"
      />

      <InputField
        name="password"
        type={passwordInputType}
        placeholder={formatMessage({ id: 'password' })}
        autocomplete="new-password"
      >
        <PasswordToggle type="button" onClick={toggleShowPassword}>
          {showPassword ? <RxEyeOpen /> : <RxEyeClosed />}
        </PasswordToggle>
      </InputField>

      <InputField
        name="confirmPassword"
        type={passwordInputType}
        placeholder={formatMessage({ id: 'confirmPas' })}
        autocomplete="new-password"
      />
    </>
  );
};

export default RegStepOne;

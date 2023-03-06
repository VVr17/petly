import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import InputField from 'components/Ui-Kit/Input';
import { PasswordToggle } from 'components/Auth/RegisterForm/RegStepOne.styled';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';

const LoginInputs = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const { formatMessage } = useIntl();

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
        autocomplete="current-password"
      >
        <PasswordToggle type="button" onClick={toggleShowPassword}>
          {showPassword ? <RxEyeOpen /> : <RxEyeClosed />}
        </PasswordToggle>
      </InputField>
    </>
  );
};

export default LoginInputs;

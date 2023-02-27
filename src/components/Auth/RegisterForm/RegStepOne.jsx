import React, { useState } from 'react';
import InputField from 'components/Ui-Kit/Input';
import { PasswordToggle, PasswordWrapper } from './RegStepOne.styled';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';
import { useIntl } from 'react-intl';

const RegStepOne = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { formatMessage } = useIntl();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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

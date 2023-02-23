import React, { useState } from 'react';
import InputField from 'components/Ui-Kit/Input';
import {
  PasswordToggle,
  PasswordWrapper,
} from 'components/RegisterForm/RegStepOne.styled';
import { RxEyeOpen, RxEyeClosed } from 'react-icons/rx';

const LoginInputs = () => {
  const [showPassword, setShowPassword] = useState(false);
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
      <PasswordWrapper>
        <InputField
          name="password"
          type={passwordInputType}
          placeholder="Password"
          autocomplete="current-password"
        />
        <PasswordToggle type="button" onClick={toggleShowPassword}>
          {showPassword ? <RxEyeOpen /> : <RxEyeClosed />}
        </PasswordToggle>
      </PasswordWrapper>
    </>
  );
};

export default LoginInputs;

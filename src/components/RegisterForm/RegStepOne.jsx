import React, { useState } from 'react';
import InputField from 'components/Ui-Kit/Input';
import { PasswordToggle, PasswordWrapper } from './RegStepOne.styled';
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";

const RegStepOne = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const passwordInputType = showPassword ? 'text' : 'password';

  return (
    <div>
      <InputField name="email" type="email" placeholder="Email" autocomplete="email"/>
      <PasswordWrapper>
        <InputField
          name="password"
          type={passwordInputType}
          placeholder="Password"
          autocomplete="new-password"
        />
        <PasswordToggle type="button" onClick={toggleShowPassword}>
        {showPassword ? <RxEyeOpen /> : <RxEyeClosed />}
      </PasswordToggle>
      </PasswordWrapper>
      <InputField
        name="confirmPassword"
        type={passwordInputType}
        placeholder="Confirm Password"
        autocomplete="new-password"
      />
    </div>
  );
};

export default RegStepOne;
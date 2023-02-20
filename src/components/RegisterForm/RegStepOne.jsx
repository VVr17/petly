import React from 'react';
import InputField from 'components/Ui-Kit/Input';

const RegStepOne = () => {
  return (
    <div>
      <InputField name="email" type="email" placeholder="Email" />
              <InputField
                name="password"
                type="password"
                placeholder="Password"
                autocomplete="new-password"
              />
              <InputField
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                autocomplete="new-password"
              />
    </div>
  );
};

export default RegStepOne;
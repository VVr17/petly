import React from 'react';
import InputField from 'components/Ui-Kit/Input';

const RegStepTwo = () => {
  return (
    <>
      <InputField name="name" type="name" placeholder="Name" />
      <InputField name="city" type="city" placeholder="City, Region" />
      <InputField name="phone" type="phone" placeholder="Phone +380123456789" />
    </>
  );
};

export default RegStepTwo;

import React, { useState } from 'react';
import InputField from 'components/Ui-Kit/Input';

const LocationField = () => {
  return (
    <InputField
      name="location"
      type="text"
      placeholder="Type location"
      label="Location"
      span="*"
    />
  );
};
export default LocationField;

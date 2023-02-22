import React from 'react';
import InputField from 'components/Ui-Kit/Input';

const PriceField = () => {
  return (
    <InputField
      name="price"
      type="text"
      placeholder="Type price"
      label="Price"
      span="*"
    />
  );
};
export default PriceField;

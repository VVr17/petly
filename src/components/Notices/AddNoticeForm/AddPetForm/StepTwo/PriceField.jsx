import React from 'react';
import InputField from 'components/Ui-Kit/Input';
import PropTypes from 'prop-types';

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
// PriceField.propTypes = {
//   handleBlur: PropTypes.func,
// };

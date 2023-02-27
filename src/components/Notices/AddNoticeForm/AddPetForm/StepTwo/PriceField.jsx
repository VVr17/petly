import React from 'react';
import InputField from 'components/Ui-Kit/Input';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

const PriceField = ({ handleBlur }) => {
  const { formatMessage } = useIntl();

  return (
    <InputField
      name="price"
      type="text"
      placeholder={formatMessage({ id: 'typePrice' })}
      label={formatMessage({ id: 'price' })}
      span="*"
      onBlur={handleBlur}
    />
  );
};
export default PriceField;
PriceField.propTypes = {
  handleBlur: PropTypes.func,
};

import React from 'react';
import { useIntl } from 'react-intl';
import InputField from 'components/Ui-Kit/Input';

const PriceField = () => {
  const { formatMessage } = useIntl();

  return (
    <InputField
      name="price"
      type="text"
      placeholder={formatMessage({ id: 'typePrice' })}
      label={formatMessage({ id: 'price' })}
      span="*"
    />
  );
};
export default PriceField;

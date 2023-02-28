import React from 'react';
import InputField from 'components/Ui-Kit/Input';
import { useIntl } from 'react-intl';

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

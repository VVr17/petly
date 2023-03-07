import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { useIntl } from 'react-intl';
import { useField } from 'formik';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerInput } from '../AddPetForm.styled';

const MyDatePicker = ({ name }) => {
  const [field, meta, helpers] = useField(name);
  const { formatMessage } = useIntl();

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <DatePicker
      {...field}
      selected={value}
      onChange={date => setValue(date)}
      placeholderText={formatMessage({ id: 'selectDate' })}
      dateFormat="dd.MM.yyyy"
      maxDate={new Date()}
      customInput={<DatePickerInput />}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
  );
};

MyDatePicker.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
export default MyDatePicker;

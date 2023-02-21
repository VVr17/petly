import React from 'react';
import { Formik, Form, useField } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';

const MyDatePicker = ({ name }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <DatePicker
      {...field}
      selected={value}
      onChange={date => setValue(date)}
      placeholderText="Select the date"
      dateFormat="dd.MM.yyyy"
      maxDate={new Date()}
    />
  );
};

MyDatePicker.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
export default MyDatePicker;

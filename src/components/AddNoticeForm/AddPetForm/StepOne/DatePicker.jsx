import React from 'react';
import { Formik, Form, useField } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import InputField from 'components/Ui-Kit/Input';
import PropTypes from 'prop-types';
import { DatePickerInput } from '../AddPetForm.styled';

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
      // format="dd.MM.yyyy"
      maxDate={new Date()}
      customInput={<DatePickerInput />}
    />
  );
};

MyDatePicker.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
export default MyDatePicker;

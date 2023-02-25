import { Form, Formik, Field, useField } from 'formik';
import React, { useState, useRef, forwardRef } from 'react';
import {
  useUpdateUserMutation,
  useGetCurrentUserQuery,
} from 'redux/api/userApi';
import DatePicker from 'react-datepicker';
import {
  Title,
  Label,
  ErrorStyle,
  Input,
  Pencil,
  Check,
  MyDatePickerNew,
  FormStyled,
} from './UserBirthday.styled';
import PropTypes from 'prop-types';

import UserUpdateButton from 'components/Ui-Kit/UserupdateButton/UserUpdateButton';

const MyDatePicker = ({
  name = '',
  isDisabled,
  placeholder,
  val,
  handleChange,
}) => {
  const [field, meta, helpers] = useField(name);
  // const { value } = meta;

  const { setValue } = helpers;
  return (
    <MyDatePickerNew
      {...field}
      selected={val}
      disabled={isDisabled}
      placeholderText={placeholder}
      onChange={date => {
        setValue(date);
        handleChange(date);
      }}
      dateFormat="dd.MM.yyyy"
      maxDate={new Date()}
      // customInput={<Input />}
    />
  );
};

const UserBirthday = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { data } = useGetCurrentUserQuery();
  // console.log('data', data);
  // const dataBirthday = data.birthday;
  // console.log('data.birthday', dataBirthday);
  const parsedDate = convertStringToDate(data?.birthday || '00.00.0000');
  // console.log('parsedDate', parsedDate);

  const [updateUser, { isLoading }] = useUpdateUserMutation();

  // function to to fool day and month (01, 02...)
  function getFullMonth(date) {
    return date < 10 ? '0' + date : date;
  }

  // convert string to date
  function convertStringToDate(data) {
    const [day, month, year] = data?.split('.');
    const dateObject = new Date(year, month - 1, day);
    return dateObject;
  }
  const handleClick = (values, actions) => {
    if (isDisabled) {
      setIsDisabled(false);
      return;
    }
    setIsDisabled(true);
  };

  const initialValues = { birthday: data?.birthday || '' };

  const handleSubmit = values => {
    if (!isDisabled) {
      return;
    }
    // Date converting to string
    const dateMDY = `${getFullMonth(values.birthday.getDate())}.${getFullMonth(
      values.birthday.getMonth() + 1
    )}.${values.birthday.getFullYear()}`;
    console.log('dateMDY', dateMDY);
    console.log('values', values);

    // create formData
    const data = new FormData();
    data.append('birthday', dateMDY);
    updateUser(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={ }
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, setFieldValue, setValue }) => (
        <FormStyled>
          <Label>
            <Title>Birthday</Title>

            <MyDatePicker
              isDisabled={isDisabled}
              placeholder={data?.birthday || ''}
              val={parsedDate}
              name="birthday"
              handleChange={date => {
                setFieldValue('birthday', date);
              }}
            />

            <ErrorStyle name="birthday" component="div" />
          </Label>
          <UserUpdateButton
            type="submit"
            isdisabled={isDisabled}
            onClick={handleClick}
          />
        </FormStyled>
      )}
    </Formik>
  );
};

MyDatePicker.propTypes = {
  name: PropTypes.string,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
  val: PropTypes.any,
  handleChange: PropTypes.func,
};

export default UserBirthday;

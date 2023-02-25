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
import { useSelector } from 'react-redux';
import { selectUserState } from 'redux/user/userSelectors';

const MyDatePicker = ({
  name = '',
  isDisabled,
  placeholder,
  val,
  handleChange,
}) => {
  const [field] = useField(name);
  const [startDate, setStartDate] = useState(val);

  return (
    <MyDatePickerNew
      {...field}
      selected={startDate}
      disabled={isDisabled}
      // placeholderText={placeholder}
      onChange={date => {
        handleChange(date);
        setStartDate(date);
      }}
      dateFormat="dd.MM.yyyy"
      maxDate={new Date()}
    />
  );
};

const UserBirthday = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const user = useSelector(selectUserState);

  const parsedDate = convertStringToDate(user.birthday || '00.00.0000');

  const initialValues = { birthday: user.birthday || '' };

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
      {({ isSubmitting, values, setFieldValue }) => (
        <FormStyled>
          <Label>
            <Title>Birthday</Title>

            <MyDatePicker
              isDisabled={isDisabled}
              // placeholder={user?.birthday || ''}
              // placeholder={user.birthday || ''}
              val={parsedDate}
              name="birthday"
              handleChange={date => {
                setFieldValue('birthday', date);
                console.log('handleChange', values);
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

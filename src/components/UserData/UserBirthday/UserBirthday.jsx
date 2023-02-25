import { Formik, useField } from 'formik';
import React, { useState } from 'react';
import { useUpdateUserMutation } from 'redux/api/userApi';

import {
  Title,
  Label,
  ErrorStyle,
  MyDatePickerNew,
  FormStyled,
} from './UserBirthday.styled';
import PropTypes from 'prop-types';
import UserUpdateButton from 'components/Ui-Kit/UserupdateButton/UserUpdateButton';
import { useSelector } from 'react-redux';
import { selectUserState } from 'redux/user/userSelectors';
import { validationSchema } from './validation';
import { convertStringToDate, convertDateToString } from 'helpers/date';
import Loader from 'components/Loader';

const MyDatePicker = ({ name = '', isDisabled, val, handleChange }) => {
  const [field] = useField(name);
  const [startDate, setStartDate] = useState(val);

  return (
    <MyDatePickerNew
      {...field}
      selected={startDate}
      disabled={isDisabled}
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

  const handleClick = () => {
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
    if (values.birthday === user.birthday) {
      return;
    }

    const dateMDY = convertDateToString(values.birthday);

    // create formData
    const data = new FormData();
    data.append('birthday', dateMDY);
    updateUser(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <FormStyled>
          <Label>
            <Title>Birthday</Title>

            <MyDatePicker
              isDisabled={isDisabled}
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
          {isLoading && <Loader />}
        </FormStyled>
      )}
    </Formik>
  );
};

MyDatePicker.propTypes = {
  name: PropTypes.string,
  isDisabled: PropTypes.bool,
  val: PropTypes.any,
  handleChange: PropTypes.func,
};

export default UserBirthday;

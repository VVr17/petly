import React, { useState } from 'react';
import { Formik, Form, useField } from 'formik';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import { useUpdateUserMutation } from 'redux/api/userApi';
import { Title } from 'components/Ui-Kit/UserInput/UserInput.styled';
import { validationSchema } from './validation';
import { convertStringToDate, convertDateToString } from 'helpers/date';
import UserUpdateButton from 'components/Ui-Kit/UserupdateButton';
import Loader from 'components/Loader';
import { selectUserState } from 'redux/user/userSelectors';
import {
  FieldWrapper,
  MyDatePickerNew,
  Label,
  ErrorStyle,
} from '../UserDataItem.styled';

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
      placeholderText="00.00.0000"
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
    />
  );
};

const UserBirthday = ({ isUpdating, setIsUpdating }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const user = useSelector(selectUserState);
  const { formatMessage } = useIntl();

  const val = () => {
    let date;
    if (user.birthday === null) {
      date = null;
    } else {
      date = convertStringToDate(user.birthday);
    }
    return date;
  };

  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const initialValues = { birthday: user?.birthday || '00.00.0000' };

  const handleClick = () => {
    if (isDisabled) {
      setIsDisabled(false);
      setIsUpdating(true);
      return;
    }
    setIsDisabled(true);
    setIsUpdating(false);
  };

  const handleSubmit = async values => {
    if (!isDisabled) {
      return;
    }
    if (values.birthday === user.birthday) {
      return;
    }
    // console.log(values);
    let dateMDY;
    if (values.birthday === null) {
      dateMDY = '00.00.0000';
    } else {
      dateMDY = convertDateToString(values.birthday);
    }

    // create formData
    const data = new FormData();
    data.append('birthday', dateMDY);
    const { data: response } = await updateUser(data);
    if (response.code === 200)
      toast.info(formatMessage({ id: 'toastBirthUpdated' }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form>
          <FieldWrapper>
            <Label>
              <Title>{formatMessage({ id: 'birthday' })}</Title>

              <MyDatePicker
                isDisabled={isDisabled}
                val={val}
                name="birthday"
                handleChange={date => {
                  setFieldValue('birthday', date);
                }}
              />

              <ErrorStyle name="birthday" component="div" />
            </Label>
            <UserUpdateButton
              type="submit"
              disabled={isUpdating && isDisabled}
              isInputDisabled={isDisabled}
              onClick={() => handleClick(values)}
            />
            {isLoading && <Loader />}
          </FieldWrapper>
        </Form>
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

UserBirthday.propTypes = {
  isUpdating: PropTypes.bool,
  setIsUpdating: PropTypes.func,
};

export default UserBirthday;

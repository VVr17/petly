import { Form, Formik, Field, useField } from 'formik';
import React, { useState, useRef, forwardRef } from 'react';
import { useUpdateUserMutation } from 'redux/api/userApi';
import DatePicker from 'react-datepicker';
// import UserInput from 'components/Ui-Kit/UserInput';

const UserBirthday = () => {
  const inputRef = useRef(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [updateUser] = useUpdateUserMutation();

  // function to to fool day and month (01, 02...)
  function getFullMonth(date) {
    return date < 10 ? '0' + date : date;
  }

  const handleSubmit = values => {
    // Date converting to string
    // const dateMDY = `${getFullMonth(values.birthday.getDate())}.${getFullMonth(
    //   values.birthday.getMonth() + 1
    // )}.${values.birthday.getFullYear()}`;
    // console.log(dateMDY);
    console.log(values);
    // updateUser(values);
    setIsDisabled(true);
  };
  const initialValues = {
    birthday: '',
  };

  // const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
  //     <button className="example-custom-input" onClick={onClick} ref={ref}></button>

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={ }
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form>
          <label>
            Birthday
            <DatePicker
              disabled={isDisabled}
              selected={values.birthday}
              name="birthday"
              dateFormat="dd.MM.yyyy"
              maxDate={new Date()}
              onChange={date => setFieldValue('birthday', date)}
              // customInput={<Field />}
              // customInput={<CustomInput inputRef={inputRef} />}
            />
          </label>
          {isDisabled ? (
            <button
              type="button"
              onClick={() => {
                // console.log(isDisabled);
                setIsDisabled(false);
              }}
            >
              Pencil
            </button>
          ) : (
            <button
              type="submit"
              onClick={handleSubmit}
              // disabled={isSubmitting}
            >
              Check
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default UserBirthday;

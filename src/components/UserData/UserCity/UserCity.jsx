import UserInput from 'components/Ui-Kit/UserInput';
import UserUpdateButton from 'components/Ui-Kit/UserupdateButton/UserUpdateButton';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import {
  useGetCurrentUserQuery,
  useUpdateUserMutation,
} from 'redux/api/userApi';
import { FieldWrapper, FormStyled } from '../UserField.styled';

const UserCity = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { data } = useGetCurrentUserQuery();
  console.log('data', data?.phone);
  const [updateUser] = useUpdateUserMutation();

  const handleClick = event => {
    //handlesubmit

    if (isDisabled) {
      console.log('disable false');
      setIsDisabled(false);
      return;
    }
    console.log('submit, disabled true');
    // updateUser(value);
    handleSubmit();
    setIsDisabled(true);
  };
  const initialValues = '';

  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={ }
      onSubmit={handleSubmit}
      // encType="multipart/form-data"
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form>
          <FieldWrapper>
            <UserInput
              label="City"
              name="city"
              type="city"
              disabled={isDisabled}
              placeholder={data?.city || ''}
            />
            <UserUpdateButton
              type="submit"
              isdisabled={isDisabled}
              onClick={handleClick}
            />
          </FieldWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default UserCity;

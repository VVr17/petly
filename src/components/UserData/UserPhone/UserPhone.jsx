import UserInput from 'components/Ui-Kit/UserInput';
import UserUpdateButton from 'components/Ui-Kit/UserupdateButton/UserUpdateButton';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import {
  useGetCurrentUserQuery,
  useUpdateUserMutation,
} from 'redux/api/userApi';
import { FieldWrapper, FormStyled } from '../UserField.styled';
import { validationSchema } from './validation';

const UserPhone = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { data } = useGetCurrentUserQuery();
  console.log('data', data);
  const initialValues = { phone: data?.phone || '' };
  console.log('initialValues', initialValues);
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const handleClick = (values, actions) => {
    if (isDisabled) {
      setIsDisabled(false);
      return;
    }

    setIsDisabled(true);
  };

  const handleSubmit = (values, actions) => {
    if (!isDisabled) {
      return;
    }

    // create formData
    const data = new FormData();
    data.append('phone', values.phone);
    updateUser(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      {({ isSubmitting, values, setFieldValue }) => (
        <Form>
          <FieldWrapper>
            <UserInput
              label="Phone"
              name="phone"
              type="phone"
              disabled={isDisabled}
              placeholder={initialValues.phone}
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

export default UserPhone;

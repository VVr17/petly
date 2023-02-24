import UserInput from 'components/Ui-Kit/UserInput';
import UserUpdateButton from 'components/Ui-Kit/UserupdateButton/UserUpdateButton';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useGetCurrentUserQuery, useUpdateUserMutation } from 'redux/api/userApi';
import { FieldWrapper, FormStyled } from '../UserField.styled';
import { validationSchema } from './validation.js';

const UserName = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const { data } = useGetCurrentUserQuery();
  const initialValues = { name: data?.name || '' };
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
    data.append('name', values.name);
    updateUser(data);
  };

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
    // encType="multipart/form-data"
  >
    {({ isSubmitting, values, setFieldValue }) => (
      <Form>
        <FieldWrapper>
          <UserInput
            label="Name"
            name="name"
            type="name"
            disabled={isDisabled}
            placeholder={data?.name || ''}
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

export default UserName;

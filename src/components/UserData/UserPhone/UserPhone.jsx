import Loader from 'components/Loader';
import UserInput from 'components/Ui-Kit/UserInput';
import UserUpdateButton from 'components/Ui-Kit/UserupdateButton/UserUpdateButton';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  useGetCurrentUserQuery,
  useUpdateUserMutation,
} from 'redux/api/userApi';
import { selectUserState } from 'redux/user/userSelectors';
import { FieldWrapper, FormStyled } from '../UserField.styled';
import { validationSchema } from './validation';

const UserPhone = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const user = useSelector(selectUserState);
  const initialValues = { phone: user.phone || '' };
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const handleClick = values => {
    if (isDisabled) {
      setIsDisabled(false);
      return;
    }

    if (!values.phone) return;
    setIsDisabled(true);
  };

  const handleSubmit = (values, actions) => {
    if (!isDisabled) {
      return;
    }

    if (values.phone === user.phone) return;

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
      {({ isSubmitting, values, setFieldValue, errors }) => (
        <Form>
          <FieldWrapper>
            <UserInput
              label="Phone"
              name="phone"
              type="phone"
              disabled={isDisabled}
              placeholder={user.phone || ''}
            />
            <UserUpdateButton
              type="submit"
              isdisabled={isDisabled}
              onClick={() =>{ 
                if (errors.phone) return;
                handleClick(values)
              }}
            />
            {isLoading && <Loader />}
          </FieldWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default UserPhone;

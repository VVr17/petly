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

const UserCity = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const user = useSelector(selectUserState);
  const initialValues = { city: user.city || '' };
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const handleClick = (values, actions) => {
    if (isDisabled) {
      setIsDisabled(false);
      return;
    }

    if (!values.city) return;
    setIsDisabled(true);
  };

  const handleSubmit = (values, actions) => {
    if (!isDisabled) {
      return;
    }

    if (values.city === user.city) return;

    // create formData
    const data = new FormData();
    data.append('city', values.city);
    updateUser(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      // encType="multipart/form-data"
    >
      {({ isSubmitting, values, setFieldValue, errors }) => (
        <Form>
          <FieldWrapper>
            <UserInput
              label="City"
              name="city"
              type="city"
              disabled={isDisabled}
              placeholder={user.city || ''}
            />
            <UserUpdateButton
              type="submit"
              isdisabled={isDisabled}
              onClick={() =>{ 
                if (errors.city) return;
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

export default UserCity;

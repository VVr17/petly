import UserInput from 'components/Ui-Kit/UserInput';
import UserUpdateButton from 'components/Ui-Kit/UserupdateButton/UserUpdateButton';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useUpdateUserMutation } from 'redux/api/userApi';
import { FieldWrapper } from '../UserField.styled';

const UserPhone = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [updateUser] = useUpdateUserMutation();

  const handleSubmit = value => {
    //handlesubmit
    updateUser(value);
    setIsDisabled(true);
  };
  const initialValues = '';

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
              label="Phone"
              name="phone"
              type="phone"
              isDisabled={isDisabled}
            />
            {isDisabled ? (
              <UserUpdateButton
                type="button"
                isDisabled={isDisabled}
                onClick={() => {
                  setIsDisabled(false);
                }}
              />
            ) : (
              <UserUpdateButton
                type="submit"
                isDisabled={isDisabled}
                onClick={handleSubmit}
              />
            )}
          </FieldWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default UserPhone;

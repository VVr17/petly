import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useUpdateUserMutation } from 'redux/api/userApi';
import { validationSchema } from './validation';
import { FieldWrapper } from '../UserDataItem.styled';
import UserUpdateButton from 'components/Ui-Kit/UserupdateButton/UserUpdateButton';
import UserInput from 'components/Ui-Kit/UserInput';
import Loader from 'components/Loader';
import PropTypes from 'prop-types';

const UserName = ({ user }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [updateUser, { isLoading }] = useUpdateUserMutation();

  const initialValues = { name: user.name || '' };

  const handleClick = (values, actions) => {
    if (isDisabled) {
      setIsDisabled(false);
      return;
    }

    if (!values.name) return;
    setIsDisabled(true);
  };

  const handleSubmit = (values, actions) => {
    if (!isDisabled) {
      return;
    }

    if (values.name === user.name) return;

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
      {({ isSubmitting, values, errors }) => (
        <Form>
          <FieldWrapper>
            <UserInput
              label="Name"
              name="name"
              type="name"
              disabled={isDisabled}
              placeholder={user.name || ''}
            />
            <UserUpdateButton
              type="submit"
              isdisabled={isDisabled}
              onClick={() => {
                if (!values.name) {
                  values.name = user.name;
                  handleClick(values);
                }
                if (errors.name) return;
                handleClick(values);
              }}
            />
            {isLoading && <Loader />}
          </FieldWrapper>
        </Form>
      )}
    </Formik>
  );
};

UserName.propTypes = {
  user: PropTypes.object,
}

export default UserName;

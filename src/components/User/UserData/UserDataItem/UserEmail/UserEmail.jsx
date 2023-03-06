import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import { useUpdateUserMutation } from 'redux/api/userApi';
import { validationSchema } from './validation';
import UserUpdateButton from 'components/Ui-Kit/UserupdateButton';
import UserInput from 'components/Ui-Kit/UserInput';
import Loader from 'components/Loader';
import { selectUserState } from 'redux/user/userSelectors';
import { FieldWrapper } from '../UserDataItem.styled';

const UserEmail = ({ isUpdating, setIsUpdating }) => {
  const { formatMessage } = useIntl();
  const [isDisabled, setIsDisabled] = useState(true);
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const user = useSelector(selectUserState);
  const initialValues = { email: user?.email || '' };

  const handleClick = (values, actions) => {
    if (isDisabled) {
      setIsDisabled(false);
      setIsUpdating(true);
      return;
    }
    if (!values.email) return;
    setIsDisabled(true);
    setIsUpdating(false);
  };

  const handleSubmit = async (values, actions) => {
    if (!isDisabled) {
      return;
    }

    if (values.email === user.email) return;

    // create formData
    const data = new FormData();
    data.append('email', values.email);
    const { data: response } = await updateUser(data);
    console.log('response', response);
    if (response.code === 200)
      toast.info(formatMessage({ id: 'toastEmailUpdated' }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, errors }) => (
        <Form>
          <FieldWrapper>
            <UserInput
              label="Email"
              name="email"
              type="email"
              disabled={isDisabled}
              placeholder={user?.email || ''}
            />
            <UserUpdateButton
              type="submit"
              disabled={isUpdating && isDisabled}
              isInputDisabled={isDisabled}
              onClick={() => {
                if (!values.email) {
                  values.email = user.email;
                  handleClick(values);
                }
                if (errors.email) return;
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

UserEmail.propTypes = {
  isUpdating: PropTypes.bool,
  setIsUpdating: PropTypes.func,
};

export default UserEmail;

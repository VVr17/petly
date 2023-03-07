import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import { useUpdateUserMutation } from 'redux/api/userApi';
import { validationSchema } from './validation';
import { FieldWrapper } from '../UserDataItem.styled';
import UserUpdateButton from 'components/Ui-Kit/UserupdateButton';
import UserInput from 'components/Ui-Kit/UserInput';
import Loader from 'components/Loader';
import { selectUserState } from 'redux/user/userSelectors';

const UserName = ({ isUpdating, setIsUpdating }) => {
  const { formatMessage } = useIntl();
  const [isDisabled, setIsDisabled] = useState(true);
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const user = useSelector(selectUserState);
  const initialValues = { name: user.name || '' };

  const handleClick = (values, actions) => {
    if (isDisabled) {
      setIsDisabled(false);
      setIsUpdating(true);
      return;
    }

    if (!values.name) return;
    setIsDisabled(true);
    setIsUpdating(false);
  };

  const handleSubmit = async (values, actions) => {
    if (!isDisabled) {
      return;
    }

    if (values.name === user.name) return;

    // create formData
    const data = new FormData();
    data.append('name', values.name);
    const { data: response } = await updateUser(data);
    if (response.code === 200)
      toast.info(formatMessage({ id: 'toastNameUpdated' }));
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
              label={formatMessage({ id: 'name' })}
              name="name"
              type="name"
              disabled={isDisabled}
              placeholder={user.name || ''}
            />
            <UserUpdateButton
              type="submit"
              disabled={isUpdating && isDisabled}
              isInputDisabled={isDisabled}
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
  isUpdating: PropTypes.bool,
  setIsUpdating: PropTypes.func,
};

export default UserName;

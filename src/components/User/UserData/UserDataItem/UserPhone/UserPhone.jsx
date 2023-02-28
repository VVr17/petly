import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useUpdateUserMutation } from 'redux/api/userApi';
import { validationSchema } from './validation';
import { FieldWrapper } from '../UserDataItem.styled';
import UserUpdateButton from 'components/Ui-Kit/UserupdateButton/UserUpdateButton';
import UserInput from 'components/Ui-Kit/UserInput';
import Loader from 'components/Loader';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectUserState } from 'redux/user/userSelectors';
import { toast } from 'react-toastify';

const UserPhone = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const user = useSelector(selectUserState);
  const initialValues = { phone: user?.phone || '' };

  const handleClick = values => {
    if (isDisabled) {
      setIsDisabled(false);
      return;
    }

    if (!values.phone) return;
    setIsDisabled(true);
  };

  const handleSubmit = async (values, actions) => {
    if (!isDisabled) {
      return;
    }

    if (values.phone === user.phone) return;

    // create formData
    const data = new FormData();
    data.append('phone', values.phone);
    const { data: response } = await updateUser(data);
    if (response.code === 200)
      toast.info('Phone has been successfully updated');
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
              label="Phone"
              name="phone"
              type="phone"
              disabled={isDisabled}
              placeholder={user.phone || ''}
            />
            <UserUpdateButton
              type="submit"
              isdisabled={isDisabled}
              onClick={() => {
                if (!values.phone) {
                  values.phone = user.phone;
                  handleClick(values);
                }
                if (errors.phone) return;
                handleClick(values);
              }}
            />
            {/* {isLoading && <Loader />} */}
          </FieldWrapper>
        </Form>
      )}
    </Formik>
  );
};

UserPhone.propTypes = {
  user: PropTypes.object,
};

export default UserPhone;

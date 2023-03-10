import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useIntl } from 'react-intl';
import { useUpdateUserMutation } from 'redux/api/userApi';
import { validationSchema } from './validation';
import UserUpdateButton from 'components/Ui-Kit/UserupdateButton';
import UserInput from 'components/Ui-Kit/UserInput';
import Loader from 'components/Loader';
import { selectUserState } from 'redux/user/userSelectors';
import { FieldWrapper } from '../UserDataItem.styled';
import { noDataFallback } from 'constants/noDataFallback';

const UserPhone = ({ isUpdating, setIsUpdating }) => {
  const { formatMessage } = useIntl();
  const [isDisabled, setIsDisabled] = useState(true);
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const user = useSelector(selectUserState);
  const initialValues = { phone: user?.phone || '' };

  const handleClick = values => {
    if (isDisabled) {
      setIsDisabled(false);
      setIsUpdating(true);
      return;
    }

    setIsDisabled(true);
    setIsUpdating(false);
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
      toast.info(formatMessage({ id: 'toastPhoneUpdated' }));
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
              label={formatMessage({ id: 'phone' })}
              name="phone"
              type="phone"
              disabled={isDisabled}
              placeholder={user.phone || noDataFallback}
            />
            <UserUpdateButton
              type="submit"
              disabled={isUpdating && isDisabled}
              isInputDisabled={isDisabled}
              onClick={() => {
                if (!values.phone) {
                  values.phone = user.phone;
                  handleClick(values);
                }
                if (errors.phone) return;
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

UserPhone.propTypes = {
  isUpdating: PropTypes.bool,
  setIsUpdating: PropTypes.func,
};

export default UserPhone;

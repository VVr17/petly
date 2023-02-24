import UserInput from 'components/Ui-Kit/UserInput';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useUpdateUserMutation } from 'redux/api/userApi';

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
          <div>
            <UserInput
              label="Phone"
              name="phone"
              type="phone"
              isDisabled={isDisabled}
            />
            {isDisabled ? (
              <button
                type="button"
                onClick={() => {
                  setIsDisabled(false);
                }}
              >
                {/* <Pencil /> */}
              </button>
            ) : (
              <button type="submit" onClick={handleSubmit}>
                {/* <галочка /> */}
              </button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UserPhone;

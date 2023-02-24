import UserInput from 'components/Ui-Kit/UserInput';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';

const UserPhone = () => {
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = () => {
    //handlesubmit

    setIsDisabled(true);
  };

  <Formik
    initialValues={initialValues}
    // validationSchema={    }
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
  </Formik>;
};

export default UserPhone;

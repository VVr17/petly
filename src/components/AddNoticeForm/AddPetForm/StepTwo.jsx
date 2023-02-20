import React from 'react';
import InputField from 'components/Ui-Kit/Input';
import { Field, Formik } from 'formik';

const StepTwo = () => {
  return (
    <>
      <div>The sex*</div>
      <label>
        <Field checked type="radio" name="picked" value="male" />
        Male
      </label>
      <label>
        <Field type="radio" name="picked" value="female" />
        Female
      </label>
      <InputField
        name="location"
        type="text"
        placeholder="Type location"
        label="Location*"
      />
      <InputField
        name="price"
        type="text"
        placeholder="Type price"
        label="Price*"
      />
      <InputField
        name="photoURL"
        type="file"
        label="Load the pet’s image:*"
        // onChange={Formik.handleChange}
      />
      <InputField
        name="comment"
        type="text"
        placeholder="Type comment"
        label="Comments*"
      />
    </>
  );
};

export default StepTwo;

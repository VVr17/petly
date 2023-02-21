import React, { useState } from 'react';
import InputField from 'components/Ui-Kit/Input';
import { Field, Formik } from 'formik';
import { RadioContainer, RadioButton, RadioLabel } from './AddPetForm.styled';
import PropTypes from 'prop-types';

const StepTwo = ({ value }) => {
  return (
    <>
      <p>The sex*</p>
      <RadioContainer>
        <RadioLabel id="male">
          <RadioButton
            checked={value === 'male'}
            type="radio"
            name="sex"
            value="male"
            id="male"
          />
          Male
        </RadioLabel>
        <RadioLabel id="female">
          <RadioButton
            checked={value === 'female'}
            type="radio"
            name="sex"
            value="female"
            id="female"
          />
          Female
        </RadioLabel>
      </RadioContainer>
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
      <InputField name="photoURL" type="file" label="Load the pet’s image:*" />
      <InputField
        name="comment"
        type="text"
        placeholder="Type comment"
        label="Comments*"
      />
    </>
  );
};
StepTwo.propTypes = {
  value: PropTypes.any,
};

export default StepTwo;

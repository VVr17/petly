import React, { useState } from 'react';
import InputField from 'components/Ui-Kit/Input';
import { Field, Formik } from 'formik';
import {
  LoadImageCont,
  LoadImgLabel,
  LoadImgInput,
  LoadImgPlus,
} from './AddPetForm.styled';
import PropTypes from 'prop-types';
import ImageField from 'components/UploadImage';

const StepTwo = ({ children, handleChange, name }) => {
  return (
    <>
      {children}
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
      <LoadImgLabel>
        Load the pet’s image:*
        {/* <img src={image} alt="Preview" />
        {/* <LoadImageCont>
          <LoadImgPlus src={Plus} alt="upload" width="47px" height="47px" />
        </LoadImageCont> */}
        {/* <LoadImgInput
          name="photoURL"
          type="file"
          accept="image/*"
          onChange={handleChange}
        /> */}
      </LoadImgLabel>
      <ImageField name={name} />
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
  children: PropTypes.node,
  handleChange: PropTypes.func,
  name: PropTypes.string,
};

export default StepTwo;

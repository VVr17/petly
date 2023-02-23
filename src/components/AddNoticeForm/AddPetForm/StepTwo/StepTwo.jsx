import React, { useState } from 'react';
// import InputField from 'components/Ui-Kit/Input';
// import { Field, Formik } from 'formik';
// import {
//   LoadImageCont,
//   LoadImgLabel,
//   LoadImgInput,
//   LoadImgPlus,
//   Textarea,
//   TextareaLabel,
// } from './AddPetForm.styled';
import PropTypes from 'prop-types';
// import ImageField from 'components/UploadImage';
// import { StyledSpan } from 'components/Ui-Kit/Input/Input.styled';

const StepTwo = ({ children }) => {
  return (
    <>
      {children}
      {/* <LoadImgLabel>
        Load the pet’s image:<StyledSpan>*</StyledSpan>
      </LoadImgLabel> */}
    </>
  );
};
StepTwo.propTypes = {
  children: PropTypes.node,
  // handleChange: PropTypes.func,
  // name: PropTypes.string,
};

export default StepTwo;

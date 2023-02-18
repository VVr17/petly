import React from "react";
import { Field, ErrorMessage } from "formik";
import PropTypes from 'prop-types';

const InputField = ({ label, name, type, placeholder, id }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field type={type} name={name} id={id} placeholder={placeholder} />
      <ErrorMessage name={name} component="div" />
    </>
  );
};

export default InputField;


InputField.propTypes = {
<<<<<<< HEAD
  label: PropTypes.string,
=======
  label: PropTypes.string.isRequired,
>>>>>>> main
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
};
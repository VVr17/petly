
import React from "react";
import { Field, ErrorMessage } from "formik";

const InputField = ({ label, name, type, placeholder }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field type={type} name={name} id={name} placeholder={placeholder} />
      <ErrorMessage name={name} component="div" />
    </>
  );
};

export default InputField;

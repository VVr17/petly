import React from "react";
import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom"; 

import { Formik } from "formik";
import * as Yup from "yup";
import { ModalContent, ModalWrapper, FormWrapper } from "./RegisterForm.styled";
import InputField from "../Ui-Kit/Input/Input";

import { useSignupUserMutation } from "redux/api/userApi";



// Values for Formik

const initialValues = {
    name: "",
    city: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
};

// Yup validation

const validationSchema = Yup.object().shape({

    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, "minimum seven characters, at least one uppercase letter, one lowercase letter and one number")
        .min(8, "Password must be at least 8 characters long")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please confirm your password"),
    name: Yup.string().required("Name is required"),
    city: Yup.string().required("City is required"),
    phone: Yup.string()
        .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, "Invalid phone number")
        .min(13, "Phone number must be at least 10 digits")
        .max(13, "Phone number must be at most 10 digits")
        .required("Phone number is required"),
});



// main function

const RegistrationForm = () => {

const [signupUser, { isError }] = useSignupUserMutation();
  const navigate = useNavigate();
    const { isAuth } = useSelector(state => state.user);
    const handleSubmit = (values) => {
        
        const credentials = {
            name: values.name,
            city: values.city,
            phone: values.phone,
            email: values.email,
            password: values.password,
        };

        signupUser(credentials);
     
    };

    useEffect(() => {
    if (isAuth) {
      console.log('Congratulations! You are successfully signed up!');
      navigate('/');
    }
  });

    return (
        <ModalWrapper>
            <ModalContent>
                <h1>Registration form</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <FormWrapper>
                            <InputField name="name" type="name" placeholder="Name" />
                            <InputField name="city" type="city" placeholder="City" />
                            <InputField name="phone" type="phone" placeholder="Phone" />
                            <InputField name="email" type="email" placeholder="Email" />
                            <InputField name="password" type="password" placeholder="Password" autocomplete="new-password"/>
                            <InputField name="confirmPassword" type="password" placeholder="Confirm Password" autocomplete="new-password"/>
                            <button type="submit" >
                                Submit
                            </button>
                        </FormWrapper>
                    )}
                </Formik>
                <p>Already have an account?<NavLink to="/login">Login</NavLink></p>
            </ModalContent>
        </ModalWrapper>
    );
};

export default RegistrationForm;

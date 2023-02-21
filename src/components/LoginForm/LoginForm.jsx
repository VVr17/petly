import React from "react";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from "formik";
import { ModalContent, ModalWrapper, FormWrapper } from "./LoginForm.styled";
import * as Yup from "yup";
import InputField from "../Ui-Kit/Input/Input";
import { NavLink } from "react-router-dom";
import { useLoginUserMutation } from "redux/api/userApi";
import { useSelector } from "react-redux";
import Button from 'components/Ui-Kit/Button';

const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",

};

const validationSchema = Yup.object().shape({

    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters long")
        .required("Password is required"),
});

const LoginForm = () => {

    const [loginUser, { isError }] = useLoginUserMutation();
    const navigate = useNavigate();
    const { isAuth } = useSelector(state => state.user);
    const handleSubmit = (values) => {

        const credentials = {
            email: values.email,
            password: values.password,
        };
        loginUser(credentials);
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
                <h1>Login</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <FormWrapper>
             
                            <InputField name="email" type="email" placeholder="Email" />
                            <InputField name="password" type="password" placeholder="Password" />
                            <Button name="filled" type="submit" disabled={isSubmitting}>
                                Submit
                            </Button>
                        </FormWrapper>
                    )}
                </Formik>
                <p>Don&apos;t have an account? <NavLink to="/register">Regiser</NavLink></p>
            </ModalContent>
        </ModalWrapper>
    );
};

export default LoginForm;

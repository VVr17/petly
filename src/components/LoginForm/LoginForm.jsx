import React from "react";
import { useEffect } from 'react';

import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { useLoginUserMutation } from "redux/api/userApi";

import { Formik } from "formik";
import * as Yup from "yup";
import LoginInputs from "./LoginInputs";
import { ModalContent, ModalWrapper, FormWrapper, ButtonWrapper, FormTitle, LoginLink, Paragraph } from "./LoginForm.styled";

import Button from 'components/Ui-Kit/Button';


// Values for Formik

const initialValues = {
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
        .min(7, "Password must be at least 7 characters long")
        .required("Password is required"),
});



// main function

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
                <FormTitle>Login</FormTitle>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => {
                        return (
                            <FormWrapper>
                                <LoginInputs />
                                <ButtonWrapper>
                                    <Button name="filled" type="submit" disabled={isSubmitting}>
                                        Submit
                                    </Button>
                                </ButtonWrapper>
                            </FormWrapper>);
                    }}
                </Formik>
                <Paragraph>Don&apos;t have an account? <LoginLink to="/register">Regiser</LoginLink></Paragraph>
            </ModalContent>
        </ModalWrapper>
    );
};

export default LoginForm;

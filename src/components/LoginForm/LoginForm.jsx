import React from "react";
import { useEffect } from 'react';

import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { useLoginUserMutation } from "redux/api/userApi";

import { Formik } from "formik";
import LoginInputs from "./LoginInputs";
import { loginInitialValues as initialValues, loginValidationSchema as validationSchema} from "./LoginValidation";
// styles from RegisterForm
import { ModalContent, ModalWrapper, FormWrapper, ButtonWrapper, FormTitle, LoginLink, Paragraph, ErrorMessage } from "../RegisterForm/RegisterForm.styled";

import Button from 'components/Ui-Kit/Button';

// Main component for login form
const LoginForm = () => {

    // React Redux hooks
    const [loginUser, { isError, error }] = useLoginUserMutation();
    const navigate = useNavigate();
    const { isAuth } = useSelector(state => state.user);

    // Function to handle form submission
    const handleSubmit = (values) => {
        const credentials = {
            email: values.email,
            password: values.password,
        };
        loginUser(credentials);
    };

    // Effect hook to handle successful login and redirect user to dashboard
    useEffect(() => {
        if (isAuth) {
            console.log('Congratulations! You are successfully signed up!');
            navigate('/user');
        }
    });

    // Render form using Formik and LoginInputs components
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
                <Paragraph>Don&apos;t have an account? <LoginLink to="/register">Register</LoginLink></Paragraph>
                {isError && <ErrorMessage>{error.data.message}</ErrorMessage>}
            </ModalContent>
        </ModalWrapper>
    );
};

export default LoginForm;

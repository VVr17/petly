import React from "react";
import { Formik } from "formik";
import { ModalContent, ModalWrapper, FormWrapper } from "./LoginForm.styled";
import * as Yup from "yup";
import InputField from "../Ui-Kit/Input/Input";
import { NavLink } from "react-router-dom";

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
    const handleSubmit = (values) => {
        console.log(values);
    };

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
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </FormWrapper>
                    )}
                </Formik>
                <p>Don&apos;t have an account? <NavLink to="/register">Regiser</NavLink></p>
            </ModalContent>
        </ModalWrapper>
    );
};

export default LoginForm;

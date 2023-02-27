import * as Yup from "yup";


// Values for Formik

export const loginInitialValues = {
    email: "",
    password: "",
    confirmPassword: "",

};


// Yup validation

export const loginValidationSchema = Yup.object().shape({

    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(7, "Password must be at least 7 characters long")
        .required("Password is required"),
});

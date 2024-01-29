import * as Yup from "yup";

// Authentication form validation
export const AuthenticationSchema = new Yup.ObjectSchema({
    email: Yup.string().email("Email is not valid").required("Email is required"),
    password: Yup.string().required("Password is required"),
});

// SignUp form validation
export const SignUpSchema = new Yup.ObjectSchema({
    email: Yup.string().email("Email is not valid").required("Email is required"),
    password: Yup.string().required("Password is required"),
    username: Yup.string().required("Username is required"),
});

// Contact form validation
export const ContactFormSchema = Yup.object({
    email: Yup.string().email("Invalid email!").required("Email is required"),
    full_name: Yup.string().required("Full name is required"),
    class: Yup.string().required("Class is required"),
    comment: Yup.string(),
});

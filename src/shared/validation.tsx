import * as Yup from "yup";

export const AuthenticationSchema = new Yup.ObjectSchema({
    email: Yup.string().email("Email is not valid").required("Email is required"),
    password: Yup.string().required("Password is required"),
});

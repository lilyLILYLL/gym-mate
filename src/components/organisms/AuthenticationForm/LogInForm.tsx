"use client";
import React from "react";
import { Button, Text, TextField } from "@atoms";
import { Formik } from "formik";
import { AuthenticationSchema } from "@shared";
import Link from "next/link";
import { useAppDispatch, useLogInMutation, setToken } from "@redux";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
    const router = useRouter();

    // Redux hook
    const dispatch = useAppDispatch();
    const [login, loginResult] = useLogInMutation();

    const [errorMessage, setErrorMessage] = React.useState("");
    console.log(errorMessage);

    // Handle Login Request
    React.useEffect(() => {
        if (loginResult.isLoading) return;

        if (loginResult.isError) {
            setErrorMessage(loginResult.error.toString());

            return;
        }

        if (loginResult.isSuccess && loginResult.data) {
            dispatch(setToken(loginResult.data));
            router.push("/home");
            return;
        }
    }, [loginResult]);

    return (
        <div>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => login(values)}
                validationSchema={AuthenticationSchema}
            >
                {(formik) => (
                    <div className=" bg-black w-5/6 md:w-2/3 lg:w-1/3 mx-auto py-10 px-10 flex flex-col gap-6 items-center">
                        {/* EMAIL */}
                        <TextField
                            label="Email"
                            value={formik.values.email}
                            placeholder="email@gmail.com"
                            onChange={formik.handleChange("email")}
                            errorMessage={
                                (formik.touched.email && formik.errors.email) || ""
                            }
                        />

                        {/* PASSWORD */}
                        <TextField
                            label="Password"
                            value={formik.values.password}
                            placeholder="**********"
                            onChange={formik.handleChange("password")}
                            errorMessage={
                                (formik.touched.password && formik.errors.password) || ""
                            }
                            type="password"
                        />

                        {errorMessage && (
                            <div className="text-red-500 text-sm">{errorMessage}</div>
                        )}

                        {/* SUBMIT BUTTON */}
                        <Button
                            title="Log In"
                            type="danger"
                            containerClassName="rounded-lg w-full mt-6"
                            onClick={formik.handleSubmit}
                        />

                        <Text className="text-white">
                            New to Gymate?
                            <span className="text-red-500 font-bold">
                                <Link href="/signup"> Sign Up</Link>
                            </span>
                        </Text>
                        {/* <Text className="text-white">
                            ( Test Account: test@gmail.com - 123456 )
                        </Text> */}
                    </div>
                )}
            </Formik>
        </div>
    );
};

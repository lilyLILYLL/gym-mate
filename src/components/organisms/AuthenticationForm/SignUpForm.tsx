"use client";
import React from "react";
import { Button, Text, TextField } from "@atoms";
import { Formik, FormikProps } from "formik";
import { SignUpSchema } from "@shared";
import Link from "next/link";
import { useSignUpMutation } from "@redux";
import { useRouter } from "next/navigation";

export const SignUpForm = () => {
    const [signup, signUpResult] = useSignUpMutation();
    const [errorMessage, setErrorMessage] = React.useState("");
    const [isSignedUp, setIsSignedUp] = React.useState(false);

    const router = useRouter();

    React.useEffect(() => {
        console.log(signUpResult);
        if (signUpResult.isLoading) return;

        if (signUpResult.isError) {
            setErrorMessage(signUpResult.error.toString());
            return;
        }
        if (signUpResult.isSuccess && signUpResult.data) {
            setIsSignedUp(true);
        }
    }, [signUpResult]);

    return (
        <div>
            {isSignedUp ? (
                <div className=" bg-black w-5/6 md:w-2/3 lg:w-1/3 mx-auto  p-6 text-white rounded-lg text-center ">
                    <Text className="italic mb-2">
                        You have been signed up successfully! 🎉 🎉🎉{" "}
                    </Text>
                    <Text>
                        Go to{" "}
                        <span className="text-red-600 font-bold underline">
                            <Link href={"/login"}>Log In</Link>
                        </span>
                    </Text>
                </div>
            ) : (
                <Formik
                    initialValues={{ email: "", password: "", username: "" }}
                    onSubmit={(values) => {
                        signup(values);
                    }}
                    validationSchema={SignUpSchema}
                >
                    {(formik) => (
                        <div className=" bg-black w-5/6 md:w-2/3 lg:w-1/3 mx-auto py-10 px-10 flex flex-col gap-6 items-center">
                            {/* USERNAME */}
                            <TextField
                                label="Username"
                                value={formik.values.username}
                                placeholder="A Smith"
                                onChange={formik.handleChange("username")}
                                errorMessage={
                                    (formik.touched.username && formik.errors.username) ||
                                    ""
                                }
                            />
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
                                    (formik.touched.password && formik.errors.password) ||
                                    ""
                                }
                                type="password"
                            />
                            {errorMessage && (
                                <div className="text-red-500 text-sm">{errorMessage}</div>
                            )}

                            {/* SUBMIT BUTTON */}
                            <Button
                                title="Sign Up"
                                type="danger"
                                containerClassName="rounded-lg w-full mt-6"
                                onClick={formik.handleSubmit}
                            />

                            <Text className="text-white">
                                Already have account?
                                <span className="text-red-500 font-bold">
                                    <Link href={"/login"}> Log In</Link>
                                </span>
                            </Text>
                        </div>
                    )}
                </Formik>
            )}
        </div>
    );
};

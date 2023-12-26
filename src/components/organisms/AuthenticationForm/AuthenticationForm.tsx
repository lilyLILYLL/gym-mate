"use client";
import React from "react";
import { Button, Text, TextField } from "@atoms";
import { Header } from "@molecules";
import { Formik } from "formik";
import { AuthenticationSchema } from "@shared";
import Link from "next/link";

type Props = {
    type: "signup" | "signin";
};

export const AuthenticationForm = (props: Props) => {
    return (
        <div>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={() => {}}
                validationSchema={AuthenticationSchema}
            >
                {(formik) => (
                    <div className=" bg-black w-5/6 md:w-2/3 lg:w-1/3 mx-auto py-10 px-10 flex flex-col gap-6 items-center">
                        <button onClick={() => console.log(formik.values, formik.errors)}>
                            Click me
                        </button>
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

                        {/* SUBMIT BUTTON */}
                        <Button
                            title={props.type === "signup" ? "Sign Up" : "Sign In"}
                            type="danger"
                            containerClassName="rounded-lg w-full mt-6"
                            onClick={formik.handleSubmit}
                        />

                        <Text className="text-white">
                            {props.type === "signup"
                                ? "Already have account? "
                                : "New to Gymate? "}

                            <span className="text-red-500 font-bold">
                                <Link
                                    href={props.type === "signup" ? "/login" : "/signin"}
                                >
                                    {props.type === "signup" ? "Sign In" : "Sign Up"}
                                </Link>
                            </span>
                        </Text>
                    </div>
                )}
            </Formik>
        </div>
    );
};

"use client";
import React from "react";
import { TextWithUnderLine, TextField, Button } from "@atoms";

import { Formik } from "formik";
import { CLASSES, ContactFormSchema } from "@shared";
type Props = {
    conainerClassName?: string;
};

export const ContactForm = (props: Props) => {
    return (
        <div className={`bg-gray-100 p-10 ${props.conainerClassName} `}>
            <Formik
                initialValues={{ email: "", full_name: "", comment: "", class: "" }}
                validationSchema={ContactFormSchema}
                onSubmit={() => {}}
            >
                {(formik) => (
                    <div className="flex flex-col gap-6 justify-center items-center ">
                        <TextWithUnderLine textClassName="text-[30px]">
                            Leave Us Your Info
                        </TextWithUnderLine>

                        <TextField
                            value={formik.values.email}
                            placeholder="Email *"
                            onChange={formik.handleChange("email")}
                            errorMessage={formik.touched.email ? formik.errors.email : ""}
                        />
                        <TextField
                            value={formik.values.full_name}
                            placeholder="Full Name *"
                            onChange={formik.handleChange("full_name")}
                            errorMessage={
                                formik.touched.full_name ? formik.errors.full_name : ""
                            }
                        />

                        <select
                            name="class"
                            className="w-full p-4 rounded-lg bg-primary-300 outline-none"
                            onChange={formik.handleChange("class")}
                        >
                            {CLASSES.map((item, index) => (
                                <option
                                    value={item.name}
                                    key={index}
                                >
                                    {item.name}
                                </option>
                            ))}
                        </select>

                        <TextField
                            textarea
                            value={formik.values.comment}
                            placeholder="Comment"
                            onChange={formik.handleChange("comment")}
                            errorMessage={
                                formik.touched.comment ? formik.errors.comment : ""
                            }
                        />

                        <Button
                            title="SUBMIT NOW"
                            type="danger"
                            containerClassName="mt-10"
                            onClick={formik.handleSubmit}
                        />
                    </div>
                )}
            </Formik>
        </div>
    );
};

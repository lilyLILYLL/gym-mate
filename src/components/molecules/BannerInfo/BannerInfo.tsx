import React from "react";
import { TextWithBg, Text, Button } from "@atoms";
import { IconArrowRight } from "@tabler/icons-react";
import { SampleCard } from "@molecules";
import { SampleModel } from "@shared";
import { type } from "os";

type Props = {
    type: "primary" | "secondary-black" | "secondary-white";
    title: string;
    header: string;
    description: string;
    button?: JSX.Element;
    containerClassName?: string;
    samples?: SampleModel[];
};

export const BannerInfo = (props: Props) => {
    let headerStyle = "";
    switch (props.type) {
        case "primary":
            headerStyle = "text-white sm:text-[45px] text-[40px]";
            break;
        case "secondary-black":
            headerStyle = "text-black sm:text-[35px] text-[30px]";
            break;
        case "secondary-white":
            headerStyle = "text-white sm:text-[35px] text-[30px]";
            break;
        default:
            break;
    }

    return (
        <div
            className={`h-fit lg:w-full sm:w-3/4 w-full  mx-auto flex flex-col gap-6 justify-center items-center lg:items-start relative ${props.containerClassName}`}
        >
            {/* TITLE */}
            <TextWithBg primary={props.type === "primary"}>{props.title}</TextWithBg>

            {/* HEADER */}
            <Text className={` font-bold ${headerStyle}`}>{props.header}</Text>

            {/* DESCRIPTION */}
            <Text
                className={`${
                    props.type === "primary"
                        ? "text-white text-[30px] sm:text-[36px]"
                        : "text-[#555] text-[14px] sm:text-[16px] "
                }`}
            >
                {props.description}
            </Text>

            {/* SAMPLES */}
            {props.samples && (
                <div
                    className={`pb-6 ${
                        props.type === "secondary-black"
                            ? "flex flex-col w-1/2 sm:flex-row sm:w-full "
                            : " flex flex-col gap-4  w-5/6 md:w-2/3 lg:w-full sm:grid  sm:grid-cols-2 grid-rows-2 sm:gap-y-8 sm:gap-x-10 text-left"
                    }`}
                >
                    {props.samples.map((item, index) => (
                        <SampleCard
                            key={index}
                            item={item}
                            type={props.type}
                        />
                    ))}
                </div>
            )}
            {/* BUTTON */}
            {props.button}
        </div>
    );
};

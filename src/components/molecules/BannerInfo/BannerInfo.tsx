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
    let headerStyle =
        props.type === "primary"
            ? "text-white text-[48px]"
            : props.type === "secondary-black"
            ? "text-black text-[35px]"
            : "text-white text-[35px]";

    return (
        <div
            className={`h-fit lg:w-full w-3/4 mx-auto flex flex-col gap-6 justify-center items-center lg:items-start relative ${props.containerClassName}`}
        >
            {/* TITLE */}
            <TextWithBg primary={props.type === "primary"}>{props.title}</TextWithBg>
            {/* HEADER */}
            <Text className={` font-bold ${headerStyle}`}>{props.header}</Text>
            {/* DESCRIPTION */}
            <Text
                className={`${
                    props.type === "primary"
                        ? "text-white text-[36px]"
                        : "text-[#555] text-[1rem] "
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

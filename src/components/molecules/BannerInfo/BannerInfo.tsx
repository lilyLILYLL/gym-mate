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
    children?: JSX.Element;
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
        <div className={` lg:w-full w-3/4 mx-auto ${props.containerClassName}`}>
            <div className="flex flex-col gap-6">
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
                                ? "flex flex-row "
                                : "grid grid-cols-2 grid-rows-2 gap-y-8 gap-x-10"
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
                <Button
                    animation
                    title="OUR CLASSES"
                    type="secondary"
                    postfix={
                        <IconArrowRight
                            className="w-8"
                            color="red"
                        />
                    }
                    containerClassName="lg:self-start self-center "
                />
            </div>
        </div>
    );
};

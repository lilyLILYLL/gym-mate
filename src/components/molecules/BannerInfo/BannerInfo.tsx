import React from "react";
import { TextWithBg, Text, Button } from "@atoms";
import { IconArrowRight } from "@tabler/icons-react";

type Props = {
    primary?: boolean;
    title: string;
    header: string;
    description: string;
    children?: JSX.Element;
    containerClassName?: string;
};

export const BannerInfo = (props: Props) => {
    return (
        <div className={` w-fit  ${props.containerClassName}`}>
            <div className="flex flex-col gap-4 ">
                <TextWithBg primary={props.primary}>{props.title}</TextWithBg>
                <Text
                    className={` font-bold ${
                        props.primary
                            ? "text-white text-[3.2rem] "
                            : "text-black text-[3rem]"
                    } `}
                >
                    {props.header}
                </Text>
                <Text
                    className={`${
                        props.primary
                            ? "text-white text-[2.8rem]"
                            : "text-[#555] text-[1rem] "
                    }`}
                >
                    {props.description}
                </Text>

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
                />
            </div>
        </div>
    );
};

import React from "react";
import { IconArrowRight } from "@tabler/icons-react";

export type Props = {
    title: string;
    type: "primary" | "secondary-black" | "secondary-white" | "paging" | "danger";
    rounded?: "none" | "sm" | "md" | "lg";
    prefix?: JSX.Element;
    postfix?: boolean;
    containerClassName?: string;
    textClassName?: string;
    onClick?: (e?: any) => void;
    animation?: boolean;
};

export const Button = (props: Props) => {
    let buttonStyle = "";
    switch (props.type) {
        case "primary":
            buttonStyle =
                "bg-black text-white font-bold text-sm border border-[#555] rounded-sm p-[0.1rem]";
            break;
        case "secondary-white":
            buttonStyle = "bg-white py-3 px-6 text-black font-bold text-sm";
            break;
        case "secondary-black":
            buttonStyle = "bg-[#555] py-3 px-6 text-white font-bold text-sm";
            break;
        case "paging":
            buttonStyle = "";
            break;
        case "danger":
            buttonStyle = "bg-red-600 py-3 px-4 text-white font-bold";
            break;
        default:
            break;
    }
    const bgColor = "red-500";

    return (
        <div
            className={` button
            relative flex flex-row justify-center items-center gap-2 pr-2 w-fit cursor-pointer  ${buttonStyle} ${
                props.textClassName
            } ${props.containerClassName} 
          ${props.animation ? "button-animation" : ""}
           `}
        >
            {props.prefix}
            {props.title}
            {props.postfix && (
                <IconArrowRight
                    className="w-5"
                    color={props.type === "danger" ? "white" : "red"}
                />
            )}
        </div>

        // {props.animation && (
        //     <div className="z-20 absolute bg-transparent w-full h-full bottom-3 border-[#555] border left-3 "></div>
        // )}
    );
};

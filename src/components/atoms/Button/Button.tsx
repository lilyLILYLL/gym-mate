import React from "react";
import { IconArrowRight } from "@tabler/icons-react";

export type Props = {
    title: string;
    type: "primary" | "secondary" | "danger" | "spin";
    rounded?: "none" | "sm" | "md" | "lg";
    prefix?: JSX.Element;
    postfix?: boolean;
    containerClassName?: string;
    textClassName?: string;
    onClick?: (e?: any) => void;
    selected?: boolean;
};

export const Button = (props: Props) => {
    let buttonStyle = "";
    switch (props.type) {
        case "spin":
            buttonStyle =
                "bg-back text-white font-bold text-sm border border-[#555] rounded-sm p-[0.2rem] pr-2";
            break;
        case "primary":
            buttonStyle =
                "bg-[#555] text-white font-bold text-sm border border-[#555] rounded-[3rem] p-3 px-6 rounded-3xl text-center hover:bg-[#c53030] hover:text-white  hover:border-none";
            break;
        case "secondary":
            buttonStyle =
                "bg-white text-black font-bold text-sm border border-[#555] rounded-[3rem] p-3 px-6 rounded-3xl text-cente hover:bg-[#c53030] hover:text-white  hover:border-none";
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
            onClick={props.onClick}
            className={` relative flex flex-row justify-center items-center gap-2  w-fit cursor-pointer 
             ${buttonStyle} ${props.textClassName} ${props.containerClassName} 
             ${props.selected ? " text-white bg-red-500" : ""} 
            
          `}
        >
            {props.prefix}
            {props.title}
            {props.postfix}
        </div>
    );
};

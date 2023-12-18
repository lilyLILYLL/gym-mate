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
                "bg-back text-white font-bold text-sm border border-[#555] rounded-sm p-[0.1rem]";
            break;
        case "primary":
            buttonStyle =
                "bg-[#555] text-white font-bold text-sm border border-[#555] rounded-[3rem] p-3 px-6 rounded-3xl text-center";
            break;
        case "secondary":
            buttonStyle =
                "bg-white text-black font-bold text-sm border border-[#555] rounded-[3rem] p-3 px-6 rounded-3xl text-center";
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
            className={` button  

            relative flex flex-row justify-center items-center gap-2  w-fit cursor-pointer hover:bg-pink-200 hover:text-black hover:border-none
             ${buttonStyle} ${props.textClassName} ${props.containerClassName} 
             ${props.selected ? "bg-pink-300 " : ""} 
            
          `}
        >
            {props.prefix}
            {props.title}
            {props.postfix}
        </div>
    );
};

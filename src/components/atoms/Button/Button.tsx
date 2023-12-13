import React from "react";

export type Props = {
    title: string;
    type: "primary" | "secondary" | "paging" | "danger";
    rounded?: "none" | "sm" | "md" | "lg";
    prefix?: JSX.Element;
    postfix?: JSX.Element;
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
        case "secondary":
            buttonStyle = "bg-white py-3 px-4 text-black font-bold";
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
    return (
        <div
            className={` 
            relative flex flex-row justify-center items-center gap-2 pr-2 w-fit cursor-pointer z-30 ${props.containerClassName}    ${buttonStyle} ${props.textClassName} `}
        >
            {props.prefix}
            {props.title}
            {props.postfix}
        </div>

        // {props.animation && (
        //     <div className="z-20 absolute bg-transparent w-full h-full bottom-3 border-[#555] border left-3 "></div>
        // )}
    );
};

import React from "react";

type Props = {
    title: string;
    type: "primary" | "secondary" | "paging" | "danger";
    prefix?: JSX.Element;
    postfix?: JSX.Element;
    containerClassName?: string;
    textClassName?: string;
    onClick?: (e?: any) => void;
};

export const Button = (props: Props) => {
    let buttonStyle = "";
    switch (props.type) {
        case "primary":
            buttonStyle =
                "bg-black text-white font-bold text-sm border border-[#555] rounded-sm p-[0.1rem]";
            break;
        case "secondary":
            buttonStyle = "";
            break;
        case "paging":
            buttonStyle = "";
            break;
        case "danger":
            buttonStyle = "";
            break;
        default:
            break;
    }
    return (
        <div
            className={`flex flex-row w-fit items-center gap-2 border  ${buttonStyle} ${props.containerClassName} cursor-pointer`}
            onClick={props.onClick}
        >
            {props.prefix}
            <div className={`${props.textClassName} `}>{props.title}</div>
            {props.postfix}
        </div>
    );
};

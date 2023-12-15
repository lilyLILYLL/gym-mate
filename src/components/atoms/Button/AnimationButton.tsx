import React from "react";
import "@styles/Animation.css";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

type Props = {
    title: string;
    backgroundColor: "white" | "red" | "gray";
    to?: string;
};

export const AnimationButton = (props: Props) => {
    let buttonStyle = "";
    switch (props.backgroundColor) {
        case "red":
            buttonStyle = "bg-red-600 text-white";
            break;
        case "gray":
            buttonStyle = "bg-[#555] text-white";
            break;
        case "white":
            buttonStyle = "bg-white text-black";
            break;
        default:
            break;
    }
    return (
        <div
            className={`animation-button relative w-fit    text-sm font-bold cursor-pointer mt-4 `}
        >
            <div
                className={`animattion-div button-${props.backgroundColor} w-full h-full absolute z-10`}
            ></div>
            <Link href={props.to || ""}>
                <div
                    className={` w-full h-full flex flex-row gap-2 relative z-20 py-3 px-6 ${buttonStyle}`}
                >
                    {props.title}
                    <IconArrowRight
                        className="w-5"
                        color={props.backgroundColor === "white" ? "red" : "white"}
                    />
                </div>
            </Link>
        </div>
    );
};

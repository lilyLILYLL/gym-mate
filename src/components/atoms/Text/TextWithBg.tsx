import React from "react";
import Image from "next/image";
import { TitleBg, TitleBgRed } from "@assets";

type Props = {
    children: String | JSX.Element;
    primary?: boolean;
};

export const TextWithBg = ({ children, primary }: Props) => {
    return (
        <div
            className={` overflow-hidden h-fit flex flex-col relative justify-center items-center w-fit px-10 py-2`}
        >
            <Image
                src={primary ? TitleBg : TitleBgRed}
                alt="title-bg"
                className={`w-full absolute z-10 `}
            />

            <div
                className={`z-20  text-center text-base font-medium ${
                    primary ? "text-black" : "text-white"
                }`}
            >
                {children}
            </div>
        </div>
    );
};

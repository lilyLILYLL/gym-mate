import React from "react";
import { main_img } from "@assets";
import Image from "next/image";

type Props = {};

export const ChooseUsImage = (props: Props) => {
    return (
        <div
            className="w-full relative before:content-[''] before:bg-red-600 before:w-[10px] before:absolute before:bottom-0  before:left-[-5%] before:h-[300px] z-50
            after:content-[''] after:bg-red-600 after:w-[10px] after:absolute  after:h-[400px] after:top-[30%] after:left-[100%] after:-rotate-[5deg]
     
        "
        >
            <Image
                src={main_img}
                alt="choose_us_banner"
            />
        </div>
    );
};

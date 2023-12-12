import React from "react";
import Image from "next/image";
import { GirlRun, GirlRedBg, Girl_Side_Text, Wind } from "@assets";

type Props = {};

export const GirlRunningImage = (props: Props) => {
    return (
        <div className="lg:flex lg:flex-row h-full gap-10 hidden lg:visible items-center relative">
            <Image
                src={GirlRun}
                alt="girl_run"
                className="absolute  w-[550px]"
                objectFit="contain"
            />
            <Image
                src={Wind}
                alt="girl_run"
                className="absolute w-[70px] left-[55%] top-[50%]"
                objectFit="contain"
            />
            <Image
                src={Girl_Side_Text}
                alt="girl_run"
                objectFit="contain"
                className="w-[90px] h-[700px]"
            />
            <Image
                src={GirlRedBg}
                alt="girl_run"
                className=" h-[560px]"
                objectFit="contain"
            />
        </div>
    );
};

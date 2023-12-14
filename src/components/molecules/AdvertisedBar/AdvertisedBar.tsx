import React from "react";
import Image from "next/image";
import { features_ct_bg } from "@assets";
import { AnimationButton, Text } from "@atoms";
type Props = {};

export const AdvertisedBar = (props: Props) => {
    return (
        <div className="absolute top-[-4rem] left-0 md:flex flex-row justify-center items-center hidden sm:visible">
            <Image
                src={features_ct_bg}
                alt="advertised banner "
                className="h-[220px] "
            />
            <div className="w-5/6 absolute flex md:flex-row gap-20 items-center flex-col gap--6">
                <Text className=" text-white font-bold text-[20px] lg:text-[30px] md:w-1/2 w-full">
                    We Are Always Providing Best Fitness Service For You
                </Text>
                <AnimationButton
                    title="JOIN WITH US"
                    backgroundColor="white"
                />
            </div>
        </div>
    );
};

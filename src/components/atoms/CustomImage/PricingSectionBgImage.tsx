import React from "react";
import { PricingBackground, BgDumbell, BgText } from "@assets";
import Image from "next/image";

type Props = {};

export const PricingSectionBgImage = (props: Props) => {
    return (
        <div className="relative h-full w-full">
            <Image
                src={PricingBackground}
                alt="pricing-bg"
                className="object-cover h-full w-full"
            />
            <Image
                src={BgText}
                alt="pricing-bg-text"
                className="object-cover w-1/6 absolute top-[20%]"
            />
            <Image
                src={BgDumbell}
                alt="pricing-bg-dumbell"
                className="object-cover w-1/6  absolute bottom-0 right-0"
            />
        </div>
    );
};

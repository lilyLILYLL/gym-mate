import React from "react";
import { BenefitCardModel } from "@shared";
import Image from "next/image";
import { Text } from "@atoms";

type Props = {
    benefit: BenefitCardModel;
};

export const BenefitCard = ({ benefit }: Props) => {
    return (
        <div
            className="w-full flex flex-col justify-center items-center text-center lg:gap-4 gap-2 p-8 lg:py-14 bg-white 
        rounded-tl-3xl rounded-br-3xl cursor-pointer shadow-lg shadow-slate-300 z-20"
        >
            <div className="lg:w-20 lg:h-20 w-16 h-16">
                <Image
                    src={benefit.img}
                    alt={benefit.title}
                    width={10}
                    height={10}
                    className="object-cover"
                />
            </div>
            <Text className="text-lg font-bold">{benefit.title}</Text>
            <Text className="text-[14px] leading-6 font-medium">
                {benefit.description}
            </Text>
        </div>
    );
};

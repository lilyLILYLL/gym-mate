import React from "react";
import { SampleModel } from "@shared";
import Image from "next/image";
import { Text } from "@atoms";

type Props = {
    item: SampleModel;
    type: "primary" | "secondary-black" | "secondary-white";
};

export const SampleCard = ({ item, type }: Props) => {
    return (
        <div
            className={`flex gap-3  ${
                type === "secondary-black"
                    ? " flex-col  border-slate-300 border-r-[0.5px]  justify-center items-center py-6 px-4"
                    : "flex-row items-center "
            }`}
        >
            <Image
                src={item.img}
                alt={item.label}
                className={`  ${
                    type === "secondary-black"
                        ? "w-12 h-12"
                        : "w-16 h-16 bg-[#555] p-3 rounded-full"
                }`}
                objectFit="contain"
            />
            <Text
                className={`font-bold  ${
                    type === "secondary-black" ? "text-center" : "text-white"
                }`}
            >
                {item.label}
            </Text>
        </div>
    );
};

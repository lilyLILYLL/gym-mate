import React from "react";
import { Banner } from "@assets";
import Image from "next/image";
import { Text } from "../../atoms/Text";

type Props = {
    title: string;
};

export const Header = (props: Props) => {
    return (
        <div className="absolute  h-[200px] sm:h-[360px] top-[2rem] ">
            <Image
                src={Banner}
                alt="banner"
                className="absolute z-10 w-full h-full object-cover"
            />
            <Text className="text-white text-[28px] font-bold text-center absolute z-20 bottom-[2rem]">
                {props.title}
            </Text>
        </div>
    );
};

import React from "react";
import { Text } from ".";

type Props = {
    children: string;
    textClassName?: string;
};

export const TextWithUnderLine = (props: Props) => {
    return (
        <Text
            className={`relative mb-2  font-bold after:w-[70px] after:bg-red-500 ${
                props.textClassName || "text-xl"
            } after:h-[4px] after:content-[' ']
                after:absolute after:bottom-[-4px] after:left-0 `}
        >
            {props.children}
        </Text>
    );
};

import React from "react";
import Image from "next/image";

type Props = {
    children: JSX.Element | string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Text = ({ children, ...props }: Props) => {
    return <div {...props}>{children}</div>;
};

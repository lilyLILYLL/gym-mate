import React from "react";

type Props = {
    children: JSX.Element;
};

export const AnimationButton = (props: Props) => {
    return <div className="border border-[#555] w-fit p-2 ">{props.children}</div>;
};

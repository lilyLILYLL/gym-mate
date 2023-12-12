import React from "react";
import { BannerInfo } from "@molecules";

type Props = {
    bgImg: string;
    title: string;
    header: string;
    description: string;
    primary?: boolean;
    children?: JSX.Element;
    containerClassName?: string;
};

export const BannerTemplate = ({
    bgImg,
    children,
    containerClassName,
    ...props
}: Props) => {
    return (
        <div
            className={`min-h-screen pt-36 bg-home-bg  bg-no-repeat relative ${containerClassName}`}
            style={{
                backgroundImage: `url('${bgImg}')`,
                backgroundPosition: "40% 10%",
            }}
        >
            {props.primary ? (
                <BannerInfo
                    containerClassName="left-[50%] top-[35%] absolute "
                    {...props}
                />
            ) : (
                <div className="grid md:grid-cols-2 grid-cols-1">
                    <BannerInfo {...props} />
                    {children}
                </div>
            )}
        </div>
    );
};

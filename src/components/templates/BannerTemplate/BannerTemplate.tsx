import React from "react";
import { BannerInfo } from "@molecules";

type Props = {
    bgImg: string;
    bannerInfo: JSX.Element;
    bannerImg?: JSX.Element;
    containerClassName?: string;
};

export const BannerTemplate = (props: Props) => {
    return (
        <div
            className={`min-h-screen pt-36 bg-home-bg  bg-no-repeat relative ${props.containerClassName}`}
            style={{
                backgroundImage: `url('${props.bgImg}')`,
                backgroundPosition: "40% 10%",
            }}
        >
            <div className="grid grid-cols-1 justify-center items-center text-center lg:grid-cols-2 lg:gap-20 lg:text-start lg:w-5/6 w-11/12 mx-auto ">
                {props.bannerInfo}
                {props.bannerImg}
            </div>
        </div>
    );
};

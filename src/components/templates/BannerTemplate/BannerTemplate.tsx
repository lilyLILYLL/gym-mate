import React from "react";

type Props = {
    bgImg?: string;
    bannerInfo: JSX.Element;
    bannerImg?: JSX.Element;
    containerClassName?: string;
    col?: boolean;
};

export const BannerTemplate = (props: Props) => {
    return (
        <div
            className={`min-h-screen py-28 bg-home-bg   relative ${props.containerClassName}`}
            style={{
                backgroundImage: `url('${props.bgImg}')`,
                backgroundPosition: "40% 10%",
            }}
        >
            <div
                className={`w-11/12 lg:w-5/6 mx-auto  flex flex-col gap-10  justify-center items-center text-center  ${
                    props.col
                        ? "lg:[&>*:first-child]:w-1/2 [&>*:first-child]:w-5/6 [&>*:first-child]:items-center"
                        : "lg:grid lg:grid-cols-2 lg:gap-20 lg:text-start "
                }`}
            >
                {props.bannerInfo}
                {props.bannerImg}
            </div>
        </div>
    );
};

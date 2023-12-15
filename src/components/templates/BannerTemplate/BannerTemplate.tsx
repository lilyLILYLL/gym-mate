import React from "react";

type Props = {
    bgImg?: string | JSX.Element;
    children?: JSX.Element | JSX.Element[];
    containerClassName?: string;
    col?: boolean;
};

export const BannerTemplate = (props: Props) => {
    return (
        <div
            className={`min-h-screen py-20 mt-4  bg-home-bg shadow-lg shadow-slate-200  relative ${props.containerClassName}`}
            style={{
                backgroundImage: `url('${
                    typeof props.bgImg === "string" ? props.bgImg : ""
                }')`,
                backgroundPosition: "50% 10%",
            }}
        >
            {/* CUSTOM Background IMG */}
            {props.bgImg && typeof props.bgImg !== "string" && (
                <div className="absolute top-0 left-0 right-0  h-full z-[-1] ">
                    {props.bgImg}
                </div>
            )}

            {/* CONTENT */}

            <div
                className={`w-11/12  xl:w-5/6 mx-auto  flex flex-col gap-20  justify-center items-center text-center  ${
                    props.col
                        ? "lg:[&>*:first-child]:w-1/2 [&>*:first-child]:w-5/6 [&>*:first-child]:items-center"
                        : "lg:grid lg:grid-cols-2 lg:gap-20 lg:text-start "
                }`}
            >
                {props.children}
            </div>
        </div>
    );
};

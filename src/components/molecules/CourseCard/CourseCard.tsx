import React from "react";
import { GymPlanType } from "@shared";
import Image from "next/image";
import { Text, AnimationButton } from "@atoms";

type Props = {
    plan: GymPlanType;
};

export const CourseCard = ({ plan }: Props) => {
    return (
        <div className="w-[350px] lg:w-full bg-white h-full pb-6 mx-auto relative ">
            <Image
                src={plan.img}
                alt="plan-img"
                className={`grayscale hover:grayscale-0 cursor-pointer h-[250px] `}
                width={100}
                height={100}
            />

            {/* plan INFO */}
            <div
                className={`relative w-3/4 mx-auto flex flex-col justify-center items-center gap-6 py-10
                `}
            >
                <Text className="absolute w-3/4 bg-white top-[-10%] font-bold text-[1.2rem] italic text-[#555] pt-3 pb-6">
                    {plan.type}
                </Text>
                {/* price */}
                <Text className="font-bold text-[3rem] ">
                    <span className="text-[#555] font-thin text-[2rem] ">$</span>
                    {`${plan.price.toLocaleString()}`}
                    <span className="text-[#555] text-lg font-thin">p/m</span>
                </Text>

                {/* classes */}
                <div className="flex flex-col gap-6 w-5/6 mx-auto tracking-wide italic pb-6">
                    {plan.benefits.map((item, index) => (
                        <Text
                            key={index}
                            className="text-sm text-[#555] "
                        >
                            {item}
                        </Text>
                    ))}
                </div>
                <AnimationButton
                    title="PURCHASE NOW"
                    backgroundColor="red"
                    to="/contact"
                />
            </div>
        </div>
    );
};

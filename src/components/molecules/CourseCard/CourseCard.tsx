import React from "react";
import { CourseModel } from "@shared";
import Image from "next/image";
import { Text, Button } from "@atoms";
import { IconArrowRight } from "@tabler/icons-react";

type Props = {
    course: CourseModel;
};

export const CourseCard = ({ course }: Props) => {
    return (
        <div className="w-[350px] lg:w-full bg-white h-fit pb-6 mx-auto relative ">
            <Image
                src={course.img}
                alt="course-img"
                className={`grayscale hover:grayscale-0 cursor-pointer  `}
            />

            {/* COURSE INFO */}
            <div
                className={`relative w-3/4 mx-auto flex flex-col justify-center items-center gap-6 py-10
                before:content-['Beginners'] before:w-3/4  before:absolute before:bg-white before:top-[-10%]
                before:font-bold before:text-[1rem] before:text-[#555] before:pt-3 before:pb-6 `}
            >
                {/* price */}
                <Text className="font-bold text-[3rem] ">
                    <span className="text-[#555] font-thin text-[2rem] ">$</span>
                    {`${course.price.toLocaleString()}`}
                    <span className="text-[#555] text-lg font-thin">p/m</span>
                </Text>

                {/* classes */}
                <div className="flex flex-col gap-4">
                    {course.classes.map((item, index) => (
                        <Text
                            key={index}
                            className="text-sm text-[#555]"
                        >
                            {item}
                        </Text>
                    ))}
                </div>
                <Button
                    animation
                    title="TAKE A TOUR"
                    type="danger"
                    postfix={
                        <IconArrowRight
                            className="w-8"
                            color="white"
                        />
                    }
                />
            </div>
        </div>
    );
};

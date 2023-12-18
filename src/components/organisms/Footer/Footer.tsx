import React from "react";
import { Footer_Logo } from "@assets";
import Image from "next/image";
import { Text, TextWithUnderLine } from "@atoms";
import {
    IconBrandFacebookFilled,
    IconBrandTwitterFilled,
    IconBrandPinterest,
    IconBrandYoutubeFilled,
} from "@tabler/icons-react";
type Props = {};

export const Footer = (props: Props) => {
    return (
        <div className="lg:w-5/6 sm:w-11/12 w-1/2 mx-auto  py-20 flex sm:flex-row gap-20 flex-col justify-center ">
            {/* genneral */}
            <div className="flex flex-col gap-6">
                <Image
                    src={Footer_Logo}
                    alt="logo "
                    className="w-[10rem]"
                />

                <Text className="text-xs leading-5">
                    Take your health and body to the next level with our comprehensive
                    program designed to help you reach your fitness goals.
                </Text>
                <div className="flex flex-row gap-4">
                    <IconBrandFacebookFilled className="w-10 p-3 bg-gray-200 hover:bg-red-400 cursor-pointer  rounded-full" />
                    <IconBrandTwitterFilled className="w-10 p-3 bg-gray-200 hover:bg-red-400 cursor-pointer rounded-full" />
                    <IconBrandPinterest className="w-10 p-3 bg-gray-200 hover:bg-red-400 cursor-pointer  rounded-full" />
                    <IconBrandYoutubeFilled className="w-10 p-3 bg-gray-200 hover:bg-red-400 cursor-pointer  rounded-full" />
                </div>
            </div>

            {/* classes */}
            <div className="flex flex-col gap-4 justify-center ">
                <TextWithUnderLine>Our Classes</TextWithUnderLine>

                <Text className="text-sm text-[#555] hover:text-red-400 hover:font-bold ">
                    Fitness Classes
                </Text>
                <Text className="text-sm text-[#555] hover:text-red-400 hover:font-bold ">
                    Aerobics Classes
                </Text>
                <Text className="text-sm text-[#555] hover:text-red-400 hover:font-bold ">
                    Power Yoga{" "}
                </Text>
                <Text className="text-sm text-[#555] hover:text-red-400 hover:font-bold ">
                    Learn Machines{" "}
                </Text>
                <Text className="text-sm text-[#555] hover:text-red-400 hover:font-bold ">
                    Full-body Strength{" "}
                </Text>
            </div>

            {/* working hours */}
            <div className=" flex flex-col gap-4 justify-center">
                <TextWithUnderLine> Working Hours</TextWithUnderLine>

                <Text className="text-sm text-[#555]  font-bold">Monday - Friday:</Text>
                <Text className="text-sm text-[#555] ">7:00am - 21:00pm</Text>
                <Text className="text-sm text-[#555]  font-bold">Saturday:</Text>
                <Text className="text-sm text-[#555] ">7:00am - 19:00pm</Text>
                <Text className="text-sm  text-[#555] font-bold">Sunday - Closed</Text>
            </div>
        </div>
    );
};

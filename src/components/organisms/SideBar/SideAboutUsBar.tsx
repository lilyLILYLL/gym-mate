import { Footer_Logo } from "@assets";
import { Text } from "@atoms";
import {
    IconX,
    IconMapPinFilled,
    IconPhoneFilled,
    IconMailFilled,
} from "@tabler/icons-react";
import { galleryImgs } from "@shared";
import Image from "next/image";
import React from "react";

type Props = {
    isOpen: boolean;
    toggleSideBar: (e?: any) => void;
};

export const SideAboutUsBar = (props: Props) => {
    const handleToggleSideBar = React.useCallback(() => {
        props.toggleSideBar();
    }, []);

    return (
        <div
            className={` ${
                props.isOpen ? "left-0" : "left-[-100%]"
            } fixed top-0 h-screen md:w-[400px] w-full bg-white  transition-all duration-500 ease-in-out py-8`}
        >
            <IconX
                onClick={handleToggleSideBar}
                className="text-red-500 cursor-pointer w-8 absolute right-[2rem] top-[2rem]"
            />

            <div className=" w-5/6 mx-auto flex flex-col justify-between h-full">
                <Image
                    src={Footer_Logo}
                    alt="logo"
                    className="w-[120px]"
                />
                {/* about us section */}
                <div className=" flex flex-col gap-4">
                    <Text className="font-bold text-xl">About Us</Text>
                    <Text className="text-sm leading-5 text-[#555]">
                        Find out who we are and what makes us unique. We are a
                        community-driven gym committed to providing personalized fitness
                        experiences for all levels of fitness enthusiasts in a welcoming
                        and supportive environment.
                    </Text>
                </div>
                {/* gallery section */}
                <div className="flex flex-col gap-4">
                    <Text className="font-bold text-xl">Gallery</Text>
                    <div className="grid grid-cols-3 grid-flow-row gap-2 w-[90%]">
                        {galleryImgs.slice(0, 6).map((item, index) => (
                            <Image
                                src={item}
                                alt="gallery-img"
                                key={index}
                                className="rounded-md"
                            />
                        ))}
                    </div>
                </div>
                {/* contact info section */}
                <div className="flex flex-col gap-4">
                    <Text className="font-bold text-xl">Contact Info</Text>
                    <div className="items-center flex flex-row gap-2 ">
                        <IconMapPinFilled className="inline w-4 text-red-500 " />
                        Level 4/227 Elizabeth St, Sydney
                    </div>

                    <div className="items-center flex flex-row gap-2 ">
                        <IconPhoneFilled className="inline w-4 text-red-500 " />
                        <Text>+123-678800090 </Text>
                    </div>

                    <div className="items-center flex flex-row gap-2 ">
                        <IconMailFilled className="inline w-4 text-red-500 " />
                        <Text> gymate@gymail.com </Text>
                    </div>
                </div>
                {/* social media section
                <div className="flex flex-col gap-4">
                    <Text className="font-bold text-xl">Follow Us</Text>
                    <div className="flex flex-row gap-4">
                        <IconBrandFacebookFilled className="w-14 text-white bg-red-500 rounded-full p-4 cursor-pointer" />
                        <IconBrandInstagram className="w-14 text-white bg-red-500 rounded-full p-4 cursor-pointer" />
                        <IconBrandTwitterFilled className="w-14 text-white bg-red-500 rounded-full p-4 cursor-pointer" />
                    </div>
                </div> */}
            </div>
        </div>
    );
};

import React from "react";
import { ContactForm } from "@organisms";
import { Header } from "@molecules";
import { Text, TextWithUnderLine } from "@atoms";
import {
    IconBrandFacebookFilled,
    IconBrandTwitterFilled,
    IconBrandPinterest,
    IconBrandYoutubeFilled,
} from "@tabler/icons-react";
type Props = {};

const Contact = (props: Props) => {
    return (
        <div className="h-fit pt-[280px] sm:pt-[500px] pb-36 shadow-lg shadow-slate-300">
            <Header title="Contact Us" />
            <div className=" flex flex-col-reverse lg:flex-row xl:w-3/4 w-5/6 mx-auto gap-20  items-center ">
                <div className="lg:w-1/2 sm:w-3/4 w-11/12 flex flex-col gap-16 my-auto lg:text-start text-center">
                    <Text className="font-bold text-[2rem]">
                        We are here for help you! To Shape Your Body.
                    </Text>
                    <Text className="text-[#555] text-base">
                        At Gymate, we are dedicated to helping you achieve the body of
                        your dreams. Our expert trainers and nutritionists will work with
                        you to create a personalized fitness and nutrition plan that helps
                        you reach your specific goals.
                    </Text>
                    <div className="grid sm:grid-cols-2 grid-cols-1 grid-flow-row  gap-10 w-5/6 mx-auto sm:w-full text-start">
                        <div className="h-auto flex flex-col gap-4">
                            <TextWithUnderLine>New York City, USA</TextWithUnderLine>
                            <Text className="text-[14px] text-[#555]">
                                85 Briston Mint Street, London, E1 8LG, USA
                            </Text>
                        </div>
                        <div className="h-auto flex flex-col gap-4">
                            <TextWithUnderLine>Opening Hours</TextWithUnderLine>
                            <Text className="text-[14px] text-[#555]">
                                Mon to Fri: 7:30 am — 1:00 am Mon to Fri: 7:30 am — 1:00
                                am
                            </Text>
                        </div>
                        <div className="h-auto flex flex-col gap-4">
                            <TextWithUnderLine>Information</TextWithUnderLine>
                            <Text className="text-[14px] text-[#555]">
                                +800-123-4567 gymat@gymail.com
                            </Text>
                        </div>
                        <div className="h-auto flex flex-col gap-4">
                            <TextWithUnderLine>Follow Us On</TextWithUnderLine>
                            <div className="flex flex-row gap-4">
                                <IconBrandFacebookFilled className="w-10 p-3 bg-gray-200 hover:bg-red-400 cursor-pointer  rounded-full" />
                                <IconBrandTwitterFilled className="w-10 p-3 bg-gray-200 hover:bg-red-400 cursor-pointer rounded-full" />
                                <IconBrandPinterest className="w-10 p-3 bg-gray-200 hover:bg-red-400 cursor-pointer  rounded-full" />
                                <IconBrandYoutubeFilled className="w-10 p-3 bg-gray-200 hover:bg-red-400 cursor-pointer  rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Conact Form */}
                <ContactForm conainerClassName="lg:w-1/2 sm:w-3/4 w-full " />
            </div>
        </div>
    );
};

export default Contact;

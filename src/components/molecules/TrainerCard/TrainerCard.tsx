import React from "react";
import { TrainerInfoModel } from "@shared";
import { TrannerBg } from "@assets";
import Image from "next/image";
import { Text } from "@atoms";
import {
    IconBrandFacebookFilled,
    IconBrandTwitterFilled,
    IconBrandInstagram,
    IconMail,
} from "@tabler/icons-react";
type Props = {
    trainer: TrainerInfoModel;
};

export const TrainerCard = ({ trainer }: Props) => {
    return (
        <div className=" w-[260px] sm:w-[300px] xl:w-[350px] relative flex flex-col items-center justify-around cursor-pointer">
            <Image
                src={TrannerBg}
                alt="trainner-bg"
            />
            <Image
                src={trainer.avatar}
                alt="trainner-avatar"
                className="absolute w-[110px] sm:w-[160px] xl:w-[200px] grayscale hover:grayscale-0"
            />

            {/* INFO */}
            <div
                className="absolute bottom-0  h-1/3 py-8 bg-white rounded-lg shadow-lg shadow-slate-300 flex flex-col justify-center gap-4
                    after:content-[''] after:w-1/6 after:bg-red-500 after:h-[3px] after:absolute after:bottom-0 after:left-[42%] after:hover:w-full
                    after:hover:left-0 after:transition-all duration-1000 ease-in-out"
            >
                <div className="w-3/4 mx-auto">
                    <Text className="font-bold text-[16px] lg:text-[20px]">
                        {trainer.full_name}
                    </Text>
                    <Text className="color-[#555] text-xs lg:text-sm">
                        {trainer.role}
                    </Text>
                </div>

                {/* SOCIAL MEDIA */}
                <div className="flex flex-row justify-center items-center gap-4 lg:gap-6 w-3/4 mx-auto ">
                    <IconBrandFacebookFilled
                        className="w-4"
                        color="#555"
                    />
                    <IconBrandTwitterFilled
                        className="w-4"
                        color="#555"
                    />
                    <IconBrandInstagram
                        className="w-4"
                        color="#555"
                    />
                    <IconMail
                        className="w-4"
                        color="#555"
                    />
                </div>
            </div>
        </div>
    );
};

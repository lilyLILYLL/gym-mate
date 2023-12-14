import React from "react";
import { ClassModel } from "@shared";
import Image from "next/image";
import { Text } from "@atoms";
import "@styles/Animation.css";

type Props = {
    type: "type1" | "type2";
    class: ClassModel;
};

export const ClassCard = (props: Props) => {
    return (
        <div className="class-card w-full h-full relative  cursor-pointer overflow-hidden ">
            <Image
                src={props.class.img[0]}
                alt="img"
                className="class-img w-full h-full object-cover  absolute grayscale object-center"
            />

            <div className="hover:shadow-transparent shadow-[inset_2px_2px_8px_160px_rgba(0,0,0,0.6)] w-full h-full absolute "></div>
            <div className="class-mini-img   sm:h-[70px] sm:w-[160px] h-[50px] w-[130px] absolute bg-[hsla(0,0%,100%,.3)] rounded-[40px] rotate-[35deg] left-[-70px] sm:top-[20%] top-[10%]">
                <Image
                    src={props.class.img[1]}
                    alt="img"
                    className="class-mini-img-white sm:w-10 sm:h-10 w-8 h-8 object-contain  absolute sm:right-4 sm:bottom-4 bottom-2 right-2 rotate-[-35deg]"
                />
                <Image
                    src={props.class.img[2]}
                    alt="img"
                    className="class-mini-img-red sm:w-10 sm:h-10 w-8 h-8 object-contain hidden  absolute sm:right-4 sm:bottom-4 bottom-2 right-2 rotate-[-35deg]"
                />
            </div>

            {/* info */}
            <div className="z-10 absolute grayscale-0  w-fit bottom-4 text-start left-6 flex flex-col gap-2">
                <Text className="text-white text-2xl font-bold">{props.class.name}</Text>
                <div className="bg-red-600 w-fit text-white p-1 px-2">
                    <Text>{props.class.time}</Text>
                </div>
            </div>
        </div>
    );
};

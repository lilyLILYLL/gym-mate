import React from "react";
import { ClassModel } from "@shared";
import Image from "next/image";
import { AnimationButton, Text, TextWithUnderLine } from "@atoms";
import "@styles/Animation.css";
import { IconUserCircle, IconClockHour4 } from "@tabler/icons-react";

type Props = {
    type: "type1" | "type2";
    class: ClassModel;
};

export const ClassCard = (props: Props) => {
    return (
        <div className=" class-card w-full h-full relative  cursor-pointer  overflow-hidden ">
            {props.type === "type1" ? (
                <>
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
                        <Text className="text-white text-2xl font-bold">
                            {props.class.name}
                        </Text>
                        <div className="bg-red-600 w-fit text-white p-1 px-2">
                            <Text>{props.class.time[0]}</Text>
                        </div>
                    </div>
                </>
            ) : (
                <div className="relative md:w-full w-11/12 mx-auto h-[450px] rounded-[1rem] overflow-hidden">
                    <Image
                        src={props.class.img[0]}
                        alt="img"
                        className="w-full h-full object-cover  absolute  object-center  shadow-xl shadow-slate-300 "
                    />
                    {/* shadow-box */}
                    <div className=" shadow-[inset_2px_2px_8px_200px_rgba(0,0,0,0.4)] w-full h-full absolute "></div>
                    <div className="flex flex-col gap-4 absolute z-20 top-[50%] left-[10%]">
                        <TextWithUnderLine textClassName="text-white  text-bold">
                            {props.class.name}
                        </TextWithUnderLine>
                        <div className="flex flex-col gap-2">
                            <Text className="text-white  flex flex-row gap-2 font-medium">
                                <IconUserCircle className="w-6 inline" />
                                {props.class.trainer}
                            </Text>

                            <Text className="text-white flex flex-row gap-2 font-medium">
                                <IconClockHour4 className="w-6 inline" />
                                {props.class.time[0]}
                            </Text>
                        </div>
                        <AnimationButton
                            title="JOIN NOW"
                            backgroundColor="white"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

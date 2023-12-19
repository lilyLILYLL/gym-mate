import React from "react";
import { ClassModel } from "@shared";
import { Text } from "@atoms";
import { Button } from "@atoms";
import Link from "next/link";

type Props = {
    classInfo: ClassModel;
};

export const HorizonalClassCard = ({ classInfo }: Props) => {
    return (
        <div className="bg-[#f2f2f2] w-full p-10 py-8 flex md:flex-row flex-col gap-4 mx-auto justify-center items-center">
            <div className="flex flex-col gap-2 md:w-1/5 text-center md:text-start">
                <Text>Class</Text>
                <Text className="font-bold text-lg">{classInfo.name}</Text>
            </div>

            <div className="flex flex-col gap-2 md:w-1/4 text-center">
                <Text>Time</Text>
                <Text className="font-bold text-lg">9:00am - 10:00am</Text>
            </div>
            <div className="flex flex-col gap-2 md:w-1/4 text-center ">
                <Text>Trainer</Text>
                <Text className="font-bold text-lg">{classInfo.trainer}</Text>
            </div>

            <div className="md:w-1/4">
                <Link href={"/contact"}>
                    <Button
                        title="Join now"
                        type="primary"
                        containerClassName="w-1/2 mx-auto "
                    />
                </Link>
            </div>
        </div>
    );
};

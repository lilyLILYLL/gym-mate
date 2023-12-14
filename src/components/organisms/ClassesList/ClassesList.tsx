import React from "react";
import { CLASSES } from "@shared";
import { ClassCard } from "../../molecules/ClassCard";

type Props = {};

export const ClassesList = (props: Props) => {
    return (
        <div className="w-full flex flex-col gap-6 md:grid md:grid-cols-4 md:grid-rows-2 md:h-[550px] md:grid-flow-row md:gap-3 ">
            {CLASSES.map((item, index) => (
                <div
                    key={index}
                    className={` w-full h-[200px] sm:h-[300px] md:h-auto ${
                        index === 0 || index === CLASSES.length - 1 ? "md:col-span-2" : ""
                    }`}
                >
                    <ClassCard
                        type="type1"
                        class={item}
                    />
                </div>
            ))}
        </div>
    );
};

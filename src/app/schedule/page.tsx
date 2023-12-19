"use client";
import React from "react";
import { CLASSES, dates, ClassModel } from "@shared";
import { HorizonalClassCard, Header } from "@molecules";
import { Button } from "@atoms";

type Props = {};

const Schedule = (props: Props) => {
    const [chosenDate, setChosenDate] = React.useState("Monday");
    const [classes, setClassess] = React.useState<ClassModel[]>([]);

    React.useEffect(() => {
        setClassess(
            CLASSES.filter((item) =>
                item.time.filter((time) => time.includes(chosenDate))
            )
        );
    }, [chosenDate]);

    return (
        <div className="pt-[280px] sm:pt-[500px] pb-[200px] shadow-lg shadow-slate-300 ">
            <Header title="Schedule by Day" />

            {/* contents */}
            <div className="lg:w-3/4 w-5/6 mx-auto flex flex-col gap-10 ">
                {/* dates */}
                <div className="flex flex-box justify-center lg:gap-10  flex-wrap gap-4">
                    {dates.map((item, index) => (
                        <Button
                            title={item}
                            key={index}
                            type="secondary"
                            containerClassName={`w-[130px] `}
                            selected={item == chosenDate}
                            onClick={() => setChosenDate(item)}
                        />
                    ))}
                </div>

                {/* classes */}
                <div className="flex flex-col gap-6">
                    {classes.map((item, index) => (
                        <HorizonalClassCard
                            key={index}
                            classInfo={item}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Schedule;

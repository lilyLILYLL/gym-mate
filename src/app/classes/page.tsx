import React from "react";
import { ClassCard, Header } from "@molecules";
import { CLASSES } from "@shared";

type Props = {};

const Classes = (props: Props) => {
    return (
        <div className="pt-[290px] sm:pt-[500px] pb-36 h-fit shadow-lg shadow-slate-300">
            <Header title="Classes" />

            {/* classes */}
            <div className="xl:w-5/6 w-11/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-flow-row  mx-auto gap-6">
                {CLASSES.map((item, index) => (
                    <ClassCard
                        key={index}
                        class={item}
                        type={"type2"}
                    />
                ))}
            </div>

            {/* PRICING SECTION */}
        </div>
    );
};

export default Classes;

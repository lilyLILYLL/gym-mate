import React from "react";
import { WHAT_WE_PROVIDE } from "@shared";
import { BenefitCard } from "@molecules";
type Props = {};

export const BenefitList = (props: Props) => {
    return (
        <div className="lg:absolute w-5/6 grid lg:grid-cols-3 gap-10 grid-cols-1 top-[-5rem] ">
            {WHAT_WE_PROVIDE.map((item, index) => (
                <BenefitCard
                    key={index}
                    benefit={item}
                />
            ))}
        </div>
    );
};

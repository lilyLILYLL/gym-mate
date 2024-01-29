import React from "react";
import { Header, BannerInfo, CourseCard } from "@molecules";
import { BannerTemplate } from "@templates";
import { PricingSectionBgImage } from "@atoms";

import { GymPlanType } from "@shared";

type Props = {};

const getGymPlans = async () => {
    const res = await fetch("http://localhost:3005/plans", { cache: "no-cache" });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
};

const Pricing = async (props: Props) => {
    const gymPlans = (await getGymPlans()) as GymPlanType[];
    console.log(gymPlans);
    return (
        <div className="pt-[220px] sm:pt-[380px] ">
            <Header title="Pricing" />

            {/* PRICING SECTION */}
            <BannerTemplate
                col
                bgImg={<PricingSectionBgImage />}
            >
                <BannerInfo
                    title="PRICING CHART"
                    header="Exclusive Pricing Plan"
                    description="Gymat an unknown printer took a galley of type and scrambled make a type specimen book."
                    type="secondary-black"
                    containerClassName="justify-center items-center "
                />
                <div className="flex lg:flex-row flex-col gap-12 h-fit">
                    {gymPlans.map((item, index) => (
                        <CourseCard
                            key={index}
                            plan={item}
                        />
                    ))}
                </div>
            </BannerTemplate>
        </div>
    );
};

export default Pricing;

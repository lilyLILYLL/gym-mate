import React from "react";
import { Header, BannerInfo, CourseCard } from "@molecules";
import { BannerTemplate } from "@templates";
import { PricingSectionBgImage } from "@atoms";

import { COURSES } from "@shared";

type Props = {};

const Pricing = (props: Props) => {
    return (
        <div className="pt-[380px] ">
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
                <div className="flex lg:flex-row flex-col gap-12">
                    {COURSES.map((item, index) => (
                        <CourseCard
                            key={index}
                            course={item}
                        />
                    ))}
                </div>
            </BannerTemplate>
        </div>
    );
};

export default Pricing;

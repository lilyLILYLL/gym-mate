import React from "react";
import {
    Text,
    AnimationButton,
    GirlRunningImage,
    ChooseUsImage,
    PricingSectionBgImage,
} from "@atoms";
import {
    IconBrandFacebook,
    IconBrandTwitter,
    IconBrandLinktree,
} from "@tabler/icons-react";
import { BannerTemplate } from "@templates";
import { BannerInfo, CourseCard, TrainerCard, AdvertisedBar } from "@molecules";
import {
    COURSES,
    WHO_WE_ARE_BANNER_SAMPLES,
    WHY_CHOOSE_US_SAMPLES,
    trainers,
} from "@shared";
import { BenefitList, ClassesList } from "@organisms";

type Props = {};

const Home = (props: Props) => {
    return (
        <div>
            {/* HOME HEADER */}
            <BannerTemplate bgImg="https://i.ibb.co/5s6xdrt/hero-img.jpg">
                <BannerInfo
                    title="FIND YOUR ENERGY"
                    header="  MAKE YOUR BODY"
                    description="FIT & PERFECT"
                    type="primary"
                    containerClassName="absolute lg:left-[110%] self-center top-[200px]   "
                    button={
                        <AnimationButton
                            title="OUR CLASSES"
                            backgroundColor="white"
                            to="/classes"
                        />
                    }
                />
            </BannerTemplate>

            {/* WHO WE ARE SECTION */}
            <BannerTemplate
                bgImg="https://i.ibb.co/GWzzyvv/background.jpg"
                containerClassName="lg:pt-[300px]"
            >
                <BenefitList />
                <BannerInfo
                    title="WHO WE ARE"
                    header=" Take Your Health And Body To Next Level"
                    description="Take your health and body to the next level with our comprehensive program designed to 
                help you reach your fitness goals."
                    samples={WHO_WE_ARE_BANNER_SAMPLES}
                    type="secondary-black"
                    button={
                        <AnimationButton
                            title="TAKE A TOUR"
                            backgroundColor="gray"
                            to="/classes"
                        />
                    }
                />
                <GirlRunningImage />
            </BannerTemplate>

            {/* CLASSES SECITON */}
            <BannerTemplate
                col
                containerClassName="pb-36"
            >
                <BannerInfo
                    title="OUR FEATURED CLASSES"
                    header="We Are Offering Best Flexible Classes"
                    type="secondary-black"
                />
                <ClassesList />
            </BannerTemplate>

            {/* WHY CHOOSE US SECTION */}
            <BannerTemplate
                bgImg="https://i.ibb.co/ZNn1YJj/choose-bg.jpg"
                containerClassName="sm:pt-[200px]"
            >
                <AdvertisedBar />

                <BannerInfo
                    title="WHY CHOOSE US"
                    header=" We Can Give A Shape Of Your Body Here!"
                    description="At Gymate, we are dedicated to helping you achieve the body of 
                        your dreams. Our expert trainers and nutritionists will work with you to create 
                        a personalized fitness and nutrition plan that helps you reach your specific goals."
                    samples={WHY_CHOOSE_US_SAMPLES}
                    containerClassName="order-last"
                    type="secondary-white"
                    button={
                        <AnimationButton
                            title="TAKE A TOUR"
                            backgroundColor="gray"
                            to="/classes"
                        />
                    }
                />
                <ChooseUsImage />
            </BannerTemplate>

            {/* GYM TRAINERS SECTION */}
            <BannerTemplate
                col
                bgImg="https://i.ibb.co/bbsvnMH/dot-bg.png"
            >
                <BannerInfo
                    title="GYM TRAINERS"
                    header="Team Of Expert Coaches"
                    description="Expert team of coaches helps you succeed in any goal, personalized guidance and motivation provided!"
                    type="secondary-black"
                    containerClassName="justify-center items-center "
                />
                <div className="flex flex-row flex-wrap justify-center items-center gap-14">
                    {trainers.map((item, index) => (
                        <TrainerCard
                            key={index}
                            trainer={item}
                        />
                    ))}
                </div>
            </BannerTemplate>

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

            {/* CONTACT INFO */}
            <div className="w-fit sm:flex flex-col justify-center items-center gap-4 absolute right-[5%] top-[40%] hidden sm:visible">
                <Text className="text-white font-bold tracking-wider text-lg text-center mb-6 rotate-90 ">
                    SHARE
                </Text>
                <div className="bg-red-700 h-[50px] w-[4px] "></div>
                <IconBrandFacebook className="w-8 text-white hover:text-red-500  curs" />
                <IconBrandTwitter className="w-8 text-white hover:text-red-500  curs" />
                <IconBrandLinktree className="w-8 text-white hover:text-red-500  curs" />
            </div>
        </div>
    );
};

export default Home;

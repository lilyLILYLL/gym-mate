import React from "react";
import {
    Button,
    Text,
    TextWithBg,
    AnimationButton,
    GirlRunningImage,
    ChooseUsImage,
} from "@atoms";
import {
    IconArrowRight,
    IconBrandFacebook,
    IconBrandTwitter,
    IconBrandLinktree,
} from "@tabler/icons-react";
import Image from "next/image";
import { BannerTemplate } from "@templates";
import { BannerInfo } from "@molecules";
import { WHO_WE_ARE_BANNER_SAMPLES, WHY_CHOOSE_US_SAMPLES } from "@shared";
type Props = {};

const Home = (props: Props) => {
    return (
        <div>
            <BannerTemplate
                bgImg="https://i.ibb.co/5s6xdrt/hero-img.jpg"
                bannerInfo={
                    <BannerInfo
                        title="FIND YOUR ENERGY"
                        header="  MAKE YOUR BODY"
                        description="FIT & PERFECT"
                        type="primary"
                    />
                }
            />

            <BannerTemplate
                bannerInfo={
                    <BannerInfo
                        title="WHO WE ARE"
                        header=" Take Your Health And Body To Next Level"
                        description="Take your health and body to the next level with our comprehensive program designed to 
                help you reach your fitness goals."
                        samples={WHO_WE_ARE_BANNER_SAMPLES}
                        type="secondary-black"
                    />
                }
                bgImg="https://i.ibb.co/GWzzyvv/background.jpg"
                bannerImg={<GirlRunningImage />}
            />

            <BannerTemplate
                bannerInfo={
                    <BannerInfo
                        title="WHY CHOOSE US"
                        header=" We Can Give A Shape Of Your Body Here!"
                        description="At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals."
                        samples={WHY_CHOOSE_US_SAMPLES}
                        containerClassName="order-last"
                        type="secondary-white"
                    />
                }
                bgImg="https://i.ibb.co/ZNn1YJj/choose-bg.jpg"
                bannerImg={<ChooseUsImage />}
            />

            {/* CONTACT INFO
            <div className="w-fit flex flex-col justify-center items-center gap-3 absolute right-14 top-[40%]">
                <Text className="text-white font-bold tracking-wider text-lg text-center mb-6 rotate-90 ">
                    SHARE
                </Text>
                <div className="bg-red-700 h-[50px] w-[4px] "></div>
                <IconBrandFacebook
                    fill="white"
                    className="w-8"
                />
                <IconBrandTwitter
                    fill="white"
                    className="w-8"
                />
                <IconBrandLinktree
                    className="w-8 "
                    fill="white"
                />
            </div> */}
        </div>
    );
};

export default Home;

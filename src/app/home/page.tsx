import React from "react";
import { Button, Text, TextWithBg, AnimationButton } from "@atoms";
import {
    IconArrowRight,
    IconBrandFacebook,
    IconBrandTwitter,
    IconBrandLinktree,
} from "@tabler/icons-react";
import { BannerTemplate } from "../../components/templates/BannerTemplate";
type Props = {};

const Home = (props: Props) => {
    return (
        <div>
            <BannerTemplate
                bgImg="https://i.ibb.co/5s6xdrt/hero-img.jpg"
                title="FIND YOUR ENERGY"
                header="  MAKE YOUR BODY"
                description="FIT & PERFECT"
                primary
            />

            <BannerTemplate
                containerClassName="w-5/6 mx-auto"
                bgImg="https://i.ibb.co/GWzzyvv/background.jpg"
                title="WHO WE ARE"
                header=" Take Your Health And Body To Next Level"
                description="Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals."
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

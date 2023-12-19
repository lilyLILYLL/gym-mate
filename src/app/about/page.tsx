import React from "react";
import { Header, BannerInfo } from "@molecules";
import { BannerTemplate } from "@templates";
import { AnimationButton, GirlRunningImage } from "@atoms";

type Props = {};

const About = (props: Props) => {
    return (
        <div className="h-fit pt-[220px] md:pt-36 ">
            <Header title="About Us" />

            <BannerTemplate
                bgImg="https://i.ibb.co/GWzzyvv/background.jpg"
                containerClassName="sm:pt-[220px] w-5/6 mx-auto"
            >
                <BannerInfo
                    title="WHO WE ARE"
                    header="We Will Give You Strength and Health"
                    description="At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals."
                    type="secondary-black"
                    button={
                        <AnimationButton
                            title="CONTACT US"
                            backgroundColor="red"
                            to="/contact"
                        />
                    }
                />
                <GirlRunningImage />
            </BannerTemplate>
        </div>
    );
};

export default About;

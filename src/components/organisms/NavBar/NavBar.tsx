import React from "react";
import { Logo } from "@assets";
import Image from "next/image";
import { LinkText } from "@atoms";
import { SCREENS } from "@shared";
import { Button } from "@atoms";
import {
    IconUserCircle,
    IconAlignBoxLeftMiddle,
    IconPlus,
    IconMenu2,
} from "@tabler/icons-react";
import Link from "next/link";
import "src/app/globals.css";
type Props = {};

export const NavBar = (props: Props) => {
    return (
        <div className=" bg-black py-5 px-6 flex flex-row  justify-between items-center h-fit fixed top-0 z-50">
            {/* LOGO  */}
            <Link
                href="/"
                className="w-[10rem] "
            >
                <Image
                    src={Logo}
                    alt="logo"
                />
            </Link>

            {/* LINKS */}
            <div className="xl:flex flex-row w-1/2 mx-auto hidden xl:visible">
                {SCREENS.map((item, index) => (
                    <LinkText
                        to={item}
                        label={item}
                        key={index}
                    />
                ))}
            </div>

            <div className="w-fit flex flex-box  justify-end items-center  gap-x-4 ">
                {/* Menu icon */}
                <IconMenu2
                    className="w-[2rem]  visible xl:hidden cursor-pointer"
                    color="white"
                />
                {/* USER ICON */}
                <Link
                    href={"/"}
                    className="w-[2rem] hidden sm:block"
                >
                    <IconUserCircle
                        color="white"
                        stroke={2}
                    />
                </Link>

                {/* SIDE BAR TOGGLE ICON */}
                <Link
                    href={"/"}
                    className="w-[2rem] hidden sm:block"
                >
                    <IconAlignBoxLeftMiddle
                        color="white"
                        stroke={2}
                    />
                </Link>

                {/* JOIN CLASS BUTTON */}
                <Link
                    href={"/contact"}
                    className="w-fit h-fit"
                >
                    <Button
                        prefix={
                            <div className="bg-red-700 w-8 p-[0.5rem] rounded-sm m-[0.1rem] icon-spin pr-2 ">
                                <IconPlus />
                            </div>
                        }
                        type="primary"
                        title="JOIN CLASS NOW"
                        containerClassName="hidden md:inline-flex "
                    />
                </Link>
            </div>
        </div>
    );
};

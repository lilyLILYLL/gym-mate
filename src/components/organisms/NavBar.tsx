import React from "react";
import { Logo } from "../../assets";
import Image from "next/image";
import { LinkText } from "@atoms";
import { SCREENS } from "@shared";
import { Button } from "@atoms";
import { IconUserCircle, IconAlignBoxLeftMiddle, IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import "src/app/globals.css";
type Props = {};

export const NavBar = (props: Props) => {
    return (
        <div className=" bg-black py-5 px-6 flex flex-row  justify-around items-center h-fit fixed top-0">
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
            <div className="flex flex-row w-1/2 mx-auto ">
                {SCREENS.map((item, index) => (
                    <LinkText
                        to={item}
                        label={item}
                        key={index}
                    />
                ))}
            </div>

            <div className="flex flex-box gap-4 items-center w-fit">
                {/* USER ICON */}
                <Link
                    href={"/"}
                    className="w-[2.5rem]"
                >
                    <IconUserCircle
                        color="white"
                        stroke={2}
                    />
                </Link>

                {/* SIDE BAR TOGGLE ICON */}
                <Link
                    href={"/"}
                    className="w-[2.5rem]"
                >
                    <IconAlignBoxLeftMiddle
                        color="white"
                        stroke={2}
                    />
                </Link>

                {/* JOIN CLASS BUTTON */}
                <Link href={"/contact"}>
                    <Button
                        prefix={
                            <div className="bg-red-700 w-10 p-[0.5rem] rounded-sm m-[0.1rem] icon-spin">
                                <IconPlus />
                            </div>
                        }
                        type="primary"
                        title="JOIN CLASS NOW"
                    />
                </Link>
            </div>
        </div>
    );
};

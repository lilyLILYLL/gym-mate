"use client";
import React from "react";
import { Logo } from "@assets";
import Image from "next/image";
import { LinkText, UserIcon } from "@atoms";
import { SCREENS } from "@shared";
import { Button } from "@atoms";

import Link from "next/link";
import "src/app/globals.css";
import { SideAboutUsBar, SideNavBar } from "../SideBar";
import {
    IconUserCircle,
    IconAlignBoxLeftMiddle,
    IconPlus,
    IconMenu2,
} from "@tabler/icons-react";
import {
    saveMe,
    useAppDispatch,
    useAppSelector,
    useGetMeQuery,
    useLazyGetMeQuery,
} from "@redux";
type Props = {};

export const NavBar = (props: Props) => {
    // Side Bar States
    const [isSideNavBarOpen, setIsSideNavBarOpen] = React.useState(false);
    const [isContactUsSideBarOpen, setIsContactUsSideBarOpen] = React.useState(false);

    // Redux hooks
    const dispatch = useAppDispatch();
    const { token, logedIn } = useAppSelector((state) => state.user);

    // get token
    const [getMe, getMeResult] = useLazyGetMeQuery({});
    console.log(useAppSelector((state) => state.user));

    // Handle Get Current User whenever token changes
    React.useEffect(() => {
        if (!token) return;

        getMe(token);
    }, [token]);

    // Handle getMe() request result
    React.useEffect(() => {
        if (getMeResult.isFetching) return;

        if (getMeResult.isError) {
            console.log(getMeResult.error);
            alert(getMeResult.error);
        }

        if (getMeResult.isSuccess && getMeResult.data) {
            dispatch(saveMe(getMeResult.data));
            return;
        }
    }, [getMeResult]);

    // handle toggle side bar
    const handleToggleSideNavBar = () => setIsSideNavBarOpen((prev) => !prev);

    // handle toggle ContactUs side bar
    const handleToggleContactUsSideBar = () => setIsContactUsSideBarOpen((prev) => !prev);

    return (
        <div className=" bg-black py-5 px-6 flex flex-row  justify-between items-center h-fit fixed top-0 z-50">
            {/* nav side bar */}
            <SideNavBar
                isOpen={isSideNavBarOpen}
                toggleSideBar={handleToggleSideNavBar}
            />

            {/* about us sidebar */}
            <SideAboutUsBar
                isOpen={isContactUsSideBarOpen}
                toggleSideBar={handleToggleContactUsSideBar}
            />

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
            <div className="xl:flex flex-row w-1/3 mx-auto hidden xl:visible">
                {SCREENS.map((item, index) => (
                    <LinkText
                        to={item}
                        label={item}
                        key={index}
                    />
                ))}
            </div>

            <div className="w-fit flex flex-box  justify-end items-center  gap-x-4 ">
                {/* sidebar icon */}
                <IconMenu2
                    className="w-[2rem]  visible xl:hidden cursor-pointer hover:text-red-500 text-white"
                    onClick={handleToggleSideNavBar}
                />
                {/* USER ICON */}
                <UserIcon />

                {/* contact us side bar TOGGLE ICON */}

                <IconAlignBoxLeftMiddle
                    stroke={2}
                    onClick={handleToggleContactUsSideBar}
                    className="w-[2rem] hidden sm:block cursor-pointer  hover:text-red-500 text-white"
                />

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
                        type="spin"
                        title="JOIN CLASS NOW"
                        containerClassName="hidden md:inline-flex "
                    />
                </Link>
            </div>
        </div>
    );
};

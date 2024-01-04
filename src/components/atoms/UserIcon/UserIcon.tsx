"use client";
import React from "react";
import Link from "next/link";
import { IconUserCircle } from "@tabler/icons-react";
import { useAppSelector } from "@redux";
import { Text } from "../Text";
import "@styles/Animation.css";
export const UserIcon = () => {
    const { username, logedIn, email } = useAppSelector((state) => state.user);
    return (
        <div
            className={`user-icon  w-[2rem] hidden sm:block cursor-pointer  hover:text-red-500 text-white relative
           `}
        >
            <IconUserCircle stroke={2} />
            <div className="h-4 absolute  w-[200px] left-[-100%]"></div>
            <div className="user-icon-hover-box bg-slate-300 absolute w-[200px] h-fit left-[-100%] text-black p-2 opacity-0 mt-4 rounded-lg">
                {logedIn ? (
                    <div className="text-center">
                        <Text className="font-bold">{username}</Text>
                        <Text>{email}</Text>
                    </div>
                ) : (
                    <div className="flex flex-row gap-1">
                        <Link
                            href={"/login"}
                            className="hover:underline text-center hover:text-red-700"
                        >
                            Login
                        </Link>

                        <span className="w-2">/</span>

                        <Link
                            href={"/signup"}
                            className="hover:underline text-center hover:text-red-700"
                        >
                            Sign Up
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

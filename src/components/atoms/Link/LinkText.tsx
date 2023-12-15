"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    label: string;
    to: string;
    textClassName?: string;
    onClick?: (e?: any) => void;
};

export const LinkText = ({ label, to, textClassName, onClick }: Props) => {
    const pathanme = usePathname();

    return (
        <Link
            onClick={onClick}
            href={to}
            className={`${
                pathanme === `/${label}`
                    ? "text-red-400"
                    : ` ${textClassName || "text-white"}`
            }  capitalize text-sm cursor-pointer font-semibold text-center p-1 hover:text-red-400`}
        >
            {label}
        </Link>
    );
};

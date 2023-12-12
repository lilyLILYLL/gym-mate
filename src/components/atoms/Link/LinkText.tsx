"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    label: string;
    to: string;
};

export const LinkText = ({ label, to }: Props) => {
    const pathanme = usePathname();

    return (
        <Link
            href={to}
            className={`${
                pathanme === `/${label}` ? "text-red-400" : "text-white"
            } capitalize text-sm cursor-pointer font-semibold text-center p-1 hover:text-red-400`}
        >
            {label}
        </Link>
    );
};

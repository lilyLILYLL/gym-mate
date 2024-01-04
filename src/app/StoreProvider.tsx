"use client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@redux";

export const StoreProvider = ({ children }: { children: ReactNode[] }) => {
    return <Provider store={store}>{children}</Provider>;
};

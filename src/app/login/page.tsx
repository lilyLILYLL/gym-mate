import React from "react";
import { Header } from "@molecules";
import { LoginForm } from "@organisms";
type Props = {};

const LogIn = (props: Props) => {
    return (
        <div
            className="  pt-[500px] pb-[200px] h-fit"
            style={{ backgroundImage: "url(https://i.ibb.co/GWzzyvv/background.jpg)" }}
        >
            <Header title="Log In" />
            <LoginForm />
        </div>
    );
};

export default LogIn;

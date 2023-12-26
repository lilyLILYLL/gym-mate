import React from "react";
import { Header } from "@molecules";
import { AuthenticationForm } from "@organisms";
type Props = {};

const SignUp = (props: Props) => {
    return (
        <div
            className="  pt-[500px] pb-[200px] h-fit"
            style={{ backgroundImage: "url(https://i.ibb.co/GWzzyvv/background.jpg)" }}
        >
            <Header title="SignUp" />
            <AuthenticationForm type="signup" />
        </div>
    );
};

export default SignUp;

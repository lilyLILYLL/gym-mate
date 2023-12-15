import React from "react";
import { IconX } from "@tabler/icons-react";
import { LinkText } from "@atoms";
import { SCREENS } from "@shared";
type Props = {
    isOpen: boolean;
    toggleSideBar: (e?: any) => void;
};

export const SideNavBar = (props: Props) => {
    const handleToggleSideBar = React.useCallback(() => {
        props.toggleSideBar();
    }, []);
    return (
        <div
            className={`${
                props.isOpen ? "left-0" : "left-[-100%]"
            } fixed top-0 h-screen md:w-[400px] w-full bg-white  transition-all duration-500 ease-in-out py-8`}
        >
            <IconX
                onClick={handleToggleSideBar}
                className="text-red-500 cursor-pointer w-8 absolute right-[2rem] top-[2rem]"
            />
            <div className="flex flex-col gap-4 justify-center h-5/6">
                {SCREENS.map((item, index) => (
                    <LinkText
                        to={item}
                        label={item}
                        key={index}
                        textClassName="text-black text-[40px]"
                        onClick={handleToggleSideBar}
                    />
                ))}
            </div>
        </div>
    );
};

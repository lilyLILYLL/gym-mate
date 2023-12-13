import React from "react";
import { Gallery1, Gallery2, Gallery3, Gallery4, Gallery5 } from "@assets";
import Image from "next/image";

type Props = {};

export const GallerySectionImage = (props: Props) => {
    return (
        <div className="w-full grid grid-cols-4 grid-rows-3 gap-1 h-[600px] grid-flow-row p-4">
            <div className="col-span-2 row-span-2  h-auto">
                <Image
                    src={Gallery1}
                    alt="gallery"
                    className="w-full h-full object-cover  "
                />
            </div>
            <div className="col-span-2 row-span-1   h-auto ">
                <Image
                    src={Gallery2}
                    alt="gallery"
                    className="w-full h-full object-cover  "
                />
            </div>
            <div className="col-span-2 row-span-2  h-auto">
                <Image
                    src={Gallery3}
                    alt="gallery"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="col-span-1 row-span-1  h-auto">
                <Image
                    src={Gallery4}
                    alt="gallery"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="col-span-1 row-span-1  h-auto">
                <Image
                    src={Gallery5}
                    alt="gallery"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    );
};

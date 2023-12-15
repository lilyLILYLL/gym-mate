import React from "react";
import { Header } from "@molecules";
import { galleryImgs } from "@shared";
import Image from "next/image";

type Props = {};

const Gallery = (props: Props) => {
    return (
        <div className="h-fit pt-36 shadow-lg shadow-slate-300">
            <Header title="Gallery" />
            <div className="w-3/4 mx-auto grid grid-cols-3 grid-flow-row pt-[330px] pb-[150px] gap-4">
                {galleryImgs.map((item, index) => (
                    <div key={index}>
                        <Image
                            src={item}
                            alt="gallery_img"
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;

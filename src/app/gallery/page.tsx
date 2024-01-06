"use client";
import React from "react";
import { Header } from "@molecules";
import Image from "next/image";
import { useLazyGetGalleryImagesQuery } from "@redux";
import { DEFAULT_PAGE_SIZE } from "@shared";
import { Button } from "@atoms";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

type Props = {};

const Gallery = (props: Props) => {
    const [getGalleryImages, getGalleryImagesResult] = useLazyGetGalleryImagesQuery();
    const [galleryImgs, setGalleryImgs] = React.useState([]);
    const [page, setPage] = React.useState(1);

    const onFetching = (page: number) =>
        getGalleryImages({ page, pageSize: DEFAULT_PAGE_SIZE });

    // Fetching for the first time
    React.useEffect(() => {
        onFetching(page);
    }, [page]);

    // Handle Fetching side effects
    React.useEffect(() => {
        if (getGalleryImagesResult.isFetching) return;

        if (getGalleryImagesResult.isError) {
            console.log(getGalleryImagesResult.error);
            return;
        }

        if (getGalleryImagesResult.isSuccess && getGalleryImagesResult.data) {
            console.log(getGalleryImagesResult.data);
            setGalleryImgs(getGalleryImagesResult.data);
            return;
        }
    }, [getGalleryImagesResult]);

    return (
        <div className="h-fit pt-36 shadow-lg shadow-slate-300 pb-[100px]">
            {/* HEADER */}
            <Header title="Gallery" />

            {/* IMAGES GRID LAYOUT */}
            <div className="w-3/4 sm:w-3/4 mx-auto grid md:grid-cols-3 sm:grid-cols-2  grid-flow-row  pt-[120px] sm:pt-[330px] pb-[80px] gap-6">
                {/* SKELETON */}
                {getGalleryImagesResult.isFetching ||
                    (!galleryImgs.length &&
                        Array(DEFAULT_PAGE_SIZE)
                            .fill(null)
                            .map((item, index) => (
                                <div
                                    key={index}
                                    className="w-auto h-[300px] animate-pulse bg-gray-300 rounded-lg"
                                ></div>
                            )))}

                {!getGalleryImagesResult.isFetching &&
                    galleryImgs.map((item, index) => (
                        <div
                            key={index}
                            className="w-auto rounded-lg"
                        >
                            <Image
                                src={item}
                                alt="gallery_img"
                                className="object-cover rounded-lg"
                                width={200}
                                height={200}
                            />
                        </div>
                    ))}
            </div>

            {/* PAGE NUMBER */}
            <div className="flex flex-row w-fit mx-auto gap-6 justify-center items-center">
                <IconArrowLeft
                    className={`p-2 h-11 rounded-lg border cursor-pointer ${
                        page === 1 ? "bg-gray-200 text-gray-400" : ""
                    } `}
                    onClick={() => {
                        if (page > 1) setPage(page - 1);
                    }}
                />

                {Array(3)
                    .fill(0)
                    .map((item, index) => (
                        <Button
                            key={index}
                            title={(index + 1).toString()}
                            type="number"
                            containerClassName={`${
                                index + 1 === page ? "bg-red-600 text-white" : ""
                            }`}
                            onClick={() => setPage(index + 1)}
                        />
                    ))}

                <IconArrowRight
                    className={`p-2 h-11 rounded-lg border cursor-pointer ${
                        page === 3 ? "bg-gray-200 text-gray-400" : ""
                    } `}
                    onClick={() => {
                        if (page < 3) setPage(page + 1);
                    }}
                />
            </div>
        </div>
    );
};

export default Gallery;

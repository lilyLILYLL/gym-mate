import { StaticImageData } from "next/image";

export type SampleModel = {
    img: StaticImageData;
    label: string;
};

export type TrainerInfoModel = {
    avatar: StaticImageData;
    full_name: string;
    role: string;
};

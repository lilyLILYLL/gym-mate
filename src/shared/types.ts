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

export type CourseModel = {
    img: StaticImageData;
    level: "Beginners" | "Intermidiate" | "Advanced";
    price: number;
    classes: string[];
};

export type BenefitCardModel = {
    img: string;
    title: string;
    description: string;
};

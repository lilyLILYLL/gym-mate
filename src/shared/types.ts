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

export type GymPlanType = {
    benefits: string[];
    price: number;
    img: string;
    type: string;
};

export type BenefitCardModel = {
    img: string;
    title: string;
    description: string;
};
export type ClassModel = {
    classId: number;
    img: StaticImageData[];
    name: string;
    time: string[];
    trainer: string;
};

export type ContactFormmModel = {
    full_name: string;
    email: string;
    class: string;
    comment: string;
};

export type UserAuthenticationType = {
    email: string;
    password: string;
};

export type IUser = {
    email: string;
    username: string;
    registeredClasses?: string[];
};

export type RegiesterUserType = UserAuthenticationType & {
    username: string;
};

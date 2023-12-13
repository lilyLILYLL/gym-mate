import { SampleModel, TrainerInfoModel } from "./types";
import {
    Workout,
    Equiments,
    Gym,
    BenchPRess,
    BottleOfWAter,
    gym_bag,
    trainning,
    Trainer1,
    Trainer2,
    Trainer3,
} from "@assets";

export const WHO_WE_ARE_BANNER_SAMPLES: SampleModel[] = [
    {
        img: Workout,
        label: "PROFESSIONAL TRAINERS",
    },
    {
        img: Equiments,
        label: "MODERN EQUIPMENTS",
    },
    {
        img: Gym,
        label: "FANCY GYM MACHINES",
    },
];

export const WHY_CHOOSE_US_SAMPLES: SampleModel[] = [
    {
        img: trainning,
        label: "Free Fitness Training",
    },
    {
        img: BenchPRess,
        label: "Modern Gym Equipments",
    },
    {
        img: gym_bag,
        label: "Fresh Bottle Watter",
    },
    {
        img: BottleOfWAter,
        label: "Gym Bag Equipments",
    },
];

export const trainers: TrainerInfoModel[] = [
    { avatar: Trainer1, full_name: "John Lewis", role: "Crossfit Trainer" },
    { avatar: Trainer2, full_name: "Joey Tribbiani", role: "Yoga Trainer" },
    { avatar: Trainer3, full_name: "Rachel Green", role: "Personal Trainer" },
];

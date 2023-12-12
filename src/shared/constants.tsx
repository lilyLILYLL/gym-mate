import { SampleModel } from "./types";
import {
    Workout,
    Equiments,
    Gym,
    BenchPRess,
    BottleOfWAter,
    gym_bag,
    trainning,
} from "@assets";
export const SCREENS = [
    "home",
    "about",
    "gallery",
    "schedule",
    "blog",
    "pricing",
    "classes",
    "contact",
];

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

import * as Yup from "yup";
import {
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
    gallery_5,
    gallery_6,
    gallery_7,
    gallery_8,
    gallery_9,
    gallery_10,
    gallery_11,
    gallery_12,
} from "@assets";
import { ContactFormmModel } from "./types";

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

export const galleryImgs = [
    gallery_1,
    gallery_2,
    gallery_3,
    gallery_4,
    gallery_5,
    gallery_6,
    gallery_7,
    gallery_8,
    gallery_9,
    gallery_10,
    gallery_11,
    gallery_12,
];

export const dates = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
export const ContactFormSchema = Yup.object({
    email: Yup.string().email("Invalid email!").required("Email is required"),
    full_name: Yup.string().required("Full name is required"),
    class: Yup.string().required("Class is required"),
    comment: Yup.string(),
});

import { SampleModel, TrainerInfoModel, BenefitCardModel, ClassModel } from "./types";
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
    PricingImg1,
    PricingImg2,
    PricingImg3,
    bodybuilding,
    box,
    cross,
    fitness,
    karate,
    meditation,
    mma,
    powerlifting,
    running,
    workout,
    yoga,
    features_meditation,
    features_karate,
    features_karate_red,
    features_yoga,
    features_yoga_red,
    features_workout,
    features_workout_red,
    features_bike_red,
    features_gym_bike,
    features_dumbell,
    features_dumbell_red,
    features_boxer,
    features_boxer_red,
    cycling,
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

export const COURSE = [
    {
        level: "Beginners",
        price: 39,
        classes: [
            "Free Hand",
            "Gym Fitness",
            "Weight Loss",
            "Personal Trainer",
            "Cycling",
        ],
        img: PricingImg1,
    },
    {
        level: "Intermidiate",
        price: 65,
        classes: [
            "Free Hand",
            "Gym Fitness",
            "Weight Loss",
            "Personal Trainer",
            "Cycling",
        ],
        img: PricingImg2,
    },
    {
        level: "Advanced",
        price: 100,
        classes: [
            "Free Hand",
            "Gym Fitness",
            "Weight Loss",
            "Personal Trainer",
            "Cycling",
        ],
        img: PricingImg3,
    },
];

export const WHAT_WE_PROVIDE: BenefitCardModel[] = [
    {
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6BAMAAADhKQK+AAAAKlBMVEUAAAD/ADT/ADT/ADT/ADT/ADT/ADT/ADT/ADT/ADT/ADT/ADT/ADT/ADR73ev4AAAADXRSTlMAON6JoykSCsBccRxJBhRO3gAAAedJREFUSMeVlbtKA0EUhs9q1ihByKogCELEQpuAIlgoAcVbteALBLSykECwFAVttNpHEEQbG0EfQNBCrARzMYmR/13cTSack93ZnfhVO/DNzNmfMzMU5dhxjiiZmTx8atMJiuVBcRnrjIGZi3eMlhWUU38/opHDB/js6SQXwKb6PguKy0adEwCr1MP2rZ+IYwPYDW2+EZaKQIUkKaAectJ5VA+oj5vIUqPAggpivbdhpKpHVMvUoYADrmBfOhmgqT6BLIebk9IQT2KJCmhLaTYYssRT5c/kkZMSZ7ckkgOyUuL9mjKAKumkkgzhHBWtlBKT6RNfWsmWlXvYCEk8MH5TQf2etdZZNfOkk2ZVNEVcWAAVajqphC8l14fRSgFljTSORi/7bbRcgBIkG12+9ZIKsAgf2QXLjk9IsnmhAHTJsaRKh2pwITWkpI73gsivQ7Mr8Q43QYP3OF3psK9yavBNcU16XkRDPVMEbg8jLpYoAU7WhAWUjdIoWmSkiIpZ8pAzlzRI3eeokpH8ACWlEI7SXnyKxC1346YIL/RL/ZSAV5KkPW7p2Bt5Qnfbu/1vzjD6l+YmnpOjUJF8Htqqiil5NiRpFz7zb44z6cHnNvbBY66MTzCwQ3Fk7pTS+qAEDu8BbL3Tv/kDDIZWVPaeBKIAAAAASUVORK5CYII=",
        title: "PROGRESSION",
        description:
            "Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.",
    },
    {
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6BAMAAADhKQK+AAAAKlBMVEUAAAD/ADT/ADT/ADT/ADT/ADT/ADT/ADT/ADT/ADT/ADT/ADT/ADT/ADR73ev4AAAADXRSTlMAEjiJSaPeKcAcCnFcosoqLgAAAX1JREFUSMfd1L9Kw1AUBvDT2j8iFpoHCJQW3ALFCk6FgODm4OQUcHAtCI5S8AEsOLgWHFwLvkChLyA0LamN8r2L94TT5EZzewcHod90uP01H+EkoZ8pj9YtsiUAIpupQMW3oAajuQWNGcUW5DFaWJDLKLSgGqNrC6ozuiVLhsAHWdM5pr+n3k5juX9g+2ZGGQrNy80SWds4LXNbH0mmwNzYFsnF2sCyGE2AT0GtwLSbAPA3qGbYchlY0wbVgS9DW5gimgJNQ1uG9oEHQ1uGSoUPcYPbMkQXwMsv1FdtOqoC3cI2HR0MuO+sdyrAw5JfgFhHfLri0gULx2kqxG1vyS9JZmrc4xMPCxcgIFSoDP7fcwDJo1rKAHEecdurEGFPY6zziNs85NKtAL6OwG2Cbs4FUYBwmEexoCuiI0ETRK6GzPk/FDkq78ClI/FkDjS0TFao7d2Vub/rqOQ4PG1HcnLXOzGgfHYfDQFf+6LNClEVq3Q+VHNxOn4232szfQMqNmF3JPiFjQAAAABJRU5ErkJggg==",
        title: "WORKOUT",
        description:
            "With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.",
    },
    {
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAA6BAMAAADhKQK+AAAAKlBMVEUAAAD/ADT/ADT/ADT/ADT/ADT/ADT/ADT/ADT/ADT/ADT/ADT/ADT/ADR73ev4AAAADXRSTlMAEjiJByneo1zAcRxJVBTmlwAAARhJREFUSMfV1T8LgkAYx/GnUmoocKktiNuF4FranJqj3a1V6A0IvQEh6A34BoJoaO4lpFT2h3svaUVXduc9kEX9Vj+g3pcS4Hm1EMBcQ/bUqEiIyeKFhLSkyGb3baXI5CgUghl72TFtSkwwP/1WIrR+QVNKXX49orQrQAZAk6MAoPBp1ONoKEUauc+Souf9DNJaCGSO1aiyR9zO9VVoAOUofqrbmRtCpDkd91IjCyXpkne7hZHcTmcR4pzsAIH0dp5Z+gi0RGSpYrJ4IxVaQHkXP5VzPXFLjBzf2yiz2LvHLJYsywGT5YTJMsnzJ2UgUKOtRsUolyx1qCRZ6HXiw9TY2AswWVb8n+y9LNuvZ/k/NE8jXYAyvpxntlVgyqd1SKUAAAAASUVORK5CYII=",
        title: "NUTRITIONS",
        description:
            "Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.",
    },
];
export const CLASSES: ClassModel[] = [
    {
        img: [cycling, features_gym_bike, features_bike_red],
        name: "Cycling",
        time: [
            "Wednesday: 9:00am-10:00am",
            "Monday: 9:00am-10:00am",
            "Tuesday: 9:00am-10:00am",
        ],
        classId: 1,
        trainer: "John Weights",
    },
    {
        img: [meditation, features_karate, features_karate_red],
        name: "Meditation",
        time: [
            "Wednesday: 9:00am-10:00am",
            "Thurday: 10:00am-12:00pm",
            "Friday: 9:00am-10:00am",
        ],
        classId: 1,
        trainer: "Junifor Jonas",
    },
    {
        img: [mma, features_boxer, features_boxer_red],
        name: "Martial Arts",
        time: [
            "Wednesday: 9:00am-10:00am",
            "Saturday: 9:00am-10:00am",
            "Sunday: 9:00am-10:00am",
        ],
        classId: 1,
        trainer: "David Vila",
    },
    {
        img: [powerlifting, features_dumbell, features_dumbell_red],
        name: "Power",
        time: [
            "Tuesday: 9:00am-10:00am",
            "Monday: 9:00am-10:00am",
            "Wednesday: 9:00am-10:00am",
        ],
        classId: 1,
        trainer: "Robert Louis",
    },

    {
        img: [workout, features_workout, features_workout_red],
        name: "Workout",
        time: [
            "Tuesday: 9:00am-10:00am",
            "Monday: 9:00am-10:00am",
            "Wednesday: 9:00am-10:00am",
        ],
        classId: 1,
        trainer: "Rachel Green",
    },
    {
        img: [yoga, features_yoga, features_yoga_red],
        name: "Yoga",
        time: [
            "Wednesday: 9:00am-10:00am",
            "Sunday: 9:00am-10:00am",
            "Thurdays: 9:00am-10:00am",
        ],
        classId: 1,
        trainer: "Rachel Green",
    },
];

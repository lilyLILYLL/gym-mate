import { api } from ".";
import { GymPlanType } from "@shared";

export const fetchingApi = api.injectEndpoints({
    endpoints: (builder) => ({
        // GET GALLERY IMAGES
        getGalleryImages: builder.query<any, { page: number; pageSize: number }>({
            query: ({ page, pageSize }) =>
                `galleryImages?pageNumber=${page}&pageSize=${pageSize}`,
        }),

        // GET CLASSES
        getClasses: builder.query<any, { page: number; pageSize: number }>({
            query: ({ page, pageSize }) =>
                `classes?pageNumber=${page}&pageSize=${pageSize}`,
        }),
    }),
});
export const { useLazyGetGalleryImagesQuery } = fetchingApi;

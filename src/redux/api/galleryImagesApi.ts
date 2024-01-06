import { api } from ".";

export const galleryImagesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getGalleryImages: builder.query<any, { page: number; pageSize: number }>({
            query: ({ page, pageSize }) =>
                `galleryImages?pageNumber=${page}&pageSize=${pageSize}`,
        }),
    }),
});
export const { useLazyGetGalleryImagesQuery } = galleryImagesApi;
